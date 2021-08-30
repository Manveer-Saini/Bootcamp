const express = require('express');
const app = express();
const port = 8000;
var faker = require('faker');

const createUser = () => {
    const user = {
        id: faker.random.alphaNumeric,
        firstName: faker.name.firstName,
        lastName: faker.name.lastName,
        phoneNumber: faker.phone.phoneNumber,
        email: faker.internet.email,
        password: faker.internet.password
    }
    return user;
}

const createCompany = () => {
    const company = {
        id: faker.random.alphaNumeric,
        companyName: faker.company.companyName,
        address: {
            street: faker.address.streetAddress,
            city: faker.address.city,
            state: faker.address.state,
            zipCode: faker.address.zipCode,
            country: faker.address.country
        } 
    }
    return company;
}



app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    console.log(newUser);
    console.log("hi")
    res.send(newUser);
    // res.send({message: "Welcome to our API"});
});

app.listen(port, () => {console.log("Our express server is listening on port 8000")});