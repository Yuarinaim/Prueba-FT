CREATE DATABASE clientsdb

CREATE TABLE client(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(100) UNIQUE,
    email VARCHAR(100) UNIQUE,
    status VARCHAR(10) CHECK (status IN ('Nuevo', 'Cita'))
)