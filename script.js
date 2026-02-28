
const questions = window.questions || questions;

let current = parseInt(localStorage.getItem("current")) || 0;
let answers = JSON.parse(localStorage.getItem("answers")) || new Array(40).fill(null);
let scores = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};

function updateProgress(){
let percent=((current+1)/questions.length)*100;
document.getElementById("progressBar").style.width=percent+"%";
document.getElementById("progressText").innerText="第 "+(current+1)+" / "+questions.length+" 题";
}

function save(){
localStorage.setItem("current",current);
localStorage.setItem("answers",JSON.stringify(answers));
}

function show(){
updateProgress();
let box=document.getElementById("questionBox");
let q=questions[current];

let html="<h3>"+q.q+"</h3>";

q.o.forEach((opt,i)=>{
let cls="option";
if(answers[current]===i) cls+=" selected";
html+="<div class='"+cls+"' onclick='selectAnswer("+i+")'>"+opt+"</div>";
});

html+="<div class='nav'>";
if(current>0) html+="<button onclick='prevQuestion()'>← 上一题</button>";
if(current<questions.length-1) html+="<button onclick='nextQuestion()'>下一题 →</button>";
html+="</div>";

box.innerHTML=html;
}

function selectAnswer(i){
answers[current]=i;
save();
show();
}

function nextQuestion(){
if(answers[current]===null){
alert("请选择一个选项");
return;
}

if(current >= questions.length-1){
calculateAndGo();
return;
}

current++;
save();
show();
}

function prevQuestion(){
current--;
save();
show();
}

function calculateAndGo(){

scores = {E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};

questions.forEach((q,i)=>{
let type=q.w[answers[i]];
if(type && scores[type]!==undefined){
scores[type]+=1;
}
});

let result=
(scores.E>=scores.I?"E":"I")+
(scores.S>=scores.N?"S":"N")+
(scores.T>=scores.F?"T":"F")+
(scores.J>=scores.P?"J":"P");

localStorage.setItem("resultType",result);

localStorage.removeItem("current");
localStorage.removeItem("answers");

setTimeout(function(){
window.location.href="result.html";
},200);

}

document.addEventListener("DOMContentLoaded",function(){
if(typeof questions==="undefined"){
console.error("questions 未定义");
return;
}
show();
});

