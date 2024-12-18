# JS PACKAGE MANAGER

**Description**
A PHP-based application utilizing PostgreSQL as the database, designed to provide seamless functionality for managing authors, packages, and versions.

## Features
- Modular structure for easy management
- Includes SQL script for database setup alongside fake data to get you started.
- TailwindCSS for nice and clean styling.
- TypeScript for handling dynamic front-end behaviors and error prevention.

## Getting Started

### Prerequisities
- **XAMPP/Laragon**: a local PHP server environment to run the application(or any Apache server).
- **PostgreSQL**: A database system to manage data (any SQL database would do fine but you'd have to modify the SQL script that is located in the ./sql folder).

### Installation Setup
- You can skip step 2 if you don't want to create the database manually.

1. **Clone the repositroy**
```bash
git clone https://github.com/Youcode-Classe-E-2024-2025/TAHA-JAITI-PACKAGE.git

cd TAHA-JAITI-PACKAGE
```
2. **Set up the database**
- Open pgAdmin or your PostgreSQL client terminal.
- Execute the SQL script in the /sql/database.sql file.
- The script will create the database and the necessary tables with fake data/

3. **Configure the database connection**
- Navigate to includes/connect.php
- Update the connection details:
```php
$host = 'localhost';  
$port = '5432';  
$dbname = 'package_manager'; // Database name 
$user = 'user';  //your database user
$password = 'password';  //your database password
```
4. **Start the PHP server**
- Place the project inside the htdocs directory of your XAMPP installation (or wwww in Laragon).
- Start the Apache from the XAMPP control panel.
5. **Acess the application**
- Open your browser and go to *http://localhost/TAHA-JAITI-PACKAGE*

### File Structure
**Directories**
- **./assets/** : Contains the css file generated by tailwindCSS.
- **./diagram/**: ER Diagram for the database and UML Use Case diagrams.
- **./dist/** : Complied JavaScript files compiled by TypeScript.
- **./includes/** : Reusable PHP files like database connection.
- **./sql/** : SQL script for database setup and fake data.
- **./src/** : Core application logic handling
    - **./controller/** : Handles CRUD operations for authors and packages.
- **./views/** : Frontend components like modals and templates.

### License
- This project is open source!
