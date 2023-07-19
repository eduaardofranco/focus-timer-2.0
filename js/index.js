
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.more')
const buttonRmvMinutes = document.querySelector('.less')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonShop = document.querySelector('.shop')
const buttonFire = document.querySelector('.fire')
const secondsDisplay = document.querySelector('.seconds')
const minutesDisplay = document.querySelector('.minutes')
let minutesStart = minutesDisplay.textContent
let secondsStart = secondsDisplay.textContent
let loopingTimer

const forest = new Audio('./src/Floresta.wav')
const rain = new Audio('./src/Chuva.wav')
const coffeShop = new Audio('./src/Cafeteria.wav')
const fire = new Audio('./src/Lareira.wav')

forest.loop = true
rain.loop = true
coffeShop.loop = true
fire.loop = true

buttonPlay.addEventListener('click', function(e) {
  countdown()
  buttonPlay.setAttribute("disabled" , "")
})
buttonStop.addEventListener('click', function() {
  resetTimer()
  
})
buttonAddMinutes.addEventListener('click', function() {
  addMinutes()
})
buttonRmvMinutes.addEventListener('click', function() {
  removeMinutes()
})
buttonForest.addEventListener('click', function(e) {
  play(forest)
  removeActive(e, forest)
})
buttonRain.addEventListener('click', function(e) {
  play(rain)
  removeActive(e, rain)
})
buttonShop.addEventListener('click', function(e) {
  play(coffeShop)
  removeActive(e, coffeShop)
})
buttonFire.addEventListener('click', function(e) {
  play(fire)
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
  play(soundType)
}

const stopAll = () => {
  stop(forest)
  stop(rain)
  stop(coffeShop)
  stop(fire)

}

function play(soundType) {
        soundType.play()
}

function stop(soundType) {
        soundType.pause()
}
const updateDisplay = (minutes, seconds) => {
        minutesDisplay.textContent = String(minutes).padStart(2,'0')
        secondsDisplay.textContent = String(seconds).padStart(2,'0')
}

const addMinutes = () => {
        minutes = Number(minutes) + 5
        updateDisplay(minutes, seconds)

}
const removeMinutes = () => {

        if(minutes >= 5) {
                minutes = minutes - 5
                updateDisplay(minutes, seconds)
        }

}

const resetTimer = () => {
        updateDisplay(minutesStart, secondsStart)
        minutes = minutesStart
        seconds = secondsStart
        buttonPlay.removeAttribute("disabled", "")
        clearTimeout(loopingTimer)
}

let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

const countdown =() => {
        
        
        loopingTimer = setTimeout(function() {

    const isFinished = minutes <= 0 && seconds <= 0


    if( seconds <= 0 ) {
      seconds = 60
      --minutes
    }
    if(isFinished) {
      resetTimer()
      return
    }

    --seconds
    
    updateDisplay(minutes, seconds)

    countdown()

  },1000)
}