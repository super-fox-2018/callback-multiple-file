const fs = require('fs');
var sleep = require('sleep');

function readFile(file,cb){
	fs.readFile(file,(err,data)=>{
		if (err) throw err
		dataParse = JSON.parse(data)	
		cb(dataParse)
	})
}

function match_data(parent_file, children_file) {
  // your code here...
  readFile(parent_file,(dataParent)=>{
  	readFile(children_file,(dataChildren)=>{
  		for(var i=0;i<dataParent.length;i++){
  			dataParent[i]["childrens"] = []
  		}
  		for(var i=0;i<dataChildren.length;i++){
  			for(var j=0;j<dataParent.length;j++){
  				if (dataChildren[i].family===dataParent[j].last_name) {
  					dataParent[j].childrens.push(dataChildren[i].full_name)
  				}
  			}
  		}
  		console.log(dataParent)
  	})
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
