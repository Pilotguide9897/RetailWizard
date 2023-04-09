const express = require('express');
const routes = require('./routes');
const sequelize = require('./Config/connections');

const app = express();
const port = process.env.PORT || 3226;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: true }).then(() => {
   app.listen(port, () => {
   console.log(`App listening on port ${port}!`);
 });
});
