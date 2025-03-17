use("bike-rentals");

db.createCollection("bookings");

// db.bookings.insertOne({
//   _id: "booking_01",
//   customer_id: "cust_01",
//   bike_id: "bikeH01",
// });

db.bookings.insertMany([
  {
    _id: "booking_02",
    customer_id: "cust_02",
    bike_id: "bikeT03",
  },
  {
    _id: "booking_03",
    customer_id: "cust_03",
    bike_id: "bikeRE04",
  },
]);
