const countdown = ()=>{
 const date = new Date('Aug 16 2021 00:00:00').getTime();
 const now = new Date().getTime();
 const nSeconds = document.getElementById('seconds')
 const nMinutes = document.getElementById('minutes')
 const nHours = document.getElementById('hours')
 const nDays = document.getElementById('days')

 const difference = date - now
 

 let seconds = 1000
 let minutes = seconds * 60
 let hours = minutes * 60
 let days = hours * 24

 let timerDays  = Math.floor(difference / days)
 let timerHours  = Math.floor(difference % days / hours)
  let timerMinutes  = Math.floor(difference % hours / minutes)
 let timerSeconds  = Math.floor(difference % minutes / seconds)


timerSeconds = timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;
timerMinutes = timerMinutes < 10 ? "0" + timerMinutes : timerMinutes;
timerHours = timerHours < 10 ? "0" + timerHours : timerHours;
  
 
 nSeconds.innerHTML = timerSeconds
 nMinutes.innerHTML = timerMinutes
 nHours.innerHTML = timerHours
 nDays.innerHTML = timerDays
 


}
setInterval(countdown, 1000);
