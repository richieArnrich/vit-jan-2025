use("bike-rentals");

db.createCollection("bookings");

// db.bookings.insertOne({
//   _id: "booking_01",
//   customer_id: "cust_01",
//   bike_id: "bikeH01",
// });

// db.bookings.insertMany([
//   {
//     _id: "booking_02",
//     customer_id: "cust_02",
//     bike_id: "bikeT03",
//   },
//   {
//     _id: "booking_03",
//     customer_id: "cust_03",
//     bike_id: "bikeRE04",
//   },
// ]);

// db.bookings.insertOne({
//   _id: "booking_04",
//   customer_id: "cust_03",
//   bike_id: "bikeH01",
// });

// db.bookings.insertOne({
//   _id: "booking_05",
//   customer_id: "cust_02",
//   bike_id: "bikeRE04",
// });

db.bookings.find();

// find data of booking_id booking_03
// db.bookings.find({ _id: "booking_03" });
