const express = require('express');
const app = express();
const port = 8000;
var faker = require('faker');

app.use(express.json());
app.use(express.urlencoded( { extended: true } ) );

const createUser = () => {
    const user = {
        id: faker.random.alphaNumeric(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return user;
}

const createCompany = () => {
    const company = {
        id: faker.random.alphaNumeric(),
        companyName: faker.company.companyName(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        } 
    }
    return company;
}



app.get("/api/users/new", (req, res) => {
    res.send(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.send(createCompany());
});

app.get("/api/user/company", (req, res) => {
    const userCompany = {
        user: createUser(),
        company: createCompany()
    }
    res.send(userCompany);
});

app.listen(port, () => {console.log("Our express server is listening on port 8000")});