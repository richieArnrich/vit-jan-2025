use("bike-rentals");

//find the details of booking_01 with the customer details
// db.bookings.find({ _id: "booking_01" });

//aggregation functions
// db.bookings.aggregate([
//   {
//     $lookup: {
//       from: "users",
//       localField: "customer_id",
//       foreignField: "_id",
//       as: "customer_details",
//     },
//   },
//   {
//     $lookup: {
//       from: "bikes",
//       localField: "bike_id",
//       foreignField: "_id",
//       as: "bike_details",
//     },
//   },
//   {
//     $unwind: "$customer_details",
//   },
//   {
//     $unwind: "$bike_details",
//   },
//   {
//     $project: {
//       /*
//         exclusion projection
//       //   _id: 0, // do not display
//       //   customer_id: 0, // do not display
//       //exclude address
//       //   "customer_details.address": 0,
//       */
//       customer_name: "$customer_details.name",
//       customer_contact: "$customer_details.contact",
//       customer_email: "$customer_details.email",
//       bike_brand: "$bike_details.brand",
//       bike_model: "$bike_details.model",
//       bike_price: "$bike_details.price",
//     },
//   },
//   {
//     //sort according to bike price
//     $sort: {
//       bike_price: 1, // ascending order
//     },
//   },
// ]);

//where is the details of
//customer located?

// indexing, sharding, scalability

//update bikes which are booked by the customers
// db.bikes.updateMany(
//   {
//     _id: { $in: db.bookings.distinct("bike_id") },
//   },
//   {
//     $set: { rented: true },
//   }
// );

//view all rented bikes
db.bikes.find({ rented: true });
