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
        cmd = "select a.First_Name, a.Last_Name, a.Email, a.Pass from accounts a, customer c where a.Email = c.Email;"
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
        cmd = "select a.First_Name, a.Last_Name, a.Email, a.Pass from accounts a, owners o where a.Email = o.Email;"
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


@app.route("/do", methods = ['POST'])
@cross_origin()
def index1():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call remove_owner('"+data['email']+"');"
        cur.execute(cmd)
        cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return str(cur.rowcount)

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

@app.route("/clients")
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
        global time
        print(time)
        data = request.get_json()
        cmd = "call process_date('"+data['date']+"');"
        cur.execute(cmd)
        cur.fetchall()
        mysql.connection.commit()
        cur.close()
        time = data['date']
        print(time)
        return str(cur.rowcount)


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
        return str(cur.rowcount)

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

@app.route("/sf", methods=["POST"])
@cross_origin()
def index11():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call schedule_flight('"+data['flight_num']+"', '"+data['airline_name']+"', '"+data['from_airport']+"', '"+data['departure_time']+"', '"+data['arrival_time']+"', '"+data['flight_date']+"', '"+data['cost']+"', '"+data['capacity']+"', '"+data['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()        
        cur.close()
        return None

@app.route("/cac", methods=["POST"])
@cross_origin()
def index12():
        cur = mysql.connection.cursor()
        data = request.get_json()
        pno, cc_number = data['phone_number'], data['cc_number']
        pno = pno[:3] + '-' + pno[3:6] + '-' + pno[6:]
        cc_number = cc_number[:4] + ' ' + cc_number[4:8] + ' ' + cc_number[8:12] + cc_number[12:]
        cmd = "call register_customer('"+data['email']+"', '"+data['first_name']+"', '"+data['last_name']+"', '"+data['password']+"', '"+pno+"', '"+cc_number+"', '"+data['cvv']+"', '"+data['exp_data']+"', '"+data['location']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None 

@app.route("/cao", methods = ["POST"])
@cross_origin()
def index13():
        cur = mysql.connection.cursor()
        data = request.get_json()
        pno, cc_number = data['phone_number']
        pno = pno[:3] + '-' + pno[3:6] + '-' + pno[6:]
        cmd = "call register_owner('"+data['email']+"', '"+data['first_name']+"', '"+data['last_name']+"', '"+data['password']+"', '"+pno+"');"
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
        cmd = "call book_flight('"+data['email']+"', '"+data['flight_num']+"', '"+data['airline_name']+"', '"+data['num_seats']+"', '"+data['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None  

@app.route("/cf", methods=["POST"])
@cross_origin()
def view_cancel_flight():
        cur = mysql.connection.cursor()
        login_data = request.get_json()
        cmd = "select * from flight f right join book b on (f.Airline_Name, f.Flight_Num)=(b.Airline_Name, b.Flight_Num) where b.Customer = '"+login_data['customer_email']+"';"
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
        cmd = "call cancel_flight_booking('"+data['email']+"', '"+data['flight_num']+"', '"+data['airline_name']+"', '"+data['current_date']+"');"
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
        cmd = "call reserve_property('"+data['property_name']+"', '"+data['owner_email']+"', '"+data['customer_email']+"', '"+data['start_date']+"', '"+data['end_date']+"', ''"+data['num_guests']+", '"+data['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

@app.route("/ccp")
@cross_origin()
def view_cancel_rp():
        cur = mysql.connection.cursor()
        cmd = "SELECT Customer, reserve.Start_Date as reservation_date, property.Property_Name, property.Owner_Email, concat(Street,' ',City,' ',State,' ',Zip) as Address FROM travel_reservation_service.property, travel_reservation_service.reserve where property.Property_Name = reserve.Property_Name; "
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
        print(time)
        cmd = "call cancel_property_reservation('"+data['Property_Name']+"', '"+data['Owner_Email']+"', '"+data['Customer']+"','"+str(time)+"');"
        cur.execute(cmd)
        cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return str(cur.rowcount)

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
        cmd = "call customer_review_property('"+data['property_name']+"', '"+data['owner_email']+"', '"+data['customer_email']+"', '"+data['content']+"', '"+data['score']+"', '"+data['current_date']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None


@app.route("/cro")
@cross_origin()
def cro():
        cur = mysql.connection.cursor()
        cmd = "SELECT Customer, reserve.Start_Date as reservation_date, property.Property_Name, property.Owner_Email, concat(Street,' ',City,' ',State,' ',Zip) as Address FROM travel_reservation_service.property, travel_reservation_service.reserve where property.Property_Name = reserve.Property_Name;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/cro", methods = ["POST"])
@cross_origin()
def index19():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call customer_rates_owner('"+data['customer_email']+"', '"+data['owner_email']+"',"+str(data['score'])+",'"+str(time)+"');"
        # print(cmd)
        cur.execute(cmd)
        cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return str(cur.rowcount)

@app.route("/vpr", methods = ["POST"])
@cross_origin()
def index200():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call view_individual_property_reservations('"+data['property_name']+"', '"+data['owner_email']+"');"
        cur.execute(cmd)
        cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return str(cur.rowcount)


@app.route("/vpr")
@cross_origin()
def index20():
        cur2 = mysql.connection.cursor()
        cmd2 = "select Property_Name, Start_Date, End_Date, Customer_Phone_num, Customer_Email, Total_Booking_Cost, Review, Rating_Score from view_individual_property_reservations;"
        cur2.execute(cmd2)
        row_headers = [x[0] for x in cur2.description]
        rv = cur2.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur2.close()
        return json.dumps(json_data, default = str)

@app.route("/ap", methods = ["POST"])
@cross_origin()
def index21():
        cur = mysql.connection.cursor()
        data = request.get_json()
        cmd = "call add_property('"+data['property_name']+"', '"+data['owner_email']+"', '"+data['description']+"', '"+data['capacity']+"', '"+data['cost']+"', '"+data['street']+"', '"+data['city']+"', '"+data['state']+"', '"+data['zip']+"', '"+data['nearest_airport_id']+"', '"+data['dist_to_airport']+"');"
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return None

@app.route("/orp")
@cross_origin()
def view_remove_property():
        cur = mysql.connection.cursor()
        cmd = "select Property_Name, Owner_Email, Descr, Capacity, Cost, concat(Street,' ',City,' ',State,' ',Zip) as Address from property;"
        cur.execute(cmd)
        rowcount = cur.rowcount
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()

        return (json.dumps(json_data))

@app.route("/orp", methods = ["POST"])
@cross_origin()
def index22():
        cur = mysql.connection.cursor()
        data = request.get_json()
        # print(data)
        cmd = "call remove_property('"+data['Property_Name']+"', '"+data['Owner_Email']+"','"+str(time)+"');"
        # print(cmd)
        cur.execute(cmd)
        #cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return str(cur.rowcount)

@app.route("/orc")
@cross_origin()
def view_orc():
        cur = mysql.connection.cursor()
        cmd = "SELECT reserve.Owner_Email as owner_email, reserve.Start_Date as Reservation_Date, reserve.Customer as Customer_Email,property.Property_Name, concat(Street,' ',City,' ',State,' ',Zip) as Address FROM travel_reservation_service.property, travel_reservation_service.reserve where property.Property_Name = reserve.Property_Name;"
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
        cmd = "call owner_rates_customer('"+data['owner_email']+"', '"+data['customer_email']+"',"+str(data['score'])+",'"+str(time)+"');"
        # print(cmd)
        cur.execute(cmd)
        cur.fetchall()
        mysql.connection.commit()
        cur.close()
        return str(cur.rowcount)

if __name__ == '__main__':
    app.run(debug=True)
