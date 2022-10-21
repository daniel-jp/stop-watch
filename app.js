//Variables for buttons

const startBtn = document.querySelector('#startBtn')
const resetBtn = document.querySelector('#resetBtn')

// variabes for Times

let seconds = 0
let minuts = 0
let hours = 0

// Variables for leading zero
let leadingSeconds = 0
let leadingMinuts = 0
let leadingHours = 0

//Variables for set interval & timerStatus
let timerInterval = null
let timerStatus = 'stopped'

//Stop-Watch Function

const stopWatch = () => {
        seconds++
        if (seconds / 60 === 1) {
            seconds = 0
            minuts++

            if (minuts / 60 === 1) {
                minuts = 0
                hours++
            }
        }

        if (seconds < 10) {
            leadingSeconds = '0' + seconds.toString()
        } else {
            leadingSeconds = seconds
        }

        if (minuts < 10) {
            leadingMinuts = '0' + minuts.toString()
        } else {
            leadingMinuts = minuts
        }

        if (hours < 10) {
            leadingHours = '0' + hours.toString()
        } else {
            leadingHours = hours
        }

        let displayTimer = (document.getElementById('timer').innerText =
            hours + ':' + minuts + ':' + seconds)
    }
    //

startBtn.addEventListener('click', () => {
    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000)
        document.getElementById('startBtn').innerHTML = `
    <i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus = 'started'
    } else {
        window.clearInterval(timerInterval)
        document.getElementById(
            'startBtn'
        ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`

        timerStatus = 'stopped'
    }
})

resetBtn.addEventListener('click', () => {
    window.clearInterval(timerInterval)
    seconds = 0
    minuts = 0
    hours = 0

    document.getElementById('timer').innerText = '00:00:00'
})