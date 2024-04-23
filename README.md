The backend serves as the backbone powering all functionalities of the application. It manages business logic, user authentication, and secure data storage, providing a robust API for efficient communication between the app and the server. Essentially, it's the reliable foundation ensuring a consistent and effective user experience, enabling efficient collection, analysis, and visualization of research data.


## Running Locally

Clone the project

```bash
  git clone git@github.com:Vincenzofdg/Metrica_Backend.git
```

Navigate to the project directory

```bash
  cd Metrica_Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you'll need to add the following environment variables to your .env file.

```.env
PORT=3001
DB_PORT=3306

SECRET=1287785345345649493

DB_HOST='host_name'
DB_USER='user_name'
DB_PASSWORD='password*'
DB_DATABASE='database_name'
```


## API Routes

### Login

`POST /login`

Authenticates a user and generates a JWT token to access the App Métrica.

`POST /login/main`

Authenticates a user and generates a JWT token to access the Dashboard.

`POST /login-manager/main`

Authenticates a user and generates a JWT token to access the App Métrica Gestor.

### User

`GET /user/:id`

Returns a specific user by ID.

`GET /user/progress/:id`

Returns a specific user's progress by Search ID.

## Dependencies

 - [MySQL](https://www.npmjs.com/package/mysql2)
 - [Express](https://www.npmjs.com/package/express)
 - [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
 - [Nodemon](https://www.npmjs.com/package/nodemon)
 - [Dotenv](https://www.npmjs.com/package/dotenv)
