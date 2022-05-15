let hr=0;
let min=0;
let sec=0;
let count=0;

let timer = false;

function start(){
    timer= true;
    stopwatch();
}
function stop(){
    timer = false;
}
function reset(){
    timer = false;
    count=0;
    sec=0;
    min=0;
    hr=0;
    document.getElementById('count').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('hr').innerHTML = "00";
}

function stopwatch(){
    if(timer==true){
        count++;
        if(count==100){
            sec++;
            count=0;
        }
        if(sec==60){
            min++;
            sec=0;
            count=0;
        }
        if(min==60){
            hr++;
            min=0;
            sec=0;
        }
        let countStr=count;
        let secStr= sec;
        let minStr=min;
        let hrStr=hr;
        
        if(count<10)
            countStr = "0" + count;
        if(sec<10)
            secStr = "0" + sec;
        if(min<10)
            minStr = "0" + min;
        if(hr<10)
            hrStr = "0" + hr;
        document.getElementById('count').innerHTML = countStr;
        document.getElementById('sec').innerHTML = secStr;
        document.getElementById('min').innerHTML = minStr;
        document.getElementById('hr').innerHTML = hrStr;


        setTimeout("stopwatch()",10);
    }
}