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

db.cars.insertMany([
  {
    _id: "CarTY02",
    make: "Toyota",
    model: "Corolla",
    year: 2018,
    price: 18000,
    rental_status: "available",
  },
  {
    _id: "CarHO03",
    make: "Honda",
    model: "Civic",
    year: 2019,
    price: 20000,
    rental_status: "available",
  },
  {
    _id: "CarTY04",
    make: "Toyota",
    model: "Etios",
    year: 2017,
    price: 16000,
    rental_status: "available",
  },
  {
    _id: "CarHO05",
    make: "Honda",
    model: "Accord",
    year: 2019,
    price: 25000,
    rental_status: "available",
  },
  {
    _id: "CarVW06",
    make: "Volkswagen",
    model: "Tiguan",
    year: 2019,
    price: 30000,
    rental_status: "available",
  },
  {
    _id: "CarVW07",
    make: "Volkswagen",
    model: "Taigun",
    year: 2019,
    price: 30000,
    rental_status: "available",
  },
]);
