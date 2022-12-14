from flask import Flask
app = Flask(__name__)
import pymongo
from pymongo import MongoClient

#export FLASK_APP=app.py flask run
#
# request response model USER API APP

cluster = MongoClient("mongodb+srv://root:root@cluster0.ptvh22x.mongodb.net/test")

db = cluster["UserData"]
collection = db["Flask_mongo"]

#collection.insert_one({"_id":0, "user_name":"Soumi"})

#collection.delete_one({"_id":0, "user_name":"Soumi"})

post1 = {"_id":"0", "user_name":"Soumi"}
post2 = {"_id":"100", "user_name":"Ravi"}
collection.insert_many([post1,post2])

collection.find_one_and_update({"_id":"0"}, {"$set" : {"password" : updated_password}}, upsert = 0 )

