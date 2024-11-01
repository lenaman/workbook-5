"use strict";

const travelDestinations = [
  {
    name: "Paris",
    country: "France",
    continent: "Europe",
    averageVisitors: 19,
  },
  {
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    averageVisitors: 22.7,
  },
  {
    name: "NYC",
    country: "USA",
    continent: "North America",
    averageVisitors: 13.5,
  },
  {
    name: "Dubai",
    country: "UAE",
    continent: "Asia",
    averageVisitors: 16.7,
  },
  {
    name: "Istanbul",
    country: "Turkey",
    continent: "Europe/Asia",
    averageVisitors: 13.4,
  },
  {
    name: "Tokyo",
    country: "Japan",
    continent: "Asia",
    averageVisitors: 15,
  },
  {
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    averageVisitors: 9.6,
  },
  {
    name: "London",
    country: "United Kingdom",
    continent: "Europe",
    averageVisitors: 19.6,
  },
];

const averageVisitors = ["19", "22.7", "13.5", "16.7", "13.4", "15", "9.6", "19.6"];

const averageVisitorsDropdown = document.querySelector("#averageVisitorsDropdown");
const placesTBody = document.querySelector("#placesTBody");

for (const averageVisitor of averageVisitors) {
  let option = document.createElement("option");
  option.value = averageVisitor;
  option.innerText = averageVisitor;
  averageVisitorsDropdown.appendChild(option);
}
function displayDestinations(destinations) {
  placesTBody.innerHTML = "";
  for (const destination of destinations) {
    let tr = document.createElement("tr");
    placesTBody.appendChild(tr);

    let td1 = document.createElement("td");
    td1.innerText = destination.name;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = destination.country;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = destination.continent;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.innerText = destination.averageVisitors;
    tr.appendChild(td4);
  }
}
function filterByAverageVisitors() {
  let selectedAverageVisitors = parseFloat(averageVisitorsDropdown.value);
  let filteredDestinations = travelDestinations.filter(
    (destination) => destination.averageVisitors === selectedAverageVisitors
  );
  displayDestinations(filteredDestinations);
}
displayDestinations(travelDestinations);
averageVisitorsDropdown.addEventListener("change", filterByAverageVisitors);


