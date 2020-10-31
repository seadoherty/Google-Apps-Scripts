function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('VisJS Network Data from Sheets')
  .addItem('VisJS Node Network', 'runNodeNetwork')
  .addToUi();
}