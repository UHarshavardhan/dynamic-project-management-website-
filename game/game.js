const choice=document.querySelectorAll(".choices");
const display=document.querySelector("#display");
const user=document.getElementById("userscore");
const computer=document.getElementById("computer");
 let userscore=0;
 let comscore=0;

const coumpter=()=>{
    var choicearray=["paper","scissors","rock"];
 var comchoice =choicearray[ Math.floor(Math.random()*3)];
 console.log(comchoice);
 return comchoice;
}
const draaw=()=>{
    console.log("the match is draw");
    display.innerHTML="the match is draw";
}
const showresult=(userwin)=>{
    if(userwin){
        userscore++;
        display.innerHTML="you win";
        user.innerHTML=userscore;
    }
    else{
        comscore++;
        display.innerHTML="you loose";
        console.log("you lose");
        computer.innerHTML=comscore;
    }
}

const playgame=(userchoice)=>{
 const comoption = coumpter();
 if(userchoice===comoption){
    draaw();
 }
  else{
    let userwin=true;
    if(userchoice==="paper"){
        userwin=comoption==="rock"? false:true;
    }
    else if(userchoice==="rock"){

        userwin=comoption==="paper"? false : true;
    }
    else{
        userwin=comoption==="rock"?false:true;
    }
    showresult(userwin);
  }





}

choice.forEach((choices)=>{
    choices.addEventListener("click",()=>{
      const choiceID = choices.getAttribute("id");
      console.log(choiceID);
      playgame(choiceID);
     
    });

});