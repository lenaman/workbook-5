let kids = [
  { first: "Natalie", last: "Plyers" },
  { first: "Brittany", last: "Ray" },
  { first: "Zachary", last: "Westly" },
];

// below is anonymous function as callback function passed to forEach function
kids.forEach(function (kid) { 
    console.log(kid.first);
 });

 // below is arrow function as callback function passed to forEach function
 kids.forEach((kid) => console.log(kid.first));
 