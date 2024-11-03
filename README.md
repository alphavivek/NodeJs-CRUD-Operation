The NodeJS CRUD application is a Node.js-based system developed using the Express.js framework, with MongoDB as the database. This application manages information related to both staff (persons) and menu items. It exposes specific endpoints to handle CRUD (Create, Read, Update, Delete) operations for each.

# API Endpoints

## Persons

### 1. Get All Persons
- **Endpoint:** `GET /person`
- **Description:** Retrieves a list of all persons.
- **Response:** 
  - Status 200: Array of persons.
  - Status 500: Error message.

### 2. Add a Person
- **Endpoint:** `POST /person`
- **Description:** Adds a new person with details like name and role.
- **Response:** 
  - Status 200: Newly created person.
  - Status 500: Error message.

### 3. Get Persons by Work Type
- **Endpoint:** `GET /person/:workType`
- **Description:** Retrieves persons based on work type (e.g., Chef, Waiter).
- **Response:** 
  - Status 200: Matching persons.
  - Status 404: Invalid work type.
  - Status 500: Error message.

### 4. Update a Person
- **Endpoint:** `PUT /person/:Id`
- **Description:** Updates a person's details by ID.
- **Response:** 
  - Status 200: Updated person.
  - Status 400: Incorrect ID.
  - Status 500: Error message.

### 5. Delete a Person
- **Endpoint:** `DELETE /person/:Id`
- **Description:** Deletes a person by ID.
- **Response:** 
  - Status 200: Success message.
  - Status 400: Incorrect ID.
  - Status 500: Error message.

## Menu Items

### 1. Get All Menu Items
- **Endpoint:** `GET /menu`
- **Description:** Retrieves a list of all menu items.
- **Response:** 
  - Status 200: Array of menu items.
  - Status 500: Error message.

### 2. Add a Menu Item
- **Endpoint:** `POST /menu`
- **Description:** Adds a new menu item with details like name and price.
- **Response:** 
  - Status 200: Newly created menu item.
  - Status 500: Error message.

### 3. Get Menu Items by Taste
- **Endpoint:** `GET /menu/:tasteType`
- **Description:** Retrieves menu items by taste (e.g., sweet, spicy).
- **Response:** 
  - Status 200: Matching items.
  - Status 404: Invalid taste type.
  - Status 500: Error message.

### 4. Update a Menu Item
- **Endpoint:** `PUT /menu/:Id`
- **Description:** Updates a menu item's details by ID.
- **Response:** 
  - Status 200: Updated item.
  - Status 400: Incorrect ID.
  - Status 500: Error message.

### 5. Delete a Menu Item
- **Endpoint:** `DELETE /menu/:Id`
- **Description:** Deletes a menu item by ID.
- **Response:** 
  - Status 200: Success message.
  - Status 400: Incorrect ID.
 
# Mongoose Schemas

## Person Schema

The `Person` schema defines the structure for storing staff information in the application.

### Fields:
- **name**: `String` (required) - The name of the person.
- **age**: `Number` - The age of the person.
- **work**: `String` (required, enum: ['Chef', 'Waiter', 'Manager']) - The role of the person.
- **mobile**: `String` (required) - The mobile number of the person.
- **email**: `String` (required, unique) - The email address of the person.
- **address**: `String` - The address of the person.
- **salary**: `Number` - The salary of the person.

## Menu Item Schema

The `MenuItem` schema defines the structure for storing menu item information.

### Fields:
- **name**: `String` (required) - The name of the menu item.
- **price**: `Number` (required) - The price of the menu item.
- **taste**: `String` (required, enum: ['sweet', 'spicy', 'sour']) - The taste category of the item.
- **is_drink**: `Boolean` (default: `false`) - Indicates if the item is a drink.
- **ingredients**: `[String]` (default: `[]`) - An array of ingredients used in the item.
- **num_sales**: `Number` (default: `0`) - The number of times the item has been sold.

---

# Node.js CRUD Application

This Node.js application manages information related to staff and menu items using Express.js and MongoDB.

## Usage

### Install Dependencies

To install the required dependencies, run:

```bash
npm install
