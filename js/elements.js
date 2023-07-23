
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
const screenModeButton = document.querySelector('.color-mode')
const forestVolSlider = document.getElementById("forest-volume-slider")
const rainVolSlider = document.getElementById("rain-volume-slider")
const shopVolSlider = document.getElementById("shop-volume-slider")
const fireVolSlider = document.getElementById("fire-volume-slider")
let minutesStart = minutesDisplay.textContent
let secondsStart = secondsDisplay.textContent
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

export {
    buttonPlay,
    buttonStop,
    buttonAddMinutes,
    buttonRmvMinutes,
    buttonForest,
    buttonRain,
    buttonShop,
    buttonFire,
    secondsDisplay,
    minutesDisplay,
    minutesStart,
    secondsStart,
    minutes,
    seconds,
    screenModeButton,
    forestVolSlider,
    rainVolSlider,
    shopVolSlider,
    fireVolSlider
}
