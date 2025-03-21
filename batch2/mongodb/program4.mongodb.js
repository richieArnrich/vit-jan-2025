// fetch details of all bookings along with the customer details

use("car-rentals");

//fetch details of booking booking_03
db.bookings.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "customer_id",
      foreignField: "_id",
      as: "customer_details",
    },
  },
  {
    $lookup: {
      from: "cars",
      localField: "car_id",
      foreignField: "_id",
      as: "car_details",
    },
  },
  {
    $unwind: "$customer_details",
  },
  {
    $unwind: "$car_details",
  },
  {
    $project: {
      _id: 1,
      customer_name: "$customer_details.name",
      customer_email: "$customer_details.email",
      customer_contact: "$customer_details.contact",
      car_model: "$car_details.model",
      car_brand: "$car_details.brand",
      car_price: "$car_details.price",
    },
  },
  {
    $sort: {
      car_price: -1, //descending
    },
  },
]);
