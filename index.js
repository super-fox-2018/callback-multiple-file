const fs = require('fs');
var sleep = require('sleep');

function match_data(parent_file, children_file) {
  let parentsData = undefined;
  fs.readFile(parent_file, 'utf8', (err, parentsString) => {
    if (err) throw err;
    sleep.sleep(5);
    parentsData = JSON.parse(parentsString);
  });
  fs.readFile(children_file, 'utf8', (err, childrenString) => {
    if (err) throw err;
    sleep.sleep(5);
    const childrenData = JSON.parse(childrenString);
    for (let i = 0; i < parentsData.length; i += 1) {
      const parent = parentsData[i];
      parent.children = [];
      for (let j = 0; j < childrenData.length; j += 1) {
        const child = childrenData[j];
        if (child.family === parent.last_name) {
          parent.children.push(child.full_name);
        }
      }
    }
    console.log(parentsData);
  });  
}

match_data('./parents.json', './childrens.json')
console.log("Notification : Data sedang diproses !");
