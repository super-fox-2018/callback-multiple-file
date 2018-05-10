const fs = require('fs');
var sleep = require('sleep');

function matchData(parentFile, childrenFile, callback) {
  let parentList = [];
  let childrenList = [];
  fs.readFile(parentFile, 'utf8', (err, data) => {
    if (err) {throw err;}
    parentList = JSON.parse(data);
    sleep.sleep(5);
    fs.readFile(childrenFile, 'utf8', (err, data) => {
      if (err) {throw err;}
      childrenList = JSON.parse(data);
      sleep.sleep(5);
      callback(parentList, childrenList, displayParents);
    });
  });
}

function getChildren(parentList, childrenList, callback) {
  for (let i = 0; i < parentList.length; i++) {
    let parent = parentList[i];
    parent.children = [];
    for (let j = 0; j < childrenList.length; j++) {
      let children = childrenList[j];
      if (children.family === parent.last_name) {
        parent.children.push(children.full_name);
      }
    }
  }
  callback(parentList);
}

function displayParents(parentList) {
  console.log(parentList);
}

matchData('./parents.json', './childrens.json', getChildren);
console.log('Notification : Data sedang diproses !');
