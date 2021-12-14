from flask import Flask,request
from flask.templating import render_template
from flask_mysqldb import MySQL
import os
import simplejson as json
from flask_cors import CORS, cross_origin
from datetime import date

# print(os.path.dirname(__file__)+"/")

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = "Nincompoop1@"
app.config['MYSQL_DB'] = 'travel_reservation_service'

time = date.today()

mysql = MySQL(app)

@app.route("/customer")
@cross_origin()
def view_cust():
        cur = mysql.connection.cursor()
        cmd = "select email from customer;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers,result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/owner")
@cross_origin()
def view_own():
        cur = mysql.connection.cursor()
        cmd = "select * from travel_reservation_service.view_owners;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/vc")
@cross_origin()
def index():
        cur = mysql.connection.cursor()
        cmd = "select * FROM travel_reservation_service.view_customers;"
        cur.execute(cmd)
        row_headers=[x[0] for x in cur.description] #this will extract row headers
        rv = cur.fetchall()
        json_data=[]        
        for result in rv:
                json_data.append(dict(zip(row_headers,result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)


@app.route("/remove_owner", methods = ['POST'])
@cross_origin()
def index1():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call remove_owner('"+data[0]['email']+"');"
        cur.execute(cmd)
        cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return "!"

@app.route("/val")
@cross_origin()
def index2():
        cur = mysql.connection.cursor()
        cmd = "select * from travel_reservation_service.view_airlines;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/vap")
@cross_origin()
def index3():
        cur = mysql.connection.cursor()
        cmd = "select Airport_ID as ID, Airport_Name, Time_Zone, concat(Street,', ', City,', ', State,', ', Zip) as address from airport;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/vp")
@cross_origin()
def index4():
        cur = mysql.connection.cursor()
        cmd = "select * from travel_reservation_service.view_properties;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/vf")
@cross_origin()
def index5():
        cur = mysql.connection.cursor()
        cmd = "select f.Flight_Num as ID, f.Airline_Name as Airlines, f.From_Airport, f.To_Airport,f.Departure_Time as Dept_Time, f.Arrival_Time as  Arr_Time, f.Flight_Date as Date, (f.Capacity - ifnull(sum(b.Num_Seats * IF(b.Was_Cancelled,0,1)),0)) as Available_Seats, f.Cost as Cost_Per_Seat, (ifnull(sum((f.Cost*b.Num_Seats)*IF(b.Was_Cancelled,0.2,1)),0)) as Total_Spent from flight f left join book b on (f.Flight_Num, f.Airline_Name) = (b.Flight_Num, b.Airline_Name) group by ID, Airlines;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/vo")
@cross_origin()
def index6():
        cur = mysql.connection.cursor()
        cmd = "select * from travel_reservation_service.view_owners;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/admins")
@cross_origin()
def index7():
        cur = mysql.connection.cursor()
        cmd = "select a.First_Name, a.Last_Name, a.Email, a.Pass from accounts a, admins o where a.Email = o.Email;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/l")
@cross_origin()
def index8():
        cur = mysql.connection.cursor()
        cmd = "select a.First_Name, a.Last_Name, a.Email, a.Pass from accounts a, clients c where a.Email = c.Email;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/apd", methods = ["POST"])
@cross_origin()
def index9():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call process_date('"+data[0]['date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None


@app.route("/rf")
@cross_origin()
def indexrf():
        cur = mysql.connection.cursor()
        cmd = "SELECT airline, flight_id, flight_date FROM travel_reservation_service.view_flight;"
        cur.execute(cmd)
        x, json_data = {'time': time}, []
        json_data.append(x)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/rf", methods = ['POST'])
@cross_origin()
def indexrf1():
        cur = mysql.connection.cursor()
        data = request.get_json()
        print(data['airline'],data['flight_id'], data['flight_date'])
        cmd = "call remove_flight('"+(data['flight_id'])+"','"+ (data['airline'])+"','"+(data['flight_date'])+"');"
        cur.execute(cmd)
        cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return "!"

# @app.route("/remove_flight")
# @cross_origin()
# def display_remove_flight():
#         cur = mysql.connection.cursor()
#         data = request.get_json()
#         cmd = "select Flight_Num, Airline_Name, Flight_Date from flight where Flight_Date between '"+data[0]['from_date']+"' and '"+data[0]['to_date']+"';"
#         cur.execute(cmd)
#         row_headers = [x[0] for x in cur.description]
#         rv = cur.fetchall()
#         json_data = []
#         for result in rv:
#                 json_data.append(dict(zip(row_headers, result)))
#         mysql.connection.commit()
#         cur.close()
#         return json.dumps(json_data)

# @cross_origin()
# def index10():
#         cur = mysql.connection.cursor()
#         data = request.get_json()
#         cmd = "call remove_flight('"+data[0]['flight_num']+"', '"+data[0]['airline_name']+"', '"+data[0]['current_date']+"');"
#         cur.execute(cmd)
#         #cur.fetchall()
#         mysql.connection.commit()
#         cur.close()
#         return None

@app.route("/schedule_flight", methods=["POST"])
@cross_origin()
def index11():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call schedule_flight('"+data[0]['flight_num']+"', '"+data[0]['airline_name']+"', '"+data[0]['from_airport']+"', '"+data[0]['departure_time']+"', '"+data[0]['arrival_time']+"', '"+data[0]['flight_date']+"', '"+data[0]['cost']+"', '"+data[0]['capacity']+"', '"+data[0]['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()        
        cur.close()
        return None

@app.route("/register_customer", methods=["POST"])
@cross_origin()
def index12():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call register_customer('"+data[0]['email']+"', '"+data[0]['first_name']+"', '"+data[0]['last_name']+"', '"+data[0]['password']+"', '"+data[0]['phone_number']+"', '"+data[0]['cc_number']+"', '"+data[0]['cvv']+"', '"+data[0]['exp_data']+"', '"+data[0]['location']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None 

@app.route("/register_owner", methods = ["POST"])
@cross_origin()
def index13():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call register_owner('"+data[0]['email']+"', '"+data[0]['first_name']+"', '"+data[0]['last_name']+"', '"+data[0]['password']+"', '"+data[0]['phone_number']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

@app.route("/bf")
@cross_origin()
def view_book_flight():
        cur = mysql.connection.cursor()
        cmd = "select airline, flight_id, num_empty_seats from view_flight;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/bf", methods = ["POST"])
@cross_origin()
def index14():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call book_flight('"+data[0]['email']+"', '"+data[0]['flight_num']+"', '"+data[0]['airline_name']+"', '"+data[0]['num_seats']+"', '"+data[0]['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None  

@app.route("/cf")
@cross_origin()
def view_cancel_flight():
        cur = mysql.connection.cursor()
        login_data = request.get_json()
        cmd = "select * from flight f right join book b on (f.Airline_Name, f.Flight_Num)=(b.Airline_Name, b.Flight_Num) where b.Customer = '"+data[0]['customer_email']+"';"
        cur.execute(cmd)
        x, json_data = {'time': time}, []
        json_data.append(x)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/cf", methods = ["POST"])
@cross_origin()
def index15():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call cancel_flight_booking('"+data[0]['email']+"', '"+data[0]['flight_num']+"', '"+data[0]['airline_name']+"', '"+data[0]['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

@app.route("/rp")
@cross_origin()
def view_reserve():
        cur = mysql.connection.cursor()
        cmd = "select property_name, owner_email, capacity from property;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        x, json_data = {'time': time}, []
        json_data.append(x)
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/rp", methods = ["POST"])
@cross_origin()
def index16():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call reserve_property('"+data[0]['property_name']+"', '"+data[0]['owner_email']+"', '"+data[0]['customer_email']+"', '"+data[0]['start_date']+"', '"+data[0]['end_date']+"', ''"+data[0]['num_guests']+", '"+data[0]['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

@app.route("/ccp")
@cross_origin()
def view_cancel_rp():
        cur = mysql.connection.cursor()
        cmd = "SELECT reserve.Start_Date as reservation_date, property.Property_Name, property.Owner_Email, concat(Street,' ',City,' ',State,' ',Zip) as Address FROM travel_reservation_service.property, travel_reservation_service.reserve where property.Property_Name = reserve.Property_Name; "
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/ccp", methods = ["POST"])
@cross_origin()
def index17():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call cancel_property_reservation('"+data[0]['property_name']+"', '"+data[0]['owner_email']+"', '"+data[0]['customer_email']+"', '"+data[0]['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

@app.route("/crp")
@cross_origin()
def view_review_property():
        cur = mysql.connection.cursor()
        cmd = "SELECT reserve.Start_Date as reservation_date, property.Property_Name, property.Owner_Email, concat(Street,' ',City,' ',State,' ',Zip) as Address FROM travel_reservation_service.property, travel_reservation_service.reserve where property.Property_Name = reserve.Property_Name;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/crp", methods = ["POST"])
@cross_origin()
def index18():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call customer_review_property('"+data[0]['property_name']+"', '"+data[0]['owner_email']+"', '"+data[0]['customer_email']+"', '"+data[0]['content']+"', '"+data[0]['score']+"', '"+data[0]['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None


@app.route("/customer_rate_owner")
@cross_origin()
def cro():
        cur = mysql.connection.cursor()
        cmd = "SELECT reserve.Start_Date as reservation_date, property.Property_Name, property.Owner_Email, concat(Street,' ',City,' ',State,' ',Zip) as Address FROM travel_reservation_service.property, travel_reservation_service.reserve where property.Property_Name = reserve.Property_Name;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/customer_rate_owner", methods = ["POST"])
@cross_origin()
def index19():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call customer_rates_owner('"+data[0]['customer_email']+"', '"+data[0]['owner_email']+"', '"+data[0]['score']+"', '"+data[0]['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

@app.route("/vpr", methods = ["POST"])
@cross_origin()
def index20():
        cur = mysql.connection.cursor()
        cur2 = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call view_individual_property_reservations('"+data[0]['owner_email']+"', '"+data['property_name']+"');"
        cur.execute(cmd)
        cmd2 = "select Property_Name, Start_Date, End_Date, Customer_Phone_num, Customer_Email, Table_Booking_Cost, Review, Rating_Score from view_individual_property_reservations;"
        cur2.execute(cmd2)
        row_headers = [x[0] for x in cur2.description]
        rv = cur2.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/owner_add_property", methods = ["POST"])
@cross_origin()
def index21():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call add_property('"+data[0]['property_name']+"', '"+data[0]['owner_email']+"', '"+data[0]['description']+"', '"+data[0]['capacity']+"', '"+data[0]['cost']+"', '"+data[0]['street']+"', '"+data[0]['city']+"', '"+data[0]['state']+"', '"+data[0]['zip']+"', '"+data[0]['nearest_airport_id']+"', '"+data[0]['dist_to_airport']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

@app.route("/orp")
@cross_origin()
def view_remove_property():
        cur = mysql.connection.cursor()
        cmd = "select Property_Name, Descr, Capacity, Cost, concat(Street,' ',City,' ',State,' ',Zip) as Address from property;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/orp", methods = ["POST"])
@cross_origin()
def index22():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call remove_property('"+data[0]['owner_email']+"', '"+data[0]['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

@app.route("/orc")
@cross_origin()
def view_orc():
        cur = mysql.connection.cursor()
        cmd = "SELECT reserve.Start_Date as Reservation_Date, reserve.Customer as Customer_Email,property.Property_Name, concat(Street,' ',City,' ',State,' ',Zip) as Address FROM travel_reservation_service.property, travel_reservation_service.reserve where property.Property_Name = reserve.Property_Name;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/orc", methods = ["POST"])
@cross_origin()
def index23():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call owner_customer('"+data[0]['property_name']+"','"+data[0]['owner_email']+"', '"+data[0]['customer_email']+"', '"+data[0]['score']+"', '"+data[0]['current_data']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

if __name__ == '__main__':
    app.run(debug=True)
