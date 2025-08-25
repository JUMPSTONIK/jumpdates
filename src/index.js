function getTimeStamp(){
    return Date.now();
}

function getLongDate(locale = 'es-ES'){
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        minute: 'numeric',
        seconds: 'numeric',
        timeZoneName: 'short'
    }
    return new Date().toLocaleString(locale, options)
}

module.exports = {
    getLongDate,
    getTimeStamp
}