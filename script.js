countdown = 10;

 timerel = document.getElementById("timer")
 inputel = document.getElementById("inputtext")
 enterel = document.getElementById("submitbtn")
 images = document.getElementById("image")
 alertel = document.getElementById("alerttext")

spelling ="diffuse";

function blast(){
    images.src ="blast.png"
 }

function time(){
    if(countdown>0){
        countdown--;
        timerel.textContent = countdown;
    }else{
        clearTimeout(timeInterval);
        blast();
    }
}


function checksp(){
    const userSpelling = inputel.value;
    if(userSpelling === spelling){
        clearInterval(timeInterval);
        alertel.textContent = "Correct Spelling"
        alertel.style.color ="green";

    }else{
        alertel.textContent = "Wrong Spelling, Boom"
        alertel.style.color ="red";
        blast();
    }
}
enterel.addEventListener('click',checksp);

timeInterval =setInterval(time,1000)