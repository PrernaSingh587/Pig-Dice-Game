/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let a=0;
let global=[0,0];
let r=0;


let pr=+prompt("Max-Score",100);




document.getElementById("score-0").textContent=0;
document.getElementById("score-1").textContent=0;
document.querySelector(".dice").style.display="none";

document.getElementsByClassName("btn-roll")[0].addEventListener("click",function()  
{
let num=Math.floor(Math.random()*6)+1;
   document.querySelector(".dice").style.display="block";
    document.querySelector(".dice").src="dice-" + num +".png";
    if(num!==1)
        {
            r=r+num;
            document.getElementById("current-"+a).textContent=r;
            
        }
else 
    {
        nextPlayer();
        
    }




});
                                                                
                                                                
       function nextPlayer()
{ r=0;
 document.querySelector(".dice").style.display="none";
 document.getElementById("current-"+a).textContent=r;
 document.querySelector(".player-"+a+"-panel").classList.remove("active");
    if(a===1)
        a=0;
    else a=1;
 document.querySelector(".player-"+a+"-panel").classList.add("active");
    
}

document.getElementsByClassName("btn-hold")[0].addEventListener("click",function ()
                                                               {
                                                                 global[a]=global[a]+r;
                                document.getElementById("score-"+a).textContent=global[a];
                                                                
    if(global[a]>=pr)
    {document.querySelector(".player-"+a+"-panel").classList.add("winner");
     document.querySelector(".player-"+a+"-panel").classList.toggle("active");
     document.querySelector("#name-"+a).textContent="WINNER";
     document.querySelector(".btn-roll").disabled="disabled";
          document.querySelector(".btn-hold").disabled="disabled";
     document.querySelector("#current-0").textContent=0;
     document.querySelector("#current-1").textContent=0;
    } else 
     nextPlayer(); });

    document.querySelector(".btn-new").onclick= newy;
       

function newy()
{
    
     document.querySelector(".btn-roll").disabled=false;
          document.querySelector(".btn-hold").disabled=false;
    document.querySelector(".player-"+a+"-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.add("active");
    let d=a;
    a=a+1;
     document.querySelector("#name-"+d).innerHTML="Player "+a;
    document.getElementById("score-0").textContent=0;
     document.getElementById("score-1").textContent=0;
    a=0;
    r=0;
    
}

     

        
        
        
        
        
        
        
        
        
        
        
    



