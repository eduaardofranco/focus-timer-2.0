
import { Timer } from './timer.js'
import {
        forest,
        rain,
        coffeShop,
        fire,
        playSound,
        stopSound,
        stopAll
        } from './sounds.js'
import {
  minutesStart,
  secondsStart,
  buttonPlay,
  buttonStop,
  buttonAddMinutes,
  buttonRmvMinutes,
  buttonFire,
  buttonForest,
  buttonRain,
  buttonShop,
  minutesDisplay,
  secondsDisplay
  
  } 
  from './elements.js'

buttonPlay.addEventListener('click', function(e) {
  buttonPlay.setAttribute("disabled" , "")
  timer.countdown()
})
buttonStop.addEventListener('click', function() {
  timer.reset()
  
})
buttonAddMinutes.addEventListener('click', function() {
  timer.addMinutes()
})
buttonRmvMinutes.addEventListener('click', function() {
  timer.removeMinutes()
})
buttonForest.addEventListener('click', function(e) {
  playSound(forest)
  removeActive(e, forest)
})
buttonRain.addEventListener('click', function(e) {
  playSound(rain)
  removeActive(e, rain)
})
buttonShop.addEventListener('click', function(e) {
  playSound(coffeShop)
  removeActive(e, coffeShop)
})
buttonFire.addEventListener('click', function(e) {
  playSound(fire)
  removeActive(e, fire)
})

const removeActive = (event, soundType) => {
  
  const isActive = event.target.classList.contains("active")
  
  if(isActive) {
    event.target.classList.remove("active")
    stopAll()
    return
  }

  stopAll()
  buttonForest.classList.remove('active')
  buttonRain.classList.remove('active')
  buttonShop.classList.remove('active')
  buttonFire.classList.remove('active')
  event.target.classList.add('active')
  playSound(soundType)
}

const updateDisplay = (minutes, seconds) => {
    minutesDisplay.textContent = String(minutes).padStart(2,'0')
    secondsDisplay.textContent = String(seconds).padStart(2,'0')
}

const timer = Timer({
  updateDisplay,
  minutesStart,
  secondsStart,
  buttonPlay
})