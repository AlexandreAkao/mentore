const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const routes = require('./routes');

class App {
  constructor() {
    this.server = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }

  database() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })

    mongoose.connection.on('error', (err) => {
      console.log(`Connection error: ${err}`)
    })

    mongoose.connection.on('disconnected', () => {
      console.log('Application disconnected from the database')
    })

    mongoose.connection.on('connected', () => {
      console.log('Application connected to the database')
    })
  }
}

module.exports = new App().server;