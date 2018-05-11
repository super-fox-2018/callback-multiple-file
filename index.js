const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  // your code here...
  read(parent_file, function(parentData) { //returned parent json data
    read(children_file, function(childrenData) { // returned children json data
      for (let i = 0; i < parentData.length; i++) {
        console.log('Processing parentData ID: ', parentData[i].id);
        parentData[i].children = [];
        for (let j = 0; j < childrenData.length; j++) {
          if (parentData[i].last_name === childrenData[j].family) {
            parentData[i].children.push(childrenData[j].full_name)
          }
        }
        sleep.sleep(1);
      }
      console.log('Processing output...')
      sleep.sleep(5);
      console.log(parentData)
    })
  })
}

function read(file, callback) {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);
    callback(jsonData);
  })
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
