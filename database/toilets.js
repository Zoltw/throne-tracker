db.toilets.drop();
db.ratings.drop();
db.toilets.insertMany([
{"toiletId": 1, "name": "McDonald's", "hours": "6.00 - 22.00", "photo": "https://cdn.mainichi.jp/vol1/2021/02/26/20210226p2a00m0na030000p/0c10.jpg?2",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "31-019", "addressLine1": "Floriańska 55"
         },
         "latitude": 50.06468195539194, "longitude": 19.941345836665263 },
},
{"toiletId": 2, "name": "Toaleta tunel", "hours": "24/7", "photo": "https://www.initial.co.uk/blog/wp-content/uploads/2016/12/ThinkstockPhotos-526855525.jpg",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "31-001", "addressLine1": "Skrzyżowanie Basztowa/Lubicz"
         },
         "latitude": 50.064913309084275, "longitude": 19.9450435614226 },
},
{"toiletId": 3, "name": "toi lux", "hours": "24/7", "photo": "https://images.pexels.com/photos/7746104/pexels-photo-7746104.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "31-011", "addressLine1": "Plac Szczepański"
         },
         "latitude": 50.064480499170415, "longitude": 19.935110329431172 },
},
{"toiletId": 4, "name": "Sukiennice", "hours": "8.00 - 24.00", "photo": "https://4.bp.blogspot.com/-VQ-IG8pFfcs/WQYWuWexVmI/AAAAAAAAd2s/lXJNgWUl7U4xP6YXEQotqObl_uKCjBSqgCLcB/s1600/IMG_1826.JPG",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "33-332", "addressLine1": "Rynek Główny 1/3"
         },
         "latitude": 50.06222646223616, "longitude": 19.937524330659006 },
},
{"toiletId": 5, "name": "Dupajana", "hours": "7.00 - 20.00", "photo": "https://www.stayathomemum.com.au/wp-content/uploads/2017/09/dirty-toilet.jpg",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "33-332", "addressLine1": "Chełmońskiego 23"
         },
         "latitude": 50.064440499170415, "longitude": 19.932524330659006 },
},
{"toiletId": 6, "name": "Kibel Jana", "hours": "6.00 - 22.00", "photo": "https://kckratt.com/cache/images/584bad7972365bef560b1905986e339b.jpg",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "33-332", "addressLine1": "Dupna 1/3"
         },
         "latitude": 50.064380499170415, "longitude": 19.940145836665263 },
},
{"toiletId": 7, "name": "Toi toi Jareczka", "hours": "5.00 - 22.00", "photo": "https://st3.depositphotos.com/1000471/15699/i/950/depositphotos_156996842-stock-photo-mobile-public-toilets-at-the.jpg",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "33-332", "addressLine1": "Jareczka 1"
         },
         "latitude": 50.062980499170415, "longitude": 19.941345836665263 },
},
])
db.ratings.insertMany([
{"toiletId": 1,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 2,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 3,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 4,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 5,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "no",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 1,
    "rate": 2,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 2,
    "rate": 1,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 3,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 4,
    "rate": 3,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 5,
    "rate": 4,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "no",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 6,
    "rate": 3,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 7,
    "rate": 4,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "no",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 1,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 2,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "no",
        "smell": "yes",
    }
},
{"toiletId": 3,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 4,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "no",
        "smell": "yes",
    }
},
{"toiletId": 5,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "no",
        "soap": "yes",
        "shower": "no",
        "smell": "yes",
    }
},
{"toiletId": 1,
    "rate": 2,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "no",
        "smell": "yes",
    }
},
{"toiletId": 2,
    "rate": 1,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "white",
        "soap": "yes",
        "shower": "no",
        "smell": "yes",
    }
},
{"toiletId": 3,
    "rate": 5,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletId": 4,
    "rate": 3,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "no",
        "smell": "yes",
    }
},
{"toiletId": 5,
    "rate": 4,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "no",
        "soap": "yes",
        "shower": "no",
        "smell": "yes",
    }
},
{"toiletId": 6,
    "rate": 3,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "yes",
        "soap": "yes",
        "shower": "no",
        "smell": "yes",
    }
},
{"toiletId": 7,
    "rate": 2,
    "details": {
        "money": "yes",
        "clean": "yes",
        "paper": "no",
        "soap": "yes",
        "shower": "no",
        "smell": "yes",
    }
}
]);

db.toilets.find()
db.ratings.find()
db.users.find()