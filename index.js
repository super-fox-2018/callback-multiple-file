const fs = require('fs');
// var sleep = require('sleep');
let parentData = fs.readFileSync('parents.json','utf8')



function match_data(parent_file, children_file,call) {
  fs.readFile(parent_file,'utf8',(err,dataParent)=>{
    let parentList = JSON.parse(parentData)
    fs.readFile(children_file,'utf8',(err,dataChildren)=>{
      let childList =JSON.parse(dataChildren)
     
      let arr =[]
      for(let i=0;i<parentList.length;i++){
        parentList[i].childrens = []
      }
     
      for(let i=0;i<parentList.length;i++){
        for(let j =0;j<childList.length;j++){
   
          if(parentList[i].last_name == childList[j].family){
                parentList[i].childrens.push(childList[j].full_name)
          }
        }
      }
      call(parentList)
    })
  })
  

}

match_data('./parents.json', './childrens.json',function(call){
  console.log(call)
})
console.log("Notification : Data sedang diproses !");

