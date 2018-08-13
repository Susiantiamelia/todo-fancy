## TODO FANCY
API Documentation for Todo Fancy API

### REST API
List of users routes:

| Route                                          | HTTP   | Request                                                | Description                                           |
|------------------------------------------------|--------|--------------------------------------------------------|-------------------------------------------------------|
| `http://localhost:3000/users/register`         | POST   | Body: - fullname - username - email - password         | Make a user Account                                   |
| `http://localhost:3000/users/login`            | POST   | Body: - uname_email - password                         | POST to login on todo fancy                           |
| `http://localhost:3000/users/loginfb`          | POST   |                                                        | POST to receive access token from login with facebook |
| `http://localhost:3000/users/profile`          | GET    | Headers: - token (you will get token after login)      | GET Profile of active users                           |
| `http://localhost:3000/users/edit-profile/:id` | PUT    | Params: - user id  Body: - fullname - username - email | PUT to edit users profile                             |
| `http://localhost:3000/users/delete/:id`       | DELETE | Params: - user id                                      | DELETE user account                                   |


List of todo routes: 

| Route                                                 | HTTP   | Request                                                                | Description                      |
|-------------------------------------------------------|--------|------------------------------------------------------------------------|----------------------------------|
| `http://localhost:3000/users/todos/add`               | POST   | Headers: - token (you will get token after login)  Body: - date - todo | POST to adding task on Todo List |
| `http://localhost:3000/users/todos/all`               | GET    | Headers:- token (you will get token after login)                       | GET all user task                |
| `http://localhost:3000/users/todos/update/:id`        | PUT    | Params: - task id  Body: - estimated_date - todo                       | PUT to edit task                 |
| `http://localhost:3000/users/todos/change_status/:id` | PUT    | Params: - task id  Body: - estimated_date - todo                       | PUT to change task status        |
| `http://localhost:3000/users/todos/delete/:id`        | DELETE | Params: - task id   Headers: - token (you will get token after login)  | DELETE user account              |

### Usage
With only npm:

`npm install`
`npm start`
`npm run dev`

Access the website via http://localhost:3000 or http://35.240.171.58