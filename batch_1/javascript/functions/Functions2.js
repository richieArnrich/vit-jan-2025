let person = {
  name: "Anil",
  age: 25,
  occupation: "Software Engineer",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
  },
  printDetails: function () {
    console.log(this); //references the current object address
    document.write("Name : " + this.name + "<br>");
    document.write("Age : " + this.age + "<br>");
    document.write("Occupation : " + this.occupation + "<br>");
    document.write(
      "Address : " +
        this.address.street +
        ", " +
        this.address.city +
        "," +
        this.address.state
    ); //accessing nested object
  },
};

document.write(person.name + "<br>");
document.write(person["age"] + "<br>");
document.write("<br>------------------------------------------------<br>");
for (let key in person) {
  if (key != "address") {
    document.write(key + ": " + person[key] + "<br>");
  } else {
    for (let key2 in person.address) {
      document.write(key2 + ": " + person.address[key2] + "<br>");
    }
  }
}
document.write("<br>------------------------------------------------<br>");
person.printDetails();
