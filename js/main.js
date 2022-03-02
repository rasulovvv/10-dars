var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elSpan = document.querySelector(".span");
var elError = document.querySelector(".span__error");
toq = []
juft = [ ]
elForm.addEventListener("submit" ,  function(evt){
    evt.preventDefault()
        elInputVal = elInput.value
         if(elInputVal <= 0 || isNaN(elInputVal) ){
            elSpan.textContent= "0 dan katta raqam kiriting";
        } 
       else if( elInputVal % 2 == 0  ){ elSpan.textContent= elInputVal  + " - juft son"
       juft.push(elInputVal)
       console.log( juft )
    }
        else    {
           elSpan.textContent= elInputVal +  " - toq son"
           toq.push(elInputVal)
           console.log(toq);
       }
    
} );
