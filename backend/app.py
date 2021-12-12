from flask import Flask,request
from flask.templating import render_template
from flask_mysqldb import MySQL
import os
import simplejson as json
from flask_cors import CORS, cross_origin


# print(os.path.dirname(__file__)+"/")

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = "****"
app.config['MYSQL_DB'] = 'travel_reservation_service'

mysql = MySQL(app)

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
        return json.dumps(json_data)



@app.route("/a", methods = ['POST'])
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

@app.route("/view_airlines")
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

@app.route("/view_airports")
@cross_origin()
def index3():
        cur = mysql.connection.cursor()
        cmd = "select * from travel_reservation_service.view_airports;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data)

@app.route("/view_properties")
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

@app.route("/view_flight")
@cross_origin()
def index5():
        cur = mysql.connection.cursor()
        cmd = "select * from travel_reservation_service.view_flight;"
        cur.execute(cmd)
        row_headers = [x[0] for x in cur.description]
        rv = cur.fetchall()
        json_data = []
        for result in rv:
                json_data.append(dict(zip(row_headers, result)))
        mysql.connection.commit()
        cur.close()
        return json.dumps(json_data, default = str)

@app.route("/view_owners")
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


if __name__ == '__main__':
    app.run(debug=True)
