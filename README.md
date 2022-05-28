
# Task - Atlan Frontend Engineer

It's a web-based application capable of running SQL queries and displaying the results of said query.


## Overview 
Its a SQL compiler that takes query from user and displays the result. 
User can type their query in the input field or can choose a query from 
suggestion dropdown. After hitting the RUN button result will be
displayed int the output section.In the Output section a table will be
formed according to data. By default 10 rows will be visible at a page. 
User can change page No. as well as the record per page easily. 
History section comes under the output section where previously 
compiled SQL queries are stored. User can reuse the a query just by 
clicking on the query or can delete by clicking on the delete icon.
## Frameworks
1. Material UI
2. react-bootstrap
3. react-animated-list
## Page Load Time of the Application
According to https://tools.pingdom.com/ the page loads in 232ms. Page size 220.9 KB. Overall performance grade 'A'.
## Optimizations 
Lazy loading has been implemented to load components with more optimizations.
## Deployment

This project is deployed in Vercel.
Here is the link - https://atlan-sql-compiler.vercel.app/

