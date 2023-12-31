const forest = new Audio('./src/Floresta.wav')
const rain = new Audio('./src/Chuva.wav')
const coffeShop = new Audio('./src/Cafeteria.wav')
const fire = new Audio('./src/Lareira.wav')

forest.volume = 0.5
rain.volume = 0.5
coffeShop.volume = 0.5
fire.volume = 0.5

forest.loop = true
rain.loop = true
coffeShop.loop = true
fire.loop = true

const stopAll = () => {
    stopSound(forest)
    stopSound(rain)
    stopSound(coffeShop)
    stopSound(fire)
    
    }
    function playSound(soundType) {
    soundType.play()
}

function stopSound(soundType) {
    soundType.pause()
}


export {
    forest,
    rain,
    coffeShop,
    fire,
    playSound,
    stopSound,
    stopAll
}

