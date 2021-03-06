/*
1. define a controller
2. read in data and assign to the scope
3. read the scope into the page

*/
// angular.module('controllerAsExample', [])
//    .controller('SettingsController1', SettingsController1);


angular.module('legoApp', [])
   .controller('setController', setController);

 function setController() {


	this.legoSets = [
	  {
	    "model":6628,
	    "theme":"Town",
	    "subTheme":"vehicle",
	    "releaseYear":1981,
	    "description":"Tow Truck",
	    "pieces":38,
	    "bricksetVersion":1
	  },
	  {
	    "model":646,
	    "theme":"Town",
	    "subTheme":"classic",
	    "releaseYear":1979,
	    "description":"Auto Service",
	    "pieces":43,
	    "bricksetVersion":1
	  },
	  {
	    "model":6629,
	    "theme":"Town",
	    "subTheme":"medical",
	    "releaseYear":1981,
	    "description":"Ambulance",
	    "pieces":39,
	    "bricksetVersion":1
	  },
	  {
	    "model":6654,
	    "theme":"Town",
	    "subTheme":"vehicle",
	    "releaseYear":1983,
	    "description":"Motorcycle Transport",
	    "pieces":50,
	    "bricksetVersion":1
	  },
	  {
	    "model":622,
	    "theme":"Town",
	    "subTheme":"classic",
	    "releaseYear":1978,
	    "description":"Tipper Truch",
	    "pieces":45,
	    "bricksetVersion":2
	  },
	  {
	    "model":6369,
	    "theme":"Town",
	    "subTheme":"shops and services",
	    "releaseYear":1985,
	    "description":"Auto Workshop",
	    "pieces":134,
	    "bricksetVersion":1
	  },
	  {
	    "model":6652,
	    "theme":"Town",
	    "subTheme":"construction",
	    "releaseYear":1983,
	    "description":"Construction Truck",
	    "pieces":44,
	    "bricksetVersion":1
	  },
	  {
	    "model":6363,
	    "theme":"Town",
	    "subTheme":"shops and services",
	    "releaseYear":1980,
	    "description":"Auto Repair Shop",
	    "pieces":141,
	    "bricksetVersion":1
	  },
	  {
	    "model":6691,
	    "theme":"Town",
	    "subTheme":"medical",
	    "releaseYear":1981,
	    "description":"Red Cross Helicopter",
	    "pieces":107,
	    "bricksetVersion":1
	  },
	  {
	    "model":6368,
	    "theme":"Town",
	    "subTheme":"flight",
	    "releaseYear":1985,
	    "description":"Jet Airliner",
	    "pieces":136,
	    "bricksetVersion":1
	  },
	  {
	    "model":6678,
	    "theme":"Town",
	    "subTheme":"construction",
	    "releaseYear":1981,
	    "description":"Pneumatic Crane",
	    "pieces":60,
	    "bricksetVersion":1
	  },
	  {
	    "model":6370,
	    "theme":"Town",
	    "subTheme":"leisure",
	    "releaseYear":1985,
	    "description":"Weekend Home",
	    "pieces":177,
	    "bricksetVersion":1
	  },
	  {
	    "model":6384,
	    "theme":"Town",
	    "subTheme":"police",
	    "releaseYear":1983,
	    "description":"Police Station",
	    "pieces":389,
	    "bricksetVersion":1
	  },
	  {
	    "model":6392,
	    "theme":"Town",
	    "subTheme":"flight",
	    "releaseYear":1985,
	    "description":"Airport",
	    "pieces":530,
	    "bricksetVersion":1
	  },
	  {
	    "model":6822,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1981,
	    "description":"Space Digger",
	    "pieces":33,
	    "bricksetVersion":1
	  },
	  {
	    "model":6842,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1981,
	    "description":"Small Space Shuttle Craft",
	    "pieces":46,
	    "bricksetVersion":1
	  },
	  {
	    "model":6890,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1982,
	    "description":"Cosmic Cruiser",
	    "pieces":115,
	    "bricksetVersion":1
	  },
	  {
	    "model":6880,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1982,
	    "description":"Surface Explorer",
	    "pieces":82,
	    "bricksetVersion":1
	  },
	  {
	    "model":6929,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1981,
	    "description":"Star Fleet Explorer",
	    "pieces":242,
	    "bricksetVersion":1
	  },
	  {
	    "model":6950,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1982,
	    "description":"Mobile Rocket Transport",
	    "pieces":209,
	    "bricksetVersion":1
	  },
	  {
	    "model":6971,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1984,
	    "description":"Inter-Galactic Command",
	    "pieces":328,
	    "bricksetVersion":1
	  },
	  {
	    "model":6930,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1983,
	    "description":"Space Supply Station",
	    "pieces":206,
	    "bricksetVersion":1
	  },
	  {
	    "model":6951,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1984,
	    "description":"Robot Command Center",
	    "pieces":295,
	    "bricksetVersion":1
	  },
	  {
	    "model":6980,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1983,
	    "description":"Galaxy Commander",
	    "pieces":443,
	    "bricksetVersion":1
	  },
	  {
	    "model":6970,
	    "theme":"Space",
	    "subTheme":"classic",
	    "releaseYear":1980,
	    "description":"Beta I Command Base",
	    "pieces":264,
	    "bricksetVersion":1
	  },
	  {
	    "model":6010,
	    "theme":"Castle",
	    "subTheme":"lion knights",
	    "releaseYear":1984,
	    "description":"Supply Wagon",
	    "pieces":35,
	    "bricksetVersion":1
	  },
	  {
	    "model":6011,
	    "theme":"Castle",
	    "subTheme":"black falcons",
	    "releaseYear":1985,
	    "description":"Black Knight's Treasure",
	    "pieces":25,
	    "bricksetVersion":1
	  },
	  {
	    "model":6030,
	    "theme":"Castle",
	    "subTheme":"black falcons",
	    "releaseYear":1984,
	    "description":"Catapult",
	    "pieces":83,
	    "bricksetVersion":1
	  },
	  {
	    "model":6022,
	    "theme":"Castle",
	    "subTheme":"Lion knights",
	    "releaseYear":1984,
	    "description":"Horse Cart",
	    "pieces":42,
	    "bricksetVersion":1
	  },
	  {
	    "model":6040,
	    "theme":"Castle",
	    "subTheme":"Lion knights",
	    "releaseYear":1984,
	    "description":"Blacksmith Shop",
	    "pieces":92,
	    "bricksetVersion":1
	  },
	  {
	    "model":6055,
	    "theme":"Castle",
	    "subTheme":"Lion knights",
	    "releaseYear":1985,
	    "description":"Prison Convoy",
	    "pieces":115,
	    "bricksetVersion":1
	  },
	  {
	    "model":6061,
	    "theme":"Castle",
	    "subTheme":"Lion knights",
	    "releaseYear":1984,
	    "description":"Siege Tower",
	    "pieces":216,
	    "bricksetVersion":1
	  },
	  {
	    "model":6074,
	    "theme":"Castle",
	    "subTheme":"Black falcons",
	    "releaseYear":1986,
	    "description":"Black Falcon's Fortress",
	    "pieces":430,
	    "bricksetVersion":1
	  },
	  {
	    "model":6073,
	    "theme":"Castle",
	    "subTheme":"Black falcons",
	    "releaseYear":1984,
	    "description":"Knight's Castle",
	    "pieces":410,
	    "bricksetVersion":1
	  },
	  {
	    "model":6080,
	    "theme":"Castle",
	    "subTheme":"Lion knights",
	    "releaseYear":1984,
	    "description":"King's Castle",
	    "pieces":674,
	    "bricksetVersion":1
	  },
	  {
	    "model":6285,
	    "theme":"Pirate",
	    "subTheme":"",
	    "releaseYear":1989,
	    "description":"Black Sea Barracuda",
	    "pieces":909,
	    "bricksetVersion":1
	  },
	  {
	    "model":8851,
	    "theme":"Technic",
	    "subTheme":"",
	    "releaseYear":1984,
	    "description":"Excavator",
	    "pieces":347,
	    "bricksetVersion":1
	  },
	  {
	    "model":8660,
	    "theme":"Technic",
	    "subTheme":"Arctic",
	    "releaseYear":1986,
	    "description":"Arctic Rescue Unit",
	    "pieces":385,
	    "bricksetVersion":1
	  },
	  {
	    "model":8860,
	    "theme":"Technic",
	    "subTheme":"",
	    "releaseYear":1980,
	    "description":"Car Chassis",
	    "pieces":668,
	    "bricksetVersion":1
	  },
	  {
	    "model":8855,
	    "theme":"Technic",
	    "subTheme":"",
	    "releaseYear":1988,
	    "description":"Prop Plane",
	    "pieces":569,
	    "bricksetVersion":1
	  },
	  {
	    "model":8094,
	    "theme":"Technic",
	    "subTheme":"Universal",
	    "releaseYear":1990,
	    "description":"Control Center",
	    "pieces":546,
	    "bricksetVersion":1
	  },
	  {
	    "model":8862,
	    "theme":"Technic",
	    "subTheme":"",
	    "releaseYear":1989,
	    "description":"Backhoe Grader",
	    "pieces":671,
	    "bricksetVersion":1
	  },
	  {
	    "model":8854,
	    "theme":"Technic",
	    "subTheme":"",
	    "releaseYear":1989,
	    "description":"Power Crane",
	    "pieces":516,
	    "bricksetVersion":1
	  },
	  {
	    "model":8843,
	    "theme":"Technic",
	    "subTheme":"",
	    "releaseYear":1984,
	    "description":"Fork-lift Truch",
	    "pieces":269,
	    "bricksetVersion":1
	  },
	  {
	    "model":8040,
	    "theme":"Technic",
	    "subTheme":"Universal",
	    "releaseYear":1984,
	    "description":"Universal Set",
	    "pieces":163,
	    "bricksetVersion":1
	  },
	  {
	    "model":8865,
	    "theme":"Technic",
	    "subTheme":"",
	    "releaseYear":1988,
	    "description":"Test Car",
	    "pieces":900,
	    "bricksetVersion":1
	  }
	];


        //console.log(this.legoSets);

   };

setController.prototype.idSearch = function() {
	//var newIdSearch = this.newIdSearch;
	//console.log(newIdSearch);
}

	
	


