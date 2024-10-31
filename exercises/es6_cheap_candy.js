
let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
];

// Which candies costs less than $4.00?
    let cheapCandies = products.filter(candy => candy.price < 4.00);
    let candyNames = cheapCandies.map(candy => candy.product);
    console.log("The candies that cost less than $4 are: ", cheapCandies);

// Which candies has "M&M" its name?
    let mmProducts = products.filter((candy) => candy.product.includes ("M&M"));
    console.log("The candies that have M&M are: ", mmProducts);

// Do we carry "Swedish Fish"?
    let swedishFish = products.filter((candy) => candy.product === "Swedish FIsh"));
    if ("Swedish Fish")
    console.log(Do we carry swedish fish?)