let data = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Alice", age: 20 },
  { id: 5, name: "Mike", age: 40 },
];

let admin = {
  username: "admin",
  password: "password",
  role: "admin",
};

// data must be displayed if form data === admin object data
let statusEle = document.getElementById("status");
let table = document.getElementById("table");
let tbody = document.getElementById("tbody");

statusEle.style.display = "none";
table.style.display = "none";

function handleSubmit() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let role = document.getElementById("role").value;
  statusEle.style.display = "block";
  statusEle.classList.add("spinner-border");
  console.log(username, password, role);
  authenticate(username, password, role)
    .then((res) => {
      statusEle.classList.remove("spinner-border");
      statusEle.innerHTML = "Welcome Admin....!!!";
      statusEle.classList.add("bg-success");
      statusEle.classList.add("text-center");
      statusEle.classList.add("p-2");
      statusEle.classList.add("text-white");
      console.log(res);
      displayTable(res);
    })
    .catch((err) => {
      statusEle.classList.remove("spinner-border");
      statusEle.innerHTML = err;
      statusEle.classList.add("bg-danger");
      statusEle.classList.add("text-center");
      statusEle.classList.add("p-2");
      statusEle.classList.add("text-white");
      console.log(err);
    });
  event.preventDefault();
}

function authenticate(username, password, role) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (
        username === admin.username &&
        password === admin.password &&
        role === admin.role
      ) {
        resolve(data);
      } else {
        reject("Invalid username or password");
      }
    }, 2000);
  });
}

function displayTable(users) {
  setTimeout(() => {
    statusEle.style.display = "none";
    table.style.display = "block";
    // the arrow function is applied for each of the user element in the users array
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
