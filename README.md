# IronCore Gym

A responsive gym website built as a hands-on web development and DevOps project.

## Features

- Responsive gym landing page
- Membership registration form
- Membership plans
- Training programs
- Program selection
- Thank-you page after registration
- Responsive design for desktop and mobile
- Nginx web server
- Docker containerization

## Technologies

- HTML5
- CSS3
- JavaScript
- Git & GitHub
- Linux / Ubuntu
- Docker
- Nginx

## Project Structure

```text
ironcore-gym/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
├── programs.html
├── thank-you.html
├── .gitignore
└── README.md

## Run with Docker

The website is served using Nginx inside a Docker container.

Start the existing container:

```bash
docker start nginx2
 
Check the running container:

docker ps

Then open:

http://localhost:8080 
