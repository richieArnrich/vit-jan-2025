let person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
  printData: function () {
    console.log(this); // refers to the current object
    document.write("Name : " + this.name + "<br>");
    document.write("Age : " + this.age + "<br>");
    document.write("Occupation : " + this.occupation + "<br>");
    document.write(
      "Address : " +
        this.address.street +
        ", " +
        this.address.city +
        ", " +
        this.address.state +
        ", " +
        this.address.zip
    );
  },
};

person.printData();
