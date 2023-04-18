# RetailWizard: E-commerce Back End
![](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This backend e-commerce application offers an Express.js API which allows users to interact with a MySQL database using Sequelize to manage the inventory for their small business, specifically in regard to product categories, the individual products themselves, and the tags associated with each product. This application is intended to help small business owners compete with their competetors by offering a scalable and efficient solution for handling the high volume of traffic and data that e-commerce websites typically generate. Additionally, it would allow for the management of product categories, products, and tags, making it easier to organize and present products to customers.

A video illustrating this application's functionality may be viewed [here](https://youtu.be/aV459Fu_KT8).

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

```
DB_NAME=your_database_name
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
```

Be sure to replace your_database_name, your_mysql_username, and your_mysql_password with your actual MySQL database name, username, and password.

4. Create the database schema
Make sure you have MySQL installed and running on your system. In the MySQL shell or a SQL client, run the contents of the db/schema.sql file to create the necessary database.

5. Seed the database
In your terminal, navigate to the root folder of the project and run `npm run seed` in the terminal to seed the database with test data.

6. Start the application
To start the server and sync Sequelize models with the MySQL database, run `npm start` or `npm run watch` in the terminal.

## Usage
When using this application, users have access to multiple api routes that allow them to easily search information on product categories, product information, and product tags and retrieve formatted JSON objects. Each of these routes also feature functionality to search for categories, products, and tags by id using query parameters. This application does not feature a front-end and is thus most easily accessed and used with Insomnia or another popular REST client that provides an easy-to-use interface for interacting with APIs. On top of allowing users to perform queries based on id, this back-end application also allows users to easily post new items, products, and tags, as well as update existing items, product, and tags by id or even delete by id. To use this application in Insomnia, users must follow the steps outlined in the section above to install and launch the application. Users can then access and manipulate the data to suite their purposes by accessing the following routes: *Note Do not forget to replace :id with the correct id number.

```
Categories:
GET to localhost:3001/categories/ - fetch all category data
GET to localhost:3001/categories/:id - fetch category data by id
POST to localhost:3001/categories/ - create a new category
PUT to localhost:3001/categories/:id - Update existing category data with the new information provided in the request body for the category with the specified id 
DELETE to localhost:3001/categories/:id - Delete the category with the specified id

Products:
GET to localhost:3001/categories/ - fetch all product data
GET to localhost:3001/categories/:id - fetch product data by id
POST to localhost:3001/categories/ - create a new product
PUT to localhost:3001/categories/:id - Update existing product data with the new information provided in the request body for the product with the specified id 
DELETE to localhost:3001/categories/:id - Delete the product with the specified id

Tags:
GET to localhost:3001/categories/ - fetch all tag data
GET to localhost:3001/categories/:id - fetch tag data by id
POST to localhost:3001/categories/ - create a new tag
PUT to localhost:3001/categories/:id - Update existing tag data with the new information provided in the request body for the tag with the specified id 
DELETE to localhost:3001/categories/:id - Delete the tag with the specified id

```
To provide context for how to implement the POST and PUT, routes, below are examples of potential requests organized by request type and model: *Note that if more guidance is needed, please consult the models in the Github repo for further detail into the models, their relations, and data types. 

```
*Category: Requires you to provide a category name in the form of a string.
CREATE Category/POST:
{	
	"category_name": "New Category"
}
UPDATE Category/PUT:
{
	"category_name": "Updated Category"
}

*Product: Accepts five fields: product name (string), price (decimal), stock (integer), category id (integer), and tag id (array of integers).
CREATE Product/POST:
{
	"product_name": "New Product",
	"price": "10",
	"stock": "6",
	"category_id": "4",
	"tagIds": [1, 2, 3]
}
UPDATE Product/PUT:
{
	"product_name": "Updated Product",
	"price": "15",
	"stock": "4",
	"category_id": "2",
	"tagIds": [1, 2]
}

*Tag: Tag accepts a single field: tag name in the form of a string.
CREATE Tag/POST:
{
	"tag_name": "New tag"
}
UPDATE Tag/PUT:
{
	"tag_name": "Updated tag"
}
```

## Contributing
Users interested in contributing to this project may fork the GitHub repository, make their intended alterations, and submit these changes to the original repository as a pull request. Pull requests will be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development!

*Starter code for this project was provided courtesy of GitHub user Xandromus Xander Rapstine. The original code may be accessed [here](https://github.com/coding-boot-camp/fantastic-umbrella). The primary changes that I made to the code for this project involved specifically outlining the models, creating the associations between tables, and filling out the API Routes to Perform RESTful CRUD Operations.

## Questions
* If you have any questions concerning this application, do not hesitate to reach me at jaredryan1997@hotmail.com.
* You may also view my GitHub profile at http://github.com/Pilotguide9897.

## License
This project is licensed under the ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg). See the [license](https://opensource.org/licenses/MIT) documentation for more information.
