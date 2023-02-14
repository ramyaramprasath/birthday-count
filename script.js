(function(){
    const seconds = 1000,
    minutes = seconds*60,
    hours = minutes *60,
    days = hours *24;
let birthday = "march 31,2023 00:00:00",
countdown = new
Date(birthday).getTime(),
x=setInterval(function(){
    let now = new Date().getTime(),
    distance = countdown - now;
    document.getElementById("days").innerText = Math.floor(distance /(days)),
    document.getElementById("hours").innerText = Math.floor(distance %(days)/(hours)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hours))/ (minutes)),
    document.getElementById("seconds").innerText = Math.floor(distance % (minutes)/seconds)
    if (distance < 0) {
   
        let headline = document.getElementById("headline"),
        countdown = document.getElementById("countdown")
        content=document.getElementById("content");
        headline.innerText="It is your Birthday"
        clearInterval(x);
    }

},0)
}());