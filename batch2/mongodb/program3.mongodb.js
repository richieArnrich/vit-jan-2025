use("car-rentals");

db.createCollection("bookings");

// db.bookings.insertOne({
//   _id: "booking_01", //pk for bookings
//   customer_id: "cust_01", //fk
//   car_id: "CarTY01", //fk
// });

db.bookings.insertMany([
  {
    _id: "booking_02",
    customer_id: "cust_02",
    car_id: "CarTY02",
  },
  {
    _id: "booking_03",
    customer_id: "cust_03",
    car_id: "CarHO03",
  },
]);
