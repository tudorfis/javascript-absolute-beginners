
function goToBed({ alarmHour, amOrPm }, { setAnAlarm }) {
    console.log( '... go to bed')

    if ( setAnAlarm )
        setAlarm( alarmHour, amOrPm )
}

function wakeUp() {
    console.log( '... wake up')
}

function goToWork() {
    console.log( '...going to work' )
}

function setAlarm( hour, amOrPm = 'am' ) {
    console.log( '... setting alarm ')
    console.log( '... alarm was set at hour ' + hour + amOrPm)
}



const alarmHour = 4
const amOrPm = 'am'

const alarmSettings = {
    alarmHour,
    amOrPm
}

const bedSettings = {
    setAnAlarm: true
}

goToWork()
goToBed( alarmSettings, bedSettings )
wakeUp()