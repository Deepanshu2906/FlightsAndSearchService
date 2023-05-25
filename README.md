# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the follwing piece of json
```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_Serach-db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  
}

```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx sequelize db:migrate`
```


## DB Design
  - Airplane Table
  - Flight
  - Airport
  - City

  - A flight belongs to an airplane but one airplane can be used in multiple flights.
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport

  ## Tables

  ### City -> id, name, createAt, updatedAt
  ### Airport -> id, namr, address,city_id, createdAt, updatedAt
      Relationship -> City has many airports and Airport belong to a city ( one to many )


```
  - command for creating model for the Airport table:
     `npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer`
 ```   
 ```
   - creating seeder file for  inserting initial airports data into db
      `npx sequelize generate --name add-airports`

   - once you have creted airports into seeders find now we can seed data into tables using below cli :
     `npx sequelize db:seed:all`
  
```
```
   - command for creating Fligths model:
  `npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer`
```   