## Concept :

Envie de jouer au foot ? mais tes potes ne sont pas dispo ? 
Pas de problème, Five Side est là.  Connecte-toi et voit la liste des matchs auquels tu peux participer.
Les matchs gagnés te rapporteront des points, reviens régulièrement et atteint le sommet du classement ! 

Tu veux organiser un match mais il te manque quelques joueurs ? 
Pas de soucis non plus, sur Five Side tu peux créér un match, les joueurs de la communauté pourront compléter ton équipe.  

## Ressources : 

DB schema : https://ibb.co/Mh0cwDj
User Stories : https://ibb.co/Xz17Mdj
Ebauche Maquette : https://ibb.co/QM1WvYC

## Template

This template is meant to serve as a foundation for every P2/P3 following the React-Express-MySQL stack, as learned in Wild Code School.
It's pre-configured with a set of tools which'll help students produce industry-quality and easier-to-maintain code, while staying as simple as possible to use.

## Setup & Use

### Project Initialization

- In VSCode, install plugins **Prettier - Code formatter** and **ESLint** and configure them
- Clone this repo, enter it
- Run command `npm run setup`
- _NB: To launch the backend server, you'll need an environment file with database credentials. You'll find a template one in `backend/.env.sample`_

### Available Commands

- `setup` : Initialization of frontend and backend, as well as all toolings
- `migrate` : Run the database migration script
- `dev` : Starts both servers (frontend + backend) in one terminal
- `dev-front` : Starts the React frontend server
- `dev-back` : Starts the Express backend server
- `lint` : Runs validation tools, and refuses unclean code (will be executed on every _commit_)
- `fix` : Fixes linter errors (run it if `lint` growls on your code !)

## FAQ

### Tools

- _Concurrently_ : Allows for several commands to run concurrently in the same CLI
- _Husky_ : Allows to execute specific commands that trigger on _git_ events
- _Vite_ : Alternative to _Create-React-App_, packaging less tools for a more fluid experience
- _ESLint_ : "Quality of code" tool, ensures chosen rules will be enforced
- _Prettier_ : "Quality of code" tool as well, focuses on the styleguide
- _ Airbnb Standard_ : One of the most known "standards", even though it's not officially linked to ES/JS
- _Nodemon_ : Allows to restart the server everytime a .js file is udated


