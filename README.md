## Sample application to learn node.js.

Supports basic CRUD operations on top of express server.
Project is inteded to learn different packages/dependencies and bacics of node.js application development.

## Project Setup Steps-

1. Clone the repo

   ```bash
   git clone https://github.com/rhythm2789/natoursAPI.git
   cd natoursAPI
   ```

2. Install the dependencies.

   ```bash
   npm install
   ```

3. Start the express server, run the following

   ```bash
   npm run start:dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) or POSTMAN app to test.

## APIs supported as now-

1. Retrieve all tours
   GET /api/v1/tours

2. Retrieve single tour data
   GET api/v1/tours/<id>

3. Create a tour data: POST a single tour, updates id dynamically and sends back response with created data.
   POST api/v1/tours
   Dummy Payload-

   ```
   { "name": "The Forest Hiker", "duration": 5, "maxGroupSize": 25, "difficulty": "easy", "ratingsAverage": 4.7, "price":3.3 }
   ```

   Mandatory fields: price, name

4. Update a tour data: No implementation, but placeholder exists. Returns valid 200OK response.
   PATCH api/v1/tours/<id>

5. Delete a tour data: No implementation, but placeholder exists. Returns valid 204 No Content response.
   DELETE api/v1/tours/<id>

## Note:

1. Since there is no database, this project uses files to store and retrieve data.
2. There are lot of placeholders left for implementation on db connection and setup.
3. This is dev env / learning project, hence many dev dependencies/non production packages left intact.
   1. This is also kept to show case things used in learning/development process.
4. Error validation is not 100%. Its just for learning.

## Directory Structure

dev-data : Some test files.
|_ data
|_ tours-simple.json : Main file which stores/appends tours data.
public: Static files for future website creation
controller: Main business logic
routes: Routing the incoming requests

## Test Cases as of now-

1. Using postman /browser URL use supported APIs to test it out.
2. Sample Error validation-
   1. GET
      1. Error on random id retrieval that is greater than max id.
      2. Invalid URL returns 404 Not Found.
   2. POST
      1. Single tour id without price or name returns invalid response.
      2. Without formdata sends back error response.

## Sample dev debug logs from morgan package-

    ```
    Hello from the middleware 👋
    Tour id is: 11 { id: '11' }
    GET /api/v1/tours/11 200 0.962 ms - 157
    Hello from the middleware 👋
    POST /api/v1/tours/11 404 0.520 ms - 155
    Hello from the middleware 👋
    Tour id is: 11
    PATCH /api/v1/tours/11 200 0.684 ms - 61
    Hello from the middleware 👋
    Tour id is: 11
    DELETE /api/v1/tours/11 204 0.778 ms
    ```

## Future Enhancements:

1. MongoDB connnection on hosted server.
2. All crud implementations with real database and read implemenation with maximum error validation.
3. APIs will be merged with HTML/CSS based website where request responses can be sent as in a read website.
