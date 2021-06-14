const changingText = document.querySelector(".changing-text").children;

textLen = changingText.length;

let index = 0;

const textInTimer = 3000, textOutTimer = 2700;

function changeText(){
   
    for(let i = 0; i < textLen; i++){
        changingText[i].classList.remove("text-in", "text-out");
    }
    changingText[index].classList.add("text-in");

    setTimeout(function(){
        changingText[index].classList.add("text-out");
    }, textOutTimer);

    setTimeout(function(){
        if(index == textLen - 1){
        index = 0;
        }
        else{
            index++;
        }

        changeText();

    }, textInTimer);
    
}

window.onload = changeText();
