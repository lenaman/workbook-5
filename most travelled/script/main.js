"use strict"

const travelDestinations = [
        {
          name: "Paris",
          country: "France",
          continent: "Europe",
          averageVisitors: 19
        },
        {
          name: "Bangkok",
          country: "Thailand",
          continent: "Asia",
          averageVisitors: 22.7
        },
        {
          name: "New York City",
          country: "USA",
          continent: "North America",
          averageVisitors: 13.5
        },
        {
          name: "Dubai",
          country: "UAE",
          continent: "Asia",
          averageVisitors: 16.7
        },
        {
          name: "Istanbul",
          country: "Turkey",
          continent: "Europe/Asia",
          averageVisitors: 13.4
        },
        {
          name: "Tokyo",
          country: "Japan",
          continent: "Asia",
          averageVisitors: 15
        },
        {
          name: "Rome",
          country: "Italy",
          continent: "Europe",
          averageVisitors: 9.6
        },
        {
          name: "London",
          country: "United Kingdom",
          continent: "Europe",
          averageVisitors: 19.6
        }
      ];
      
      let placesTBody = document.querySelector("#placesTBody");
      console.log(placesTBody);

      for (const places of travelDestinations ) {
        
        let tr = document.createElement("tr");
        placesTBody.appendChild(tr);

        let td1 = document.createElement("td");
        td1.innerText = places.name;
        tr.appendChild(td1)

        let td2 = document.createElement("td");
        td2.innerText = places.country;
        tr.appendChild(td2)

        let td3 = document.createElement("td");
        td3.innerText = places.continent;
        tr.appendChild(td3)

        let td4 = document.createElement("td");
        td4.innerText = places.averageVisitors;
        tr.appendChild(td4)
      }



