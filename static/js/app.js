// Get references to the tbody element, input field and button
var tbody = d3.select('tbody');

// Set filteredReports to addressData initially
// addressData comes from the addressData.js file
 var filteredReports1 = data;

// renderTable renders the filteredReports to the tbody
function renderTable(filteredReports) {
  tbody.html("");
  for (var i = 0; i < filteredReports.length; i++) {
    var row = tbody.append("tr");
    Object.values(filteredReports[i]).forEach((val) => {
     var cell = row.append("td");
       cell.text(val);
    });
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
//   var filterState = $dateInput.value.trim().toLowerCase();
   var date = d3.select("#datetime").property("value")
   var filteredData = filteredReports1.filter(row => row.datetime === date);
  renderTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", handleSearchButtonClick)
// Render the table for the first time on page load
renderTable(filteredReports1);
