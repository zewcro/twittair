from flask import Flask
import pymongo
from pymongo import MongoClient


app = Flask(__name__)

cluster = MongoClient("mongodb+srv://root:root@twittair.bk1wjym.mongodb.net/")

db = cluster["twittair"]
collection = db["users"]


post1 = {"_id":"0", "msg":"HelloWorld"}
post2 = {"_id":"100", "status":"Connection Work ! "}
collection.insert_many([post1,post2])
print('users have been insered in the db')