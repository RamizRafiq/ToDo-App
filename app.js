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
delBtn.appendChild(delText);
editBtn.appendChild(editText);
delBtn.setAttribute('class','btn');
editBtn.setAttribute('class','btn');
delBtn.classList.add('btn-Mr2');
editBtn.classList.add('btn-Mr1');
delBtn.setAttribute('onclick',"deleteli(this)");
editBtn.setAttribute('onclick','edit(this)');


if(inputValue.value==""){
liText=document.createTextNode('Blank');
    li.appendChild(liText);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    
    list.appendChild(li);
    
}
else{
    li.appendChild(liText);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    
    list.appendChild(li);
    

}
inputValue.value="";

}

function deleteli(e){
e.parentNode.remove();
}
var cout=0;
function edit(e){
    var inputTag=document.createElement('input');
    inputTag.setAttribute('class','inputEdit');
    inputTag.setAttribute('id',"inputid");
    var inputid=document.getElementById('inputid');

   
    e.parentElement.children[0].appendChild(inputTag)
    e.parentElement.children[1].innerHTML='Update';
    
   cout++;
   console.log(cout);
   if(cout==2){
    e.parentNode.childNodes[0].nodeValue=inputid.value;
// console.log(inputid.value);
    e.parentElement.children[0].innerHTML=" ";
    e.parentElement.children[1].innerHTML='Edit';
    cout=0;
   }

 
        
}

function deleteall(){

list.innerHTML=" ";


}