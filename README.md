# Travel-App

A *Travel Reservations Service* application built as a part of Course Project for **CS 4400: Introduction to Database Systems** (Fall 2021 Semester).  

The purpose of this project was to analyze, specify, design, implement, and document an online system based on a provided scenario description.

## Description

Design and develop a system to handle **travel reservations**. This system supports a "third party" travel reservations agency. Customers will make flights reservations and hotel/AirBnB bookings for their trips. After confirming the bookings, the agency will be paid electronically by the customer.  

The types of **users** in the system include:
* Admin
* Client
    * Customer
    * Owner

 The system was implemented using a relational DBMS that supports standard SQL queries. A Fully Functional Application integrated with Database System and User Interface specification was developed by the team.  

 Key User interface features included displaying different data in a **dynamic** tabular format with the option to *search*, *sort* and *filter* based on column values. 

 

## Technology
* React JS
* Styling - [MUI](https://mui.com/)
* Python 
   * **Flask**
   * **Flask-MySQLdb**
   * **Flask-CORS**
   * **simplejson**
   * **datetime**
* MySQL  


## Screenshots
|||||
|--|--|--|--|


## Setup

1. Clone this repository or download zip. 

2. Install [Node.js](https://nodejs.org/en/) if you haven't already.  

3. Replace the MySQL User and Password credentials in ```/backend/app.py``` with your local MySQL credentials.

4. Open this repository on terminal. Navigate to [backend](https://github.com/karved/Travel-App/tree/main/backend) folder by typing ```cd backend```.

5. Type (if mentioned above **python modules** are not installed)  

   ```
   pip install Flask, flask-mysqldb, simplejson
   pip install -U flask-cors
   ``` 
   
6. To run the backend,
   ```
    python app.py
   ```

7. Navigate to [react](https://github.com/karved/Travel-App/tree/main/react) folder in terminal by typing
    ```
    cd ..
    cd react
    ```
 8. Install node_modules  

    ```
    npm install 
    ```
9. Begin the frontend web application by typing  

   ```
    npm start 
   ```  

10. All set.


## Meet the Team 

|[Dhruv Karve](https://github.com/karved)|[Geetha Priyanka](https://github.com/geethapriyanka7)|[Nilavrah Sensarma](https://github.com/neilsensarma)|[Kirti Chhatlani](https://github.com/kirtichhatlani)|
|--|--|--|--|
