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

## MongoShell

```
https://downloads.mongodb.org/win32/mongodb-shell-win32-x86_64-2012plus-4.2.5.zip
mongo "mongodb+srv://cluster0-ichd6.mongodb.net/test"  --username admin
password: admin
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
