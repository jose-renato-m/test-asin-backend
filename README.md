<h1 align="center">
  <img src="https://ik.imagekit.io/dfw3q47dv0/Node_logo_1_65gY3glqL.jpeg">
</h1>

## 📝 Description

<p> This is the backend of <b>Pokémon's Challenge</b> which has been made in a different repository.<br></br>

The backend has built an API and a database which is saving the pokemons data inside it. <br></br>

I've choosen, for development purposes, to use <b>SQLite</b> as database, because it'd be easier to do tests during the development, but due to the fact that SQLite is a purely didactic database, it can't store too much data; therefore into its database there are only some of the pokémons listed in the existing API. But in case of there would be interest in store all pokémons from the API, it's just change the database in <b>knexfile.js</b> archive (together with conexion configurations for this new database, as Docker's IP adress and so on, for example) and into <b>api.service.js</b> archive, change getAllPokemons route's offset for 954, thus it'll get all pokémons and they'll be stored in database through <b>seed</b>.</p>

---

## 💻 Used Technologies

This challenge has been developed using the following technologies:

- [Node.js](https://nodejs.org/en/)
- [SQLite3](https://www.sqlite.org/index.html)
- [knex.js](http://knexjs.org/)
- [axios](https://github.com/axios/axios)

---

## 📁 Download

```bash

# Clone the repósitory
$ git clone https://github.com/jose-renato-m/test-asin-backend.git

# Enter into the directory
$ cd test-asin-backend

# Install dependencies
$ yarn

# Run the server
$ yarn dev: server
```

---

This challenge has been made with 💙 by José Renato Montagnana 👋🏻 [Get in touch!](https://www.linkedin.com/in/joserenato-devfullstack/)
