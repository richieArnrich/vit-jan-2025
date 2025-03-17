use("bike-rentals"); //name of database

db.createCollection("bikes"); //name of collection

//insert one document into bikes
// db.bikes.insertOne({
//   _id: "bikeH01",
//   brand: "Honda",
//   model: "CBR500R",
//   year: 2015,
//   price: 5000.0,
//   color: "Red",
//   rented: false,
// });

//insert many
// db.bikes.insertMany([
//   {
//     _id: "bikeH02",
//     brand: "Honda",
//     model: "SP125",
//     year: 2018,
//     price: 3000.0,
//     color: "Blue",
//     rented: false,
//   },
//   {
//     _id: "bikeT03",
//     brand: "Triumph",
//     model: "Street Twin",
//     year: 2017,
//     price: 4500.0,
//     color: "Black",
//     rented: false,
//   },
//   {
//     _id: "bikeRE04",
//     brand: "Royal Enfield",
//     model: "Classic 350",
//     year: 2019,
//     price: 2500.0,
//     color: "Brown",
//     rented: false,
//   },
//   {
//     _id: "bikeHe05",
//     brand: "Hero",
//     model: "Xtreme 200R",
//     year: 2020,
//     price: 2000.0,
//     color: "White",
//     rented: false,
//   },
// ]);

//fetch all the bikes in the db
// let bikes = db.bikes.find();
// print the result
// print(bikes.toArray());

//fetch all the bikes whose price are >3000
// db.bikes.find({ price: { $gt: 3000 } });

//find the total number of bikes in the db
// let count = db.bikes.countDocuments();
// console.log(count);

//fetch the details of all honda bikes
db.bikes.find({ brand: "Honda" });

// update bike bkeH02 price to 1200
db.bikes.updateOne(
    { _id: "bikeH02" },
    { $set: { price: 1200.0 } }
)
