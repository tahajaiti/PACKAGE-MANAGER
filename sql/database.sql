-- CREATE DATABASE package_manager;

-- \c package_manager;

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE packages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) UNIQUE NOT NULL,
    description TEXT,
    creation_date DATE DEFAULT CURRENT_DATE,
    author_id INTEGER,
    FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE SET NULL
);

CREATE TABLE versions (
    id SERIAL PRIMARY KEY,
    package_id INTEGER NOT NULL,
    version_number VARCHAR(25) NOT NULL,
    release_date DATE DEFAULT CURRENT_DATE,
    FOREIGN KEY (package_id) REFERENCES packages(id) ON DELETE CASCADE
);



INSERT INTO authors (name, email) VALUES
('Alice Johnson', 'alice.johnson@example.com'),
('Bob Smith', 'bob.smith@example.com'),
('Charlie Brown', 'charlie.brown@example.com'),
('David Green', 'david.green@example.com'),
('Eva White', 'eva.white@example.com'),
('Frank Harris', 'frank.harris@example.com'),
('Grace Lee', 'grace.lee@example.com'),
('Hannah Miller', 'hannah.miller@example.com'),
('Isaac Wilson', 'isaac.wilson@example.com'),
('Jack Davis', 'jack.davis@example.com');



INSERT INTO packages (name, description, creation_date, author_id) VALUES
('express', 'Fast, unopinionated, minimalist web framework for Node.js', '2024-01-01', 1),
('lodash', 'A modern utility library delivering modularity, performance & extras.', '2024-02-15', 2),
('react', 'A JavaScript library for building user interfaces', '2024-03-20', 3),
('axios', 'Promise based HTTP client for the browser and Node.js', '2024-04-10', 4),
('moment', 'Parse, validate, manipulate, and display dates and times in JavaScript', '2024-05-05', 5),
('chalk', 'Terminal string styling done right', '2024-06-12', 6),
('dotenv', 'Loads environment variables from .env for nodejs projects', '2024-07-18', 7),
('webpack', 'A static module bundler for modern JavaScript applications', '2024-08-22', 8),
('vue', 'A progressive JavaScript framework for building user interfaces', '2024-09-09', 9),
('babel', 'A JavaScript compiler for writing next generation JavaScript', '2024-10-25', 10);


INSERT INTO versions (package_id, version_number, release_date) VALUES
(1, '4.18.1', '2024-01-01'),
(1, '4.18.0', '2024-01-15'),
(2, '4.17.21', '2024-02-15'),
(2, '4.17.20', '2024-03-05'),
(3, '18.2.0', '2024-03-20'),
(3, '18.1.0', '2024-04-01'),
(4, '0.21.1', '2024-04-10'),
(4, '0.21.0', '2024-04-20'),
(5, '2.29.1', '2024-05-05'),
(5, '2.29.0', '2024-05-15'),
(6, '5.2.3', '2024-06-12'),
(6, '5.2.2', '2024-06-22'),
(7, '16.0.0', '2024-07-18'),
(7, '15.9.9', '2024-07-28'),
(8, '5.74.0', '2024-08-22'),
(8, '5.73.0', '2024-09-01'),
(9, '3.2.0', '2024-09-09'),
(9, '3.1.5', '2024-09-19'),
(10, '7.8.0', '2024-10-25'),
(10, '7.7.5', '2024-11-05');




