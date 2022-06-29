
setInterval(showTime, 999);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    if (hour<10) {
       hour = "0"+hour;   
    } 
    if (min<10){
        min = "0"+ min;
    }
    if (sec<10){
        sec = "0"+ sec;
    }
    let day = weekday[time.getDay()]
    document.getElementById("day")
            .innerHTML = "Today it is " +day;    
    document.getElementById("hours")
            .innerHTML = hour+":";
    document.getElementById("minutes")
            .innerHTML = min+":";
    document.getElementById("seconds")
            .innerHTML = sec;        
}
showTime();


