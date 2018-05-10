const fs = require('fs');
var sleep = require('sleep');

function get_data(file,cb) {
	fs.readFile(file,function(err,data) {
		if(err){
			throw err
		}
		var parseFile = JSON.parse(data)
		cb(parseFile)
	})
}

function match_data(parent_file, children_file) {
  // your code here...
  get_data(parent_file,function(dataParents) {
  	get_data(children_file,function(dataChildrens) {
  		
  		for(let i=0;i<dataParents.length;i++) {
  			dataParents[i].childrens=[]
  			for(let j=0;j<dataChildrens.length;j++) {
  				if(dataChildrens[j].family == dataParents[i].last_name){
  					dataParents[i].childrens.push(dataChildrens[j].full_name)
  				}
  			}
  		}
  	sleep.sleep(5)
  	console.log(dataParents)
  	})

  })

}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");

