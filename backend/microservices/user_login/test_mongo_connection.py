from flask import Flask
import pymongo
from pymongo import MongoClient


app = Flask(__name__)

cluster = MongoClient("mongodb://localhost:27017/")

db = cluster["twittair"]
collection = db["users"]


post1 = {"_id":"0", "user_name":"testUser1"}
post2 = {"_id":"100", "user_name":"testUser2"}
collection.insert_many([post1,post2])
print('users have been insered in the db')