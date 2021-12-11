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
app.config['MYSQL_PASSWORD'] = '***'
app.config['MYSQL_DB'] = 'travel_reservation_service'

mysql = MySQL(app)

@app.route("/")
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
        return json.dumps(json_data)

@app.route("/a", methods = ['POST'])
@cross_origin()
def index1():
        cur = mysql.connection.cursor()
        data = request.get_json()
        print(data)
        cmd = "call remove_owner('"+data['email']+"');"
        cur.execute(cmd)
        cur.fetchall()
        print(cur.rowcount)
        return "!"
   

if __name__ == '__main__':
    app.run(debug=True)
