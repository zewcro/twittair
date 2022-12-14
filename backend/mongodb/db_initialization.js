db = db.getSiblingDB("twittair");
db.posts.drop();


db.createUser(
    {
        user: "root", 
        pwd: "root",
        roles: [
            {
                role: "readWrite",
                db: "twittair"
            }
        ]
    }
)


db.posts.save({
    "_id": {
      "$oid": "63975273c555313e48750173"
    },
    "post_id": "1",
    "post_author": "admin",
    "post_content": "ceci est un post de test pour vérifier le bon fonctionnement du backend",
    "nb_like": 1,
    "nb_rt": 0,
    "published_date": "2022/12/12"
  });

db.posts.save({
    "_id": {
      "$oid": "639752a3c555313e48750175"
    },
    "post_id": "2",
    "post_author": "theor",
    "post_content": "Salut le front, ici le back! ",
    "nb_like": 0,
    "nb_rt": 0,
    "published_date": "2022/12/12"
  });

db.posts.save({
    "_id": {
      "$oid": "63986eb372f7b18f34250265"
    },
    "post_id": "3",
    "post_author": "Marie",
    "post_content": "Mon petit bebou",
    "nb_like": 1,
    "nb_rt": 0,
    "published_date": "2022/12/13"
  });