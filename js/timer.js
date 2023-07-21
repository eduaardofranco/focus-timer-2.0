import {
        minutesStart,
        secondsStart,
        minutes,
        seconds,
        buttonPlay,
        minutesDisplay,
        secondsDisplay

        } 
        from './elements.js'
export function Timer({
    updateDisplay,
    minutesStart,
    secondsStart,
    buttonPlay
    
}) {
    let loopingTimer
    let newMinutes = minutes
    let newSeconds = seconds

    const reset = () => {
        updateDisplay(minutesStart, secondsStart)
        newMinutes = Number(minutesStart)
        newSeconds = Number(secondsStart)
        buttonPlay.removeAttribute("disabled", "")
        clearTimeout(loopingTimer)
    }
    function addMinutes() {
        newMinutes = Number(newMinutes + 5)
        updateDisplay(newMinutes, newSeconds)

    }
    const removeMinutes = () => {

        if(newMinutes >= 5) {
        newMinutes = newMinutes - 5
        updateDisplay(newMinutes, newSeconds)
        }

    }

    const countdown =() => {
        
        loopingTimer = setTimeout(function() {

            const isFinished = newMinutes <= 0 && newSeconds <= 0
    
            if( newSeconds <= 0 ) {
            newSeconds = 60
            --newMinutes
            }
            if(isFinished) {
            resetTimer()
            return
            }
    
            --newSeconds
    
            updateDisplay(newMinutes, newSeconds)
    
            countdown()
    
        },1000)
    }
    return {
        countdown,
        reset,
        addMinutes,
        removeMinutes
    }

}