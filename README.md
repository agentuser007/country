## Project Overview

This is a web application that allows you to search for and display information about countries using data from the restcountries API. The project is built using React for the front-end, Axios for making HTTP requests to fetch country data, and Bootstrap for styling the user interface.

## Features

- **Express Server:** The backend is built using Express, a minimal and flexible Node.js web application framework.

- **API Integration:** It communicates with the [REST Countries API](https://restcountries.com/v3.1/name/) to fetch information about countries.

- **Error Handling:** Includes error handling for various scenarios to ensure robustness.

  

#### Technologies Used

- **Frontend**: React, Bootstrap, react-json-view
- **Backend**: Node.js, Express, Axios, CORS
- **Deployment**: AWS EC2 (ubuntu), GitHub, PM2, Nginx

## Setup

Download the project from GitHub or zip file:

```markdown
git clone https://github.com/agentuser007/countryProject.git
```



## API Routes

The backend exposes the following routes:

- `GET /country/${countryName}`: Fetches information about a specific country by name.

Example:

```bash
curl http://localhost:8080/country/us
```

## Folder Structure

**Frontend** ```country```:

`src` folder: This folder contains the source code of the React app, such as the components, the styles, the hooks, and the utilities. The subfolders are:

- `components` folder: Contains the reusable UI components that are used in different part of the web.
- `utils` folder: Contains utility functions such as formatting Json.
- ```cypress``` folder: Contains cypress test file.

## Testing

* The ```country``` folder includes Cypress E2E tests to ensure the application's functionality. 

1. To open the Cypress Test Runner, use the following command:

   ```bash
   npx cypress open
   ```

2. Select and run E2E test from the Cypress Test Runner interface.



* To run tests for the backend, use the following command:

```bash
npm test
```

​		Tests are written using Jest and Supertest.

## Deployment

The whole project was deployed on AWS EC2 instance. Access the web page at [this URL](http://54.171.248.56/). 

