//dom
console.log(document);
console.log(document.head);
console.log(document.body);

console.log(document.body.childNodes);

let head = document.getElementById("heading");
head.style.color="blue";
head.style.backgroundColor="black";
head.style.fontSize = "64px";
console.log(head);
let para1 = document.getElementsByClassName("para");
// para1[0].style.color="red";
// para1[0].style.backgroundColor="green";
// para1[0].style.fontSize="76px";
// para1[1].style.color="red";
// para1[1].style.backgroundColor="green";
// para1[1].style.fontSize="76px";

para1[1].innerHTML = "dom mainpulation";

let collection=document.getElementsByClassName("container");
collection[1].style.fontSize="20px";

let collection=document.getElementsByTagName("li");
document.getElementById("demo").innerHTML=collection[1].innerHTML;
document.getElementById("demo").innerHTML=collection[2].innerHTML;
function changecolor(newcolor)
let btn = document.getElementById("paral")
btn.style.backgroundColor=newcolor













