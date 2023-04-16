# RetailWizard: E-commerce Back End
![](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This backend e-commerce application provides an Express.js API that allows you to interact with a MySQL database using Sequelize to manage categories, products, and tags.

A video illustrating this application's functionality may be viewed [here]().

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) 
- [Questions](#questions)
- [License](#license)

## Screenshots 
![Insomnia](https://github.com/Pilotguide9897/RetailWizard/blob/main/E-Commerce%20Backend%20Screenshots/Insomnia.png)

## Installation
To install this application:

1. Clone the repository to your local machine by typing the following command into your command line:
`git clone git@github.com:Pilotguide9897/RetailWizard.git`

2. Install the necessary dependencies
Navigate to the root folder of the project and run `npm install` in the command line to install the required packages specified in the repo's package.json file.

3. Configure environment variables
Create a .env file in the root folder of the project with the following content:

`DB_NAME=your_database_name
 DB_USER=your_mysql_username
 DB_PASSWORD=your_mysql_password`
Be sure to replace your_database_name, your_mysql_username, and your_mysql_password with your actual MySQL database name, username, and password.

4. Create the database schema
Make sure you have MySQL installed and running on your system. In the MySQL shell or a SQL client, run the contents of the db/schema.sql file to create the necessary database.

5. Seed the database
In your terminal, navigate to the root folder of the project and run `npm run seed` in the terminal to seed the database with test data.

6. Start the application
To start the server and sync Sequelize models with the MySQL database, run `npm start` or `npm run watch` in the terminal.

## Usage

## Contributing
Users interested in contributing to this project may fork the GitHub repository, make their intended alterations, and submit these changes to the original repository as a pull request. Pull requests will be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development!

## Questions
* If you have any questions concerning this application, do not hesitate to reach me at jaredryan1997@hotmail.com.
* You may also view my GitHub profile at http://github.com/Pilotguide9897.

## License
This project is licensed under the ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg). See the [license](https://opensource.org/licenses/MIT) documentation for more information.
