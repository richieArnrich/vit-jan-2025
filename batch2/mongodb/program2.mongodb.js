use("car-rentals");

db.createCollection("users");

// db.users.insertMany([
//   {
//     _id: "cust_01",
//     name: "John Doe",
//     email: "john.doe@example.com",
//     password: "password123",
//     contact: 12345,
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//       state: "CA",
//       zip: "12345",
//     },
//   },
//   {
//     _id: "cust_02",
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     password: "password123",
//     contact: 67890,
//     address: {
//       street: "456 Elm St",
//       city: "Othertown",
//       state: "NY",
//       zip: "67890",
//     },
//   },
//   {
//     _id: "cust_03",
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     password: "password123",
//     contact: 11111,
//     address: {
//       street: "789 Oak St",
//       city: "Smalltown",
//       state: "TX",
//       zip: "11111",
//     },
//   },
// ]);

let users = db.users.find();
let userArr = users.toArray();

// console.log(userArr);

for (let user of userArr) {
  console.log(user._id);
  console.log(user.name);
  console.log(user.email);
  console.log("-------------------");
}
