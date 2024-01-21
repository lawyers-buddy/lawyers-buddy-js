const express = require('express');
const mysql = require('mysql2');
const app = express();


const connection = mysql.createConnection({
    host: 'localhost',
      user: 'root',
    password: 'unknownuse@2024',
    database: 'lawyers_buddy'
  });

  connection.connect(err => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
  
    console.log('Connected to the database');
  
    // Perform database operations here
  
    // Example query: select all rows from a table
    connection.query('SELECT * FROM clients', (queryErr, results) => {
      if (queryErr) {
        console.error('Error executing query:', queryErr);
        return;
      }
  
      console.log('Query results:', results);
  
      // Close the database connection
      connection.end(err => {
        if (err) {
          console.error('Error closing connection:', err);
          return;
        }
        console.log('Connection closed');
      });
    });
  });

app.listen(1005, () => {
    console.log("Server running on the port 1005")
});