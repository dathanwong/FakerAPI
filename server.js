const express = require("express");
const faker = require("faker");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const port = 8000;

class User{

    constructor(){
        this.id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this.id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = new Address();
    }
}

class Address{
    constructor(){
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) =>{
    res.json({company: new Company(), user: new User()});
});

app.listen(port, () => console.log(`Listening on port ${port}`));