db.toilets.drop();
db.rates.drop();
db.toilets.insertMany([
{"toiletId": "1", "name": "McDonald's - Floriańska 55",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "31-019", "addressLine1": "Floriańska 55"
         },
         "latitude": 50.06468195539194, "longitude": 19.941345836665263 },
},
{"toiletId": "2", "name": "Toaleta tunel",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "31-001", "addressLine1": "Skrzyżowanie Basztowa/Lubicz/Westerplatte/Pawia"
         },
         "latitude": 50.064913309084275, "longitude": 19.9450435614226 },
},
{"toiletId": "3", "name": "Plac Szczepański",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "31-011", "addressLine1": "Plac Szczepański"
         },
         "latitude": 50.064480499170415, "longitude": 19.935110329431172 },
},
{"toiletId": "4", "name": "Sukiennice",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "33-332", "addressLine1": "Rynek Główny 1/3"
         },
         "latitude": 50.06222646223616, "longitude": 19.937524330659006 },
},
{"toiletId": "5", "name": "Dupajana",
    "location":{
        "address":{
            "country": "Poland", "city": "Kraków", "zip": "33-332", "addressLine1": "Rynek Główny 1/3"
         },
         "latitude": 51.06422646223616, "longitude": 19.932524330659006 },
},
])
db.rates.insertMany([
{"toiletsId": 1,
    "details": {
        "rate": 5,
        "money": "yes",
        "clean": "yes",
        "paper": "white",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletsId": 2,
    "details": {
        "rate": 5,
        "money": "yes",
        "clean": "yes",
        "paper": "white",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletsId": 3,
    "details": {
        "rate": 5,
        "money": "yes",
        "clean": "yes",
        "paper": "white",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletsId": 4,
    "details": {
        "rate": 5,
        "money": "yes",
        "clean": "yes",
        "paper": "white",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
},
{"toiletsId": 5,
    "details": {
        "rate": 5,
        "money": "yes",
        "clean": "yes",
        "paper": "white",
        "soap": "yes",
        "shower": "yes",
        "smell": "yes",
    }
}
]);