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


class Posts(db.Document):
    post_id = db.StringField()
    post_author = db.StringField()
    author_profil_pic = db.StringField()
    post_content = db.StringField()
    nb_like = db.IntField()
    nb_rt = db.IntField() 
    published_date = db.StringField()


class newTwit(db.Document):
    author = db.StringField()
    content = db.StringField()

# return all posts documents from mongodb
@app.route('/posts',methods=["GET"])
def get_all_posts():
    twittair_posts = Posts.objects().to_json()
    return twittair_posts


# return a specific document for a given id
@app.route('/post/<id>',methods=["GET"])
def get_specific_post(id=""):

    posts_qty = Posts.objects.count()

  # error management : we display specific message for each possible error

    if( id <=  str(posts_qty)): 
        specific_post = Posts.objects().get(post_id = id).to_json()
        return specific_post
    elif(id > str(posts_qty)): 
        return 'ERROR : Invalid given ID, try another'
    else:
        return "ERROR :The post that you trying to display does not exist!"
    

    
# return all the post where the author is equal to connected user
@app.route('/posts/feed/<username>', methods=["GET"])
def getUserPostsFeed(username=""): 
    user_posts_feed = Posts.objects().filter(post_author=username).to_json()
    return user_posts_feed

    
    
# add a new ad to the collection with given details
@app.route('/new_twit', methods=["POST"])
def createAds(): 
    data = request.json
    new_twit = Posts(**data).save()
    return "twit've been created"



if __name__ == "__main__":
    app.run(port=5001)


