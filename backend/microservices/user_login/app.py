from flask import Flask, request 
from flask_mongoengine import MongoEngine
from flask_cors import CORS

from pymongo import MongoClient 
import pymongo


# The goal of this service si to manage data for the 'posts' collection

app = Flask(__name__)
CORS(app)


app.config["MONGODB_SETTINGS"] ={
    "host": "mongodb+srv://root:root@twittair.bk1wjym.mongodb.net/twittair"
}

db = MongoEngine(app)


class users(db.Document):
    profil_pic = db.StringField()
    email = db.StringField()
    username = db.StringField()
    password = db.StringField()
    liked_twits = db.ListField()
    rt_twits = db.ListField()
    user_posts = db.ListField()


# return all posts documents from mongodb
@app.route('/users',methods=["GET"])
def getAllUsers():
    getUser = users.objects().to_json()
    return getUser

    
# add a new ad to the collection with given details
@app.route('/new_user', methods=["POST"])
def createAds(): 
    data = request.json
    new_user = users(**data).save()
    return "user've been created"



if __name__ == "__main__":
    app.run(port=5002)


