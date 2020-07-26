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
// delBtn.classList.add('btn-Mr2');
// editBtn.classList.add('btn-Mr1');
delBtn.setAttribute('onclick',"deleteli(this)");
editBtn.setAttribute('onclick','edit(this)');
var butSpan=document.createElement('span');
butSpan.setAttribute("class","buttonsMr");

if(inputValue.value==""){
liText=document.createTextNode('Blank');
    li.appendChild(liText);
    li.appendChild(span);
    butSpan.appendChild(editBtn)
    butSpan.appendChild(delBtn)
    li.appendChild(butSpan);
 
    list.appendChild(li);

    
}
else{
    li.appendChild(liText);
    li.appendChild(span);
    butSpan.appendChild(editBtn)
    butSpan.appendChild(delBtn)
    li.appendChild(butSpan);
    
    
    list.appendChild(li);
    
console.log(li)
}
inputValue.value="";

}

function deleteli(e){
e.parentNode.parentElement.remove();
}
var cout=0;
function edit(e){
    var inputTag=document.createElement('input');
    inputTag.setAttribute('class','inputEdit');
    inputTag.setAttribute('id',"inputid");
    var inputid=document.getElementById('inputid');
  e.parentNode.parentElement.children[0].appendChild(inputTag)
  

  e.parentNode.parentElement.children[1].children[0].innerHTML='Update'
    
   cout++;

   if(cout==2){

 e.parentNode.parentElement.childNodes[0].nodeValue=inputid.value

e.parentNode.parentElement.children[0].innerHTML=" "
e.parentNode.parentElement.children[1].children[0].innerHTML='Edit'
 

    cout=0;
   }

 
        
}

function deleteall(){

list.innerHTML=" ";


}