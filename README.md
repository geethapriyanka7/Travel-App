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

 Key User interface features include displaying different data in a **dynamic** tabular format with the option to *search*, *sort* and *filter* based on column values. 

 

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
|![alt text](https://github.com/karved/Travel-App/blob/main/pics/home.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/login.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/cacc.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/ch.png)|
|![alt text](https://github.com/karved/Travel-App/blob/main/pics/resp.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/vp.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/vf.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/bf.png)|
|![alt text](https://github.com/karved/Travel-App/blob/main/pics/oh.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/rp.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/orc.png)|
||![alt text](https://github.com/karved/Travel-App/blob/main/pics/ad-home.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/rf.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/sf.png)|
|![alt text](https://github.com/karved/Travel-App/blob/main/pics/vc.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/vo.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/va.png)|![alt text](https://github.com/karved/Travel-App/blob/main/pics/vair.png)|


## Setup

1. Clone this repository or download zip. 

2. Install [Node.js](https://nodejs.org/en/) if you haven't already.  

3. Replace the MySQL User and Password credentials in ```/backend/app.py``` with your local MySQL credentials.  

4. Run the **SQL queries** for *Database creation*, *Views*, and *Stored Procedures* on the MySQL server. 

5. Open this repository on terminal. Navigate to [backend](https://github.com/karved/Travel-App/tree/main/backend) folder by typing ```cd backend```.

6. Type (if mentioned above **python modules** are not installed)  

   ```
   pip install Flask, flask-mysqldb, simplejson
   pip install -U flask-cors
   ``` 
   
7. To run the backend,
   ```
    python app.py
   ```

8. Navigate to [react](https://github.com/karved/Travel-App/tree/main/react) folder in terminal by typing
    ```
    cd ..
    cd react
    ```
 9. Install node_modules  
    ```
    npm install 
    ```
10. Begin the frontend web application by typing  
    ```
    npm start 
    ```

11. All set.


## Meet the Team 

|[Dhruv Karve](https://github.com/karved)|[Geetha Priyanka](https://github.com/geethapriyanka7)|[Nilavrah Sensarma](https://github.com/neilsensarma)|[Kirti Chhatlani](https://github.com/kirtichhatlani)|
|--|--|--|--|
