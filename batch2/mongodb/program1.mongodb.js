use("car-rentals");

db.createCollection("cars");

// db.cars.insertOne({
//   _id: "CarTY01",
//   make: "Toyota",
//   model: "Camry",
//   year: 2015,
//   price: 15000,
//   rental_status: "available",
// });

// db.cars.insertMany([
//   {
//     _id: "CarTY02",
//     make: "Toyota",
//     model: "Corolla",
//     year: 2018,
//     price: 18000,
//     rental_status: "available",
//   },
//   {
//     _id: "CarHO03",
//     make: "Honda",
//     model: "Civic",
//     year: 2019,
//     price: 20000,
//     rental_status: "available",
//   },
//   {
//     _id: "CarTY04",
//     make: "Toyota",
//     model: "Etios",
//     year: 2017,
//     price: 16000,
//     rental_status: "available",
//   },
//   {
//     _id: "CarHO05",
//     make: "Honda",
//     model: "Accord",
//     year: 2019,
//     price: 25000,
//     rental_status: "available",
//   },
//   {
//     _id: "CarVW06",
//     make: "Volkswagen",
//     model: "Tiguan",
//     year: 2019,
//     price: 30000,
//     rental_status: "available",
//   },
//   {
//     _id: "CarVW07",
//     make: "Volkswagen",
//     model: "Taigun",
//     year: 2019,
//     price: 30000,
//     rental_status: "available",
//   },
// ]);

// fetch all the cars in the db
db.cars.find();

// fetch all the cars made my honda
// db.cars.find({ make: "Honda" });

// fetch all the cars made my honda and volkswagen
// db.cars.find({ make: { $in: ["Honda", "Volkswagen"] } });

//update the price of the car CarHO03 to 22000
// db.cars.updateOne({ _id: "CarHO03" }, { $set: { price: 22000 } });
// db.cars.find({ make: { $regex: "^Honda$", $options: "i" } });

//update the rental_status based on the presence of the car id in bookings collection
db.cars.updateMany(
  {
    _id: { $in: db.bookings.distinct("car_id") },
  },
  {
    $set: { rental_status: "booked" },
  }
);

db.cars.find({ rental_status: "booked" });
