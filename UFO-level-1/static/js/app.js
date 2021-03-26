// from data.js
var tableData = data;

console.log(tableData);

// References to tbody, input field, and button

var inputText = d3.select(".form-control");
var button = d3.select("#filter-btn");


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
    var queryText = d3.event.target.value;
    // console.log(newText);
    button.on("click", function() {
        console.log(queryText);
        function filterByDate(sighting) {
            return sighting.datetime === queryText;}
        var filteredData = tableData.filter(filterByDate);
        console.log(filteredData);
    });
  });

