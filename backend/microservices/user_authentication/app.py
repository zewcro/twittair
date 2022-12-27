from flask import Flask, jsonify, redirect, request 
from flask_mongoengine import MongoEngine
from flask_cors import CORS

import json

# The goal of this service si to manage data for the 'posts' collection

app = Flask(__name__)
CORS(app)

app.config["MONGODB_SETTINGS"] ={
    "host": "mongodb+srv://root:root@twittair.bk1wjym.mongodb.net/twittair"
}

db = MongoEngine(app)

class Users(db.Document):
    profil_pic = db.StringField()
    email = db.StringField()
    username = db.StringField()
    password = db.StringField()
    liked_twits = db.ListField()
    rt_twits = db.ListField()
    user_posts = db.ListField()


# return all users documents from mongodb
@app.route('/users',methods=["GET"])
def getAllUsers():
    getUser = Users.objects().to_json()
    return getUser

    
# add a new ad to the collection with given details
@app.route('/new_user', methods=["POST"])
def createAds(): 
    data = request.json
    new_user = Users(**data).save()
    return "user've been created"


# get a specific user 
@app.route('/user/<username>',methods=["GET"])
def getUser(username=""): 
    user = Users.objects().get(username=username).to_json()
    return user



@app.route('/logging',methods=["POST"])
def login():
    # we get the data sended from react
    data = request.json
    # instancing a new user with the data sended from react
    user = Users(**data).to_json()
    # convert our var to a json object
    json_user = json.loads(user)
    # get variables 'username' and 'password' from json object
    username = json_user["username"]
    password = json_user["password"]

    # check if user & password of this user are correct

    #print('user username currently logging in is ' + username + ' and password is ' + password)

    check_if_user_exist = Users.objects(username=username,password=password).count()

    if check_if_user_exist != 0: 
        allow_connection = True 
        print(str(allow_connection) + ' user & pass are correct')
      
    else: 
        allow_connection = False
        print(str(allow_connection) + ' user & pass incorrect')
    
    if allow_connection == True:
        # connection valid : move on'/home'
        return 'authorized', 200	 
    else:
        # connection not valid : stay on /login
        return 'refused', 300
        
    # if result != "" : connection ok else connection nok 
    # displaying some infos for debugging
    

if __name__ == "__main__":
    app.run(port=5002)


