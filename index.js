var numberOfButtons = document.querySelectorAll("button").length;

function sound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play()
            break;
        case "a":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play()
            break;

        case "s":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play()
            break;
            
            
        case "d":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play()
            break;

        case "j":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play()
            break;
            
            
        case "k":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play()
            break;
            
        case "l":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play()
            break;
    
        default:
            break;
    }
}

function buttonanimation(key){
    var fullkey = "."+key
    var activeButton = document.querySelector(fullkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")},100);
}

//make sound by mouse click
for(var i=0;i<numberOfButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var key = this.innerHTML;
        buttonanimation(key);
        sound(key);
    });
}


//make sound by keyboard 
document.addEventListener("keydown",function(event){
    buttonanimation(event.key);
    sound(event.key);
})