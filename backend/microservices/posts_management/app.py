from flask import Flask, request 
from flask_mongoengine import MongoEngine
from flask_cors import CORS

from pymongo import MongoClient 


# The goal of this service si to manage data for the 'posts' collection

app = Flask(__name__)
CORS(app)


app.config["MONGODB_SETTINGS"] ={
    "host": "mongodb://localhost:27017/twittair"
}

db = MongoEngine(app)


class posts(db.Document):
    post_id = db.StringField()
    post_author = db.StringField()
    nb_like = db.IntField()
    nb_rt = db.IntField() 
    published_date = db.StringField()


# return all posts documents from mongodb
@app.route('/posts',methods=["GET"])
def get_all_posts():
    twittair_posts = posts.objects().to_json()
    return twittair_posts


# return a specific document for a given id
@app.route('/post/<id>',methods=["GET"])
def get_specific_post(id=""):

    posts_qty = posts.objects.count()

  # error management : we display specific message for each possible error

    if( id <=  str(posts_qty)): 
        specific_post = posts.objects().get(post_id = id).to_json()
        return specific_post
    elif(id > str(posts_qty)): 
        return 'ERROR : Invalid given ID, try another'
    else:
        return "ERROR :The post that you trying to display does not exist!"
    

if __name__ == '__main__':
    app.run(host='0.0.0.0')

