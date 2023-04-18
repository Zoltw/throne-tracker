db.toilets.drop()
db.toilets.insertMany([
{"toiletId": "1", "name": "McDonald's - Floriańska 55", 
    "location":{ 
        "address":{ 
            "country": "Poland", "city": "Kraków", "zip": "31-019", "addressLine1": "Floriańska 55"
         }, 
         "latitude": 50.06468195539194, "longitude": 19.941345836665263 }, 
        "rates": {
            "id": "0"
        }, 
},
{"toiletId": "2", "name": "Toaleta tunel", 
    "location":{ 
        "address":{ 
            "country": "Poland", "city": "Kraków", "zip": "31-001", "addressLine1": "Skrzyżowanie Basztowa/Lubicz/Westerplatte/Pawia"
         }, 
         "latitude": 50.064913309084275, "longitude": 19.9450435614226 }, 
        "rates": {
            "id": "1"
        }, 
},
{"toiletId": "3", "name": "Plac Szczepański", 
    "location":{ 
        "address":{ 
            "country": "Poland", "city": "Kraków", "zip": "31-011", "addressLine1": "Plac Szczepański"
         }, 
         "latitude": 50.064480499170415, "longitude": 19.935110329431172 }, 
        "rates": {
            "id": "2"
        }, 
},
{"toiletId": "4", "name": "Sukiennice", 
    "location":{ 
        "address":{ 
            "country": "Poland", "city": "Kraków", "zip": "33-332", "addressLine1": "Rynek Główny 1/3"
         }, 
         "latitude": 50.06222646223616, "longitude": 19.937524330659006 }, 
        "rates": {
            "id": "3"
        }, 
},
])