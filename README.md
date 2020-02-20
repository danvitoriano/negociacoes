# Negotiations

Object Oriented and Design Patterned JavaScript ES2015+ and Node.JS Stock Negotiations Project. It uses Express.JS as server side framework.

## Install

```
cd server
npm i
```

## Run

```
cd server
npm run start
```

### Client Side

Files at `/client` folder.
[localhost:3000](http://localhost:3000)

### Server Side

Files at `/server` folder.
It uses Express.JS as server side framework.

**API:**

GET: /negociacoes/semana[localhost:3000/negociacoes/semana](http://localhost:3000/negociacoes/semana)

GET: /negociacoes/anterior [localhost:3000/negociacoes/anterior](http://localhost:3000/negociacoes/anterior)

GET: /negociacoes/retrasada [localhost:3000/negociacoes/retrasada](http://localhost:3000/negociacoes/retrasada)

POST: /negociacoes [localhost:3000/negociacoes](http://localhost:3000/negociacoes)

### IndexedDB

To test persistence at IndexedDB browser local storage database, access:

[http://localhost:3000/indexedDB.html](http://localhost:3000/post.html)

At Developer Mode browser Console tab, type:

```
adiciona()
```

Check the Developer Mode browser Application tab, check the IndexedDB localhost to see persistence.

### Post to Node.JS API

To post a negotiation to [localhost:3000/negociacoes](http://localhost:3000/negociacoes) API, acesss the form and submit data:

[http://localhost:3000/post.html](http://localhost:3000/post.html)
