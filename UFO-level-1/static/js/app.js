// from data.js
var tableData = data;

console.log(tableData);

// References to inputText, buttion, tbody

var inputText = d3.select(".form-control");
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// create function to filter by date
// function filterByDate(sighting) {
//     return sighting.datetime === queryText;
// };

// Sample filter to be used in action function
// var filteredData = tableData.filter(filterByDate);
// console.log(filteredData);

// filterDataLength = filteredData.length


// start of function to take in input text and action on 'filter button click'
inputText.on("change", function() {
    // select the input text
    var queryText = d3.event.target.value;
   
    // fuction for on button click
    button.on("click", function() {
        
        // display date entered
        console.log(queryText);
        
        // Clear contents of tbody
        tbody = tbody.text('')

        // Use function to filter data based off of query text
        function filterByDate(sighting) {
            return sighting.datetime === queryText;}
        var filteredData = tableData.filter(filterByDate);
        console.log(filteredData);
        // Get length of filtered data for table
        filterDataLength = filteredData.length;
        console.log(filterDataLength);

        // Start building table
        filteredData.forEach((sighting) => {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    
    });
  });

