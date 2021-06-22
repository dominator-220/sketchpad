let parent=document.querySelector('#ParentContainer');
let val=16;
//x
str="";

let i=0;
let width=500;
let req=Math.floor((width)/(val));
let currentWidth=(req+1)*(val)-1;
parent.style.width=""+currentWidth+"px";
parent.style.height=""+currentWidth+"px";
while(i<val){
  str+=""+req+"px ";
  i++;
}

console.log(str);
parent.style.gridTemplateColumns=str;
parent.style.gridTemplateRows=str;
//parent.style.width="335px";
for(let i=0; i<val*val;i++){
    div1=document.createElement("div");
    div1.addEventListener("mouseover",changeColor);
 
    parent.appendChild(div1);
}
console.log(parent.value);
let changeSizeButton=document.querySelector('#Button1');
changeSizeButton.addEventListener("click",changeSize);

let clearButton=document.querySelector('#Button2');
clearButton.addEventListener("click",clear);

function changeColor(){
    let x = Math. floor(Math. random() * 256);
    let y = Math. floor(Math. random() * 256);
    let z = Math. floor(Math. random() * 256);
    this.style.backgroundColor="rgb(" + x + "," + y + "," + z + ")";;
}

function changeSize(){
    parent=document.querySelector('#ParentContainer');
    val=prompt("Enter Size");
    //x
    str="";

    let i=0;
    let req=Math.floor((width)/(val));
    let currentWidth=(req+1)*(val)-1;
    parent.style.width=""+currentWidth+"px";
    parent.style.height=""+currentWidth+"px";
    while(i<val){
    str+=""+req+"px ";
    i++;
    }

    console.log(str);
    parent.style.gridTemplateColumns=str;
    parent.style.gridTemplateRows=str;
    for(let i=0; i<val*val;i++){
        div1=document.createElement("div");
        div1.addEventListener("mouseover",changeColor);
     
        parent.appendChild(div1);
    }

}
function clear(){
    parent=document.querySelector('#ParentContainer');
    let i=2;
    let child=parent.children;
    while(i<child.length){
        child[i].style.backgroundColor="white";
        i++;
    }
    
    console.log(parent.children.length);
 

}


