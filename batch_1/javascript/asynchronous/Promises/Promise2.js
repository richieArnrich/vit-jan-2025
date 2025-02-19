// users array
let users = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Doe", age: 30 },
  { id: 3, name: "Bob Smith", age: 35 },
  { id: 4, name: "Alice Johnson", age: 20 },
  { id: 5, name: "Mike Brown", age: 40 },
];

const admin = {
  username: "Admin",
  password: "Admin123",
  role: "admin",
};

let statusEle = document.getElementById("status");
let table = document.getElementById("table");
let tbody = document.getElementById("tbody");
table.style.display = "none"; //display table only in display table function

function handleSubmit() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;
  statusEle.classList.add("spinner-border");
  console.log(username, password, role);
  authenticate(username, password, role)
    .then((result) => {
      if (result) {
        console.log("User authenticated");
        statusEle.innerHTML = "User Authenticated";
        statusEle.classList.remove("spinner-border");
        statusEle.classList.add("bg-success");
        statusEle.classList.add("p-2");
        statusEle.classList.add("text-white");
        statusEle.classList.add("text-center");
        console.log(result);
        displayTable(result);
      }
    })
    .catch((err) => {
      statusEle.innerHTML = err;
      statusEle.classList.remove("spinner-border");
      statusEle.classList.add("bg-danger");
      statusEle.classList.add("p-2");
      statusEle.classList.add("text-white");
      statusEle.classList.add("text-center");
      console.log(err);
    });
  event.preventDefault();
}

function authenticate(username, password, role) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (
        username == admin.username &&
        password == admin.password &&
        role == admin.role
      ) {
        resolve(users);
      } else {
        reject("Invalid username or password");
      }
    }, 2000);
  });
}

function displayTable(users) {
  setTimeout(() => {
    table.style.display = "block";
    statusEle.style.display = "none";
    users.map((user) => {
      let row = document.createElement("tr");
      let id = document.createElement("td");
      let name = document.createElement("td");
      let age = document.createElement("td");
      id.innerHTML = user.id;
      name.innerHTML = user.name;
      age.innerHTML = user.age;
      row.appendChild(id);
      row.appendChild(name);
      row.appendChild(age);
      tbody.appendChild(row);
    });
  }, 2000);
}
