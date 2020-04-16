# Negotiations

Object Oriented and Design Patterned JavaScript ES2015+ and Node.JS Stock Negotiations Project. It uses Express.JS as server side framework.

## Open Source Project

https://github.com/danvitoriano/negociacoes/projects/1

## Issues

https://github.com/danvitoriano/negociacoes/issues

## Wiki

https://github.com/danvitoriano/negociacoes/wiki

## Branches

- master: FINAL PROJECT with WebPack

- client: Basic JS project form to add negotiations
- server: Add Node.js server and get local API negotiations
- database: Post negotiations to local API and IndexedDB browser persistent
- babel: Transpile JS
- modules: ES6 Modules with Webpack and Babel

## Install

```
cd server
npm i
```

## Run Server

```
cd server
npm run start
```

Files at `/server` folder.
It uses Express.JS as server side framework.

**API:**

GET: /negociacoes/semana[localhost:3000/negociacoes/semana](http://localhost:3000/negociacoes/semana)

GET: /negociacoes/anterior [localhost:3000/negociacoes/anterior](http://localhost:3000/negociacoes/anterior)

GET: /negociacoes/retrasada [localhost:3000/negociacoes/retrasada](http://localhost:3000/negociacoes/retrasada)

POST: /negociacoes [localhost:3000/negociacoes](http://localhost:3000/negociacoes)

## Client Side

Files at `/client` folder.
[localhost:3000](http://localhost:3000)

```
cd client
npm i
```

### Webpack

To transpile ES2015 Modules with Babel and bundle with Webpack, run:

**Build**

```
npm run build
```

**Watch**

```
npm run watch
```

##Firebase

The project is currently hosted on Firebase:

Client: https://negociacoes-hosting.web.app/
API: https://us-central1-negociacoes-hosting.cloudfunctions.net/api/

###Running the project locally with Firebase

First, install Firebase through npm with the following command:

```
npm i -g firebase-tools
```

It's always recommended to go to each application folder (in this case, /client first and then /server afterwards) and install the node modules required to run the project.

After installing firebase tools, it's time to use the command line to serve our application. This is done on the root folder of the project. This way, Firebase will serve the client app as an hosting application and the server side APIs as a function application:

```
firebase serve --only hosting,functions
```

Now, it's possible to use the project locally in an environment served by Firebase:

Client: http://localhost:5001
API: http://localhost:5001/negociacoes-hosting/us-central1/api