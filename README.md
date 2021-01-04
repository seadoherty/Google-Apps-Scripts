![AppScriptVisJS](https://user-images.githubusercontent.com/2447375/103564707-feabec00-4e8c-11eb-8a83-1388f3055c7b.gif)

![Google Sheets logo](https://www.google.com/images/about/sheets-icon.svg)   **+**    ![VisJs logo](https://visjs.org/images/visjs_logo.png)  
# VisJS Network with Sheets data


This apps script generates a popup displaying an interactive network from your Sheets data. It is broken into 3 code files to break up general functionality:  
**0_menu** - Creates a dropdown in your Sheet to run the code  
**1_nodeNetwork** - Gets the data and displays the popup  
**2_nodeNetwork** - HTML for the popup

To run the code:
1. Create a Sheet with 2 tabs: **NodeData** and **EdgeData**
2. Copy the 3 code files into the Script Editor (Tools -> Script Editor)
3. Upload the NodeData.csv and EdgeData.csv files in their corresponding tabs
4. Run the code to prompt authorization (the first time you run apps scripts, you need to authorize them)
5. Refresh the Sheet and you should see a new Menu option called 'VisJS Network Data from Sheets', click it to display the dropdown
6. Click 'VisJS Node Network' to display the popup of the network
