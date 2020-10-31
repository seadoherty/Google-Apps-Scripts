function runNodeNetwork(){   
  var html =  HtmlService.createTemplateFromFile('2_nodeNetwork')
  .evaluate()
  .setWidth(675)
  .setHeight(520)
  .setSandboxMode(HtmlService.SandboxMode.IFRAME);   
  SpreadsheetApp.getUi().showModalDialog(html, 'VisJS Network Nodes from a Sheet!');  
}   

function getNodes(){
  var nodeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('NodeData');
  var nodeLastRow = nodeSheet.getLastRow();
  var nodeRange = nodeSheet.getRange("A2:B" + nodeLastRow).getValues(); 
  return nodeRange;
}

function getEdges(){  
  var edgeSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('EdgeData');
  var edgeLastRow = edgeSheet.getLastRow();
  var edgeRange = edgeSheet.getRange("A2:C" + edgeLastRow).getValues(); 
  return edgeRange;  
}