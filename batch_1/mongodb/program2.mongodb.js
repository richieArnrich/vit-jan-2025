use("bike-rentals");

db.createCollection("users");

// db.users.insertOne({
//   _id: "cust_01",
//   name: "John Doe",
//   contact: 123456,
//   email: "johndoe@example.com",
//   address: {
//     street: "123 Main St",
//     area: "XY Nagar",
//   },
// });
db.users.insertMany([
  {
    _id: "cust_02",
    name: "Jane Doe",
    contact: 987654,
    email: "janedoe@example.com",
    address: {
      street: "456 Elm St",
      area: "PQ Nagar",
    },
  },
  {
    _id: "cust_03",
    name: "John Smith",
    contact: 111222,
    email: "johnsmith@example.com",
    address: {
      street: "789 Oak St",
      area: "RS Nagar",
    },
  },
]);
