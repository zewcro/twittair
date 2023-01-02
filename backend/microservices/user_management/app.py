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
    banner_img = db.StringField()
    email = db.StringField()
    username = db.StringField()
    displayed_name = db.StringField()
    biography = db.StringField()
    password = db.StringField()
    followers_count = db.IntField()
    followers_list = db.ListField()
    following_count = db.IntField()
    following_list = db.ListField()     
    liked_twits = db.ListField()
    rt_twits = db.ListField()
    user_posts = db.ListField()



# Get the profil pic link of the post author  
@app.route('/user/getpic/<username>', methods=["GET"])
def getAuthorProfilPic(username=""):
    profil_pic_link = Users.objects(username=username).only('profil_pic').exclude('id').to_json()
    print('LINK IS : ' + profil_pic_link)
    
    return profil_pic_link



if __name__ == "__main__":
    app.run(port=5003)


