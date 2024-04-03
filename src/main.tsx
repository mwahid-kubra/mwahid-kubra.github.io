import {
  ForgeThemeProvider,
  Table,
  TableCell,
  TableHeader,
  TableHeaderRow,
  TableRow,
} from "kubra-ux-forge";
import ReactDOM from "react-dom/client";

declare let looker: any;

looker.plugins.visualizations.add({
  // Id and Label are legacy properties that no longer have any function besides documenting
  // what the visualization used to have. The properties are now set via the manifest
  // form within the admin/visualizations page of Looker
  id: "bizhq-report-table-viz",
  label: "BizHQ Report Table Visualization",
  options: {
    font_size: {
      type: "string",
      label: "Font Size",
      values: [{ Large: "large" }, { Small: "small" }],
      display: "radio",
      default: "large",
    },
  },
  // Set up the initial state of the visualization
  create: function (element: HTMLElement, config: any) {
    console.log("create", "config", config);

    // Insert a <style> tag with some styles we'll use later.
    element.innerHTML = `
      <style>
        .bizhq-report-table-viz {
          /* Vertical centering */
          height: 100%;
          width: 100%;
          margin: -10px;
        }
      </style>
    `;

    this._container = element.appendChild(document.createElement("div"));
    this._container.className = "bizhq-report-table-viz";

    let containerRoot = ReactDOM.createRoot(this._container);

    // Render to the target element
    containerRoot.render(<div>Loading...</div>);
  },
  // Render in response to the data or settings changing
  updateAsync: function (
    data: Array<any>,
    element: HTMLElement,
    config: any,
    queryResponse: any,
    details: any,
    done: any
  ) {
    console.log("this", this);
    console.log("data", data);
    console.log("element", element);
    console.log("config", config);
    console.log("queryResponse", queryResponse);
    console.log("details", details);
    console.log("done", done);

    // Clear any errors from previous updates
    this.clearErrors();

    // Throw some errors and exit if the shape of the data isn't what this chart needs
    if (queryResponse.fields.dimensions.length == 0) {
      this.addError({
        title: "No Dimensions",
        message: "This chart requires dimensions.",
      });
      return;
    }

    const dimensions: Array<any> = queryResponse.fields.dimensions;
    const tableHeaders = dimensions.map((dimension: any) => (
      <TableHeader
        key={dimension.name}
        variant="sort"
        text={dimension.label_short}
      />
    ));

    console.log("tableHeaders", tableHeaders);

    const tableRows = data.map((row: any, index) => (
      <TableRow id={`row-${index}`} key={`row-${index}`}>
        {queryResponse.fields.dimensions.map((dimension: any) => (
          <TableCell
            key={`${dimension.name}-cell-${index}`}
            variant="text"
            text={row[dimension.name].value}
          />
        ))}
      </TableRow>
    ));

    console.log("tableRows", tableRows);

    const table = (
      <Table variant={"striped"}>
        <TableHeaderRow
          id={"header"}
          onSort={(index, direction) => console.log(index, direction)}
        >
          {tableHeaders}
        </TableHeaderRow>
        <>{tableRows}</>
      </Table>
    );

    // Render to the target element
    let containerRoot = ReactDOM.createRoot(this._container);
    containerRoot.render(<ForgeThemeProvider>{table}</ForgeThemeProvider>);

    // We are done rendering! Let Looker know.
    done();
  },
});
