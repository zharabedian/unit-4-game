
var wins=0;
var losses=0;
var targetNum=0;
var score=0;
var firstnum=0;
var secondnum=0;
var thirdnum=0;
var fourthnum=0;



    function reset(){
        
        firstnum=Math.floor(Math.random() * 5 + 1);
        secondnum=Math.floor(Math.random() * 5 + 1);
        thirdnum=Math.floor(Math.random() * 5 + 1);
        fourthnum=Math.floor(Math.random() * 5 + 1);
        
        if (secondnum===firstnum){
            while (secondnum===firstnum){
                secondnum=Math.floor(Math.random() * 6 + 1);  
                }
        } if (thirdnum==firstnum||secondnum==thirdnum){
            while (thirdnum==firstnum||secondnum==thirdnum){
                thirdnum=Math.floor(Math.random() * 6 + 1);  
                }
        } if (fourthnum===firstnum||secondnum===fourthnum||fourthnum===thirdnum){
            while(fourthnum===firstnum||secondnum===fourthnum||fourthnum===thirdnum){
                fourthnum=Math.floor(Math.random() * 6 + 1); 
                }
        }

        targetNum=Math.floor(Math.random() * 70 + 1);
        score=0;
        $("#targetscore").text(targetNum);
        $("#scoreboard").text(score);
        $("#scoreboard2").text("Wins : "+wins+" | Losses: "+losses);
    }
    reset();

    $("#firstbtn").click(function(){
        $(this).finish();
        score+=firstnum;
        $("#scoreboard").text(score);
       
    });

    $("#secondbtn").click(function(){
        $(this).finish();
        score+=secondnum;
        $("#scoreboard").text(score);
       
    });

    $("#thirdbtn").click(function(){
        $(this).finish();
        score+=thirdnum;
        $("#scoreboard").text(score);
       
    });

    $("#fourthbtn").click(function(){
        $(this).finish();
        score+=fourthnum;
        $("#scoreboard").text(score);      
       
    });

    $(".gem").click(function(){
        if (score===targetNum){
            wins ++;
            alert("You win....Because you're the hero Gotham deserves, but not the one it needs right now.");
            reset();

        }  else if (score>targetNum){
            losses++;
            alert("This is what happens when an unstoppable force meets an immovable object. You lose!");
            reset();

        }  
    });
        
   

