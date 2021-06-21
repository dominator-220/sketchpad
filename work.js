let parent=document.querySelector('#ParentContainer');
let val=16;
//x
str=""

let i=0;
while(i<val){
  str+="20px "
  i++;
}
console.log(str);
parent.style.gridTemplateColumns=str;
parent.style.gridTemplateRows=str;
parent.style.width="335px";
for(let i=0; i<val*val;i++){
    div1=document.createElement("div");
    parent.appendChild(div1);
}
console.log(parent.value);

