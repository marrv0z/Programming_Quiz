var takeQuiz = document.getElementById("take-it");
var secondsLeft = 60;

var options = [
{
    q:"How?",
    answers: {
        a: "as",
        b: "like",
        c: "idk",
        d: "idc"
    },
    actA: "like"  
},
    
{
    q:"What?",
    answers: {
        a: "this",
        b: "that",
        c: "these",
        d: "those"
    },
    actA: "this"  
},

{
    q:"Why?",
    answers: {
        a: "idk",
        b: "because",
        c: "cause",
        d: "what"
    },
    actA: "because"  
},
   
{
    q:"Where?",
    answers: {
        a: "there",
        b: "under",
        c: "here",
        d: "over"
    },
    actA: "here"
},

{
    q:"When?",
    answers: {
        a: "today",
        b: "now",
        c: "then",
        d: "yesterday"
    },
    actA: "then"
}];


takeQuiz.addEventListener("click", function(event){
    setTime();
    promptQ();

});

function setTime() {
    var timeEl = document.createElement("h1");
    var here = document.getElementById("card-header");
    here.append(timeEl);
    var timerInterval = setInterval(function() {
      
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
      }
      else {
         timeEl.textContent = secondsLeft;
         secondsLeft--;
      }
  
    }, 1000); //calls the function every second (one thousand milliseconds)
  }

  
  //var buttons = ["buttonAA", "buttonBB", "buttonCC", "buttonDD"];
  //buttons = document.createElement("BUTTON"); 
  var buttonAA = document.createElement("BUTTON"); 
  var buttonBB = document.createElement("BUTTON"); 
  var buttonCC = document.createElement("BUTTON"); 
  var buttonDD = document.createElement("BUTTON"); 
  var qs = document.createElement("h2");
  var score = 0;

/*
  function clickButton(but, answr){

    for (var i =0;i<4;i++){
        buttons[i] = document.createElement("BUTTON");
        buttons[i].addEventListener("click",function(event){
        if (but.textContent === answr){
          score++;
          
        }
        else{
          secondsLeft = secondsLeft -5;
          
        }  
        return true;
      }); 

        
    }
      
      
  }*/

 var i = 0;
  function promptQ(){
      //setTime();
      var instructions = document.getElementById("quiz-intro");
      var placeHere = document.getElementById("question-space");
      //instructions.style.visibility = "hidden";
      instructions.style.visibility = "hidden";
      takeQuiz.style.visibility = "hidden";
      console.log(options[0].q);

      qs.textContent = options[i].q;
      buttonAA.textContent = options[i].answers.a;
      buttonBB.textContent = options[i].answers.b;
      buttonCC.textContent = options[i].answers.c;
      buttonDD.textContent = options[i].answers.d;

      //var i =0;
      
      //var showQues = false;
      /*
      while (i<options.length){
          if (showQues == false){
            qs.textContent = options[i].q;
            buttonAA.textContent = options[i].answers.a;
            buttonBB.textContent = options[i].answers.b;
            buttonCC.textContent = options[i].answers.c;
            buttonDD.textContent = options[i].answers.d;
            if (clcik)  
            showQues = true;
          }
          else {
           i++;   
          }
          
          
      }*/
      /*
      for( var i = 0; i < options.length;)
          {
            qs.textContent = options[i].q;
            buttonAA.textContent = options[i].answers.a;
            buttonBB.textContent = options[i].answers.b;
            buttonCC.textContent = options[i].answers.c;
            buttonDD.textContent = options[i].answers.d;
            clickButton(buttonAA,options[i].actA);
            clickButton(buttonBB,options[i].actA);
            clickButton(buttonCC,options[i].actA);
            clickButton(buttonDD,options[i].actA);

            if(clickButton())
            {
              i++;
            }
    
      }*/

      placeHere.appendChild(qs);

      var A = document.getElementById("btnA");
      A.appendChild(buttonAA);
      var B = document.getElementById("btnB");
      B.appendChild(buttonBB);
      var C = document.getElementById("btnC");
      C.appendChild(buttonCC);
      var D = document.getElementById("btnD");
      D.appendChild(buttonDD);

      //for (var i = 0; i <options.length; i++){

        // Show the question and 4 choices
        // wait for the click and if the click == the answer
        // increment score and move to the next question

          //var score = 0;
          /*var buttonAA = document.createElement("<button>")
          var buttonBB = document.createElement("<button>")
          var buttonCC = document.createElement("<button>")
          var buttonDD = document.createElement("<button>")
          

          A.addEventListener("click", function(){
                if (buttonAA === options[i].actA){
                    score = score +1;
                }
                else {
                    secondsLeft = secondsLeft - 5;
                }
            });
        
        
         qs.textContent = options[i].q;
         placeHere.appendChild(qs);
        }*/

      
      

      

      /*options[i][1,2,3,4].addEventListener("click", function(event){
            placeHere.removeChild(qs);
        });


      /*for (var i =0; i<options.length; i++){
        qs.textContent = options[i];
        placeHere.appendChild(qs);
        options[i][1,2,3,4].addEventListener("click", function(event){
            placeHere.removeChild(qs);
        });
    }*/
      
  }

  buttonAA.addEventListener("click",function(event){
    changeQ(options[i].answers.a);
  });
  buttonBB.addEventListener("click",function(event){
    changeQ(options[i].answers.b);
  });
  buttonCC.addEventListener("click",function(event){
    changeQ(options[i].answers.c);
  });
  buttonDD.addEventListener("click",function(event){
    changeQ(options[i].answers.d);
  });

  function changeQ(s)
  {
      console.log("help me")
      console.log(score);
      if( s === options[i].actA)
      {
        i++;
        score++;
        if(score == 4)
        {
            endQuiz();
        }
        qs.textContent = options[i].q;
        buttonAA.textContent = options[i].answers.a;
        buttonBB.textContent = options[i].answers.b;
        buttonCC.textContent = options[i].answers.c;
        buttonDD.textContent = options[i].answers.d;
      }
      else{
          secondsLeft = secondsLeft - 5;
      }
    

  }

  function endQuiz()
  {
    qs.textContent = score;
  }