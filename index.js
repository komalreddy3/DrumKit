


for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
        var s=this.innerHTML;
        buttonAnimation(s);
        var audio;
        if(s=="w"){
           audio= new Audio("sounds/crash.mp3");
           audio.play();
        }
        else if(s=="a"){
            audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
         }
         else if(s=="s"){
            audio= new Audio("sounds/snare.mp3");
            audio.play();
         }
         else if(s=="d"){
            audio= new Audio("sounds/tom-1.mp3");
            audio.play();
         }
         else if(s=="j"){
            audio= new Audio("sounds/tom-2.mp3");
            audio.play();
         }
         else if(s=="k"){
            audio= new Audio("sounds/tom-3.mp3");
            audio.play();
         }
         else if(s=="l"){
            audio= new Audio("sounds/tom-4.mp3");
            audio.play();
         }
    });
}
document.addEventListener("keydown",function(event){
   var audio;
       buttonAnimation(event.key);
        if(event.key=="w"){
           audio= new Audio("sounds/crash.mp3");
           audio.play();
        }
        else if(event.key=="a"){
            audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
         }
         else if(event.key=="s"){
            audio= new Audio("sounds/snare.mp3");
            audio.play();
         }
         else if(event.key=="d"){
            audio= new Audio("sounds/tom-1.mp3");
            audio.play();
         }
         else if(event.key=="j"){
            audio= new Audio("sounds/tom-2.mp3");
            audio.play();
         }
         else if(event.key=="k"){
            audio= new Audio("sounds/tom-3.mp3");
            audio.play();
         }
         else if(event.key=="l"){
            audio= new Audio("sounds/tom-4.mp3");
            audio.play();
         }
});
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    },100);
};

