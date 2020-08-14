var inputValue=document.getElementById('Todo-item')
var list=document.getElementById('list');
function addItems(){

var li=document.createElement('li');
var liText=document.createTextNode(inputValue.value);
var delBtn=document.createElement('button');
var editBtn=document.createElement('button');
var delText=document.createTextNode('Delete');
var editText=document.createTextNode('Edit');
var span=document.createElement('span');
span.setAttribute("id","inputId")
delBtn.appendChild(delText);
editBtn.appendChild(editText);
delBtn.setAttribute('class','btn2');
editBtn.setAttribute('class','btn1');
delBtn.setAttribute('onclick',"deleteli(this)");
editBtn.setAttribute('onclick','edit(this)');
var butSpan=document.createElement('span');
butSpan.setAttribute("class","buttonsMr");

if(inputValue.value==""){
// liText=document.createTextNode('Blank');
//     li.appendChild(liText);
//     li.appendChild(span);
//     butSpan.appendChild(editBtn)
//     butSpan.appendChild(delBtn)
//     li.appendChild(butSpan);
 
//     list.appendChild(li);

    
}
else{

    var key=firebase.database().ref("items").push().key
    
li.setAttribute("id",key)
    li.appendChild(liText);
    li.appendChild(span);
    butSpan.appendChild(editBtn)
    butSpan.appendChild(delBtn)
    li.appendChild(butSpan);
    list.appendChild(li);
    

// Database
firebase.database().ref("items/"+key).set(inputValue.value)






}
inputValue.value="";

}






function deleteli(e){

var elementId=e.parentNode.parentElement.id



    firebase.database().ref("items").once("value",function(data){
        
 var dataVal=data.val();


for(var prop in dataVal){

    if(elementId==prop){

firebase.database().ref("items/"+prop).remove()
            e.parentNode.parentElement.remove()
    }

}

    })



    



}



var cout=0;
function edit(e){
    var elementId=e.parentNode.parentElement.id;
    var newVal=prompt("Input Value:");
firebase.database().ref("items").once("value",function(data){
var dataVal=data.val()

for(var prop in dataVal){
if(elementId==prop){
    firebase.database().ref("items/"+prop).set(newVal)
    // console.log(prop)
}
}
})
 
 
        
}


// Remove all li

function deleteall(){
firebase.database().ref("items").remove()
list.innerHTML=" ";


}








// Retrive data

firebase.database().ref("items").once("value",function(data){
var dataVal=data.val();
for(var prop in dataVal){
    console.log(prop)
    console.log(dataVal[prop])




    var li=document.createElement('li');
    li.setAttribute("id",prop)
    var liText=document.createTextNode(dataVal[prop]);
    var delBtn=document.createElement('button');
    var editBtn=document.createElement('button');
    var delText=document.createTextNode('Delete');
    var editText=document.createTextNode('Edit');
    var span=document.createElement('span');
    span.setAttribute("id","inputId")
    delBtn.appendChild(delText);
    editBtn.appendChild(editText);
    delBtn.setAttribute('class','btn2');
    editBtn.setAttribute('class','btn1');
    delBtn.setAttribute('onclick',"deleteli(this)");
    editBtn.setAttribute('onclick','edit(this)');
    var butSpan=document.createElement('span');
    butSpan.setAttribute("class","buttonsMr");
    
// set on page 
li.appendChild(liText);
    li.appendChild(span);
    butSpan.appendChild(editBtn)
    butSpan.appendChild(delBtn)
    li.appendChild(butSpan);
    list.appendChild(li);
    









}

})