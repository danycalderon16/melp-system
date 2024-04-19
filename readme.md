# Melp System

## Local Environment Setup

### Prerequisites

Before running this application locally, ensure you have the following tools installed:

1. **Node.js**: Download and install Node.js from [here](https://nodejs.org/).
2. **MySQL**: Ensure you have a MySQL instance running to create the necessary database.

## Setup Steps

Follow these steps to set up and run the application locally:

### 1. Create the Database

Execute the SQL statements found in the file `database/query.sql`. These statements will create the required database schema and load data from a CSV file.

**Note:** Ensure the SQL file is saved in the specified path. If you choose a different location, ensure you have the necessary permissions.

### 2. Install Dependencies

Navigate to the root folder of the project and execute the following command to install all project dependencies:

```bash
npm install
```
### 3. Run the Application

Once all dependencies are installed, start the application by running the following command:

```bash
node app.js
```
