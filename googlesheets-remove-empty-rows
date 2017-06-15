//Remove All Empty Rows in the Entire Workbook
function removeEmptyRows() {
  var rows = [];
var range = SpreadsheetApp.getActiveSheet().getActiveRange();
  var numRows = range.getNumRows();
  var numCols = range.getNumColumns();
  for (var i = 1; i <= numRows; i++) {
    var currentValue = range.getCell(i,1).getValue();
    if(currentValue == "")
    {
      rows.push(i);
    }
  }
  for (var i = 0; i < rows.length; i++) {
    SpreadsheetApp.getActiveSheet().deleteRow(rows[i] - i);
  }
}
