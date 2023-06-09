require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connections');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
  });
});
