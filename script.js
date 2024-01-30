const counttt = document.querySelector('.count');
let min = document.querySelector('.min');
let hourss = document.querySelector('.hrs');
let btn1 = document.querySelectorAll('button');
let counts = '00';
let minute = '00';
let hours = '00';
let interval;

btn1.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(e.currentTarget.textContent == 'Stop'){
            clearInterval(interval);
        }
        if(e.currentTarget.textContent == 'Start'){
            start();
        }
        if(e.currentTarget.textContent == 'Restart'){
            Restart();
        }
    })
});

function Restart(){
    counts = '00';
    minute = '00';
    hours = '00';
    min.textContent = minute;
    hourss.textContent  = hours;
    counttt.textContent = counts;
    clearInterval(interval);
}

function minuteee(){
    minute++;
    if(minute < 10){
        min.textContent = "0" + minute;
    }
    else{
        min.textContent = minute;
    }
    if(minute >= 60){
        minute = "00"; 
        min.textContent = minute;
        hourrr();
    }
}

function hourrr(){
    hours++;
    if(hours < 10){
        hourss.textContent = "0" + hours;
    }
    else{
        hourss.textContent = hours;
    }
    if(hours >= 24){
        Restart();
    }
    
}

function start(){
    // clearInterval(interval)
   interval = setInterval(() => {
        counts++;
        if(counts < 10){
            counttt.innerHTML = "0" + counts;
        }
        else{
        counttt.textContent = counts;
        }
        if(counts >= 60){
            counts = '00';
            counttt.textContent = counts;
            minuteee();
        }  
   }, 1000);
}






























