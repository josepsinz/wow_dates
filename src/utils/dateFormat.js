export default function dateFormat(dateInfo, time) {
    let year = dateInfo.year
    let month = dateInfo.month > 9 ? dateInfo.month + 1 : "0" + (dateInfo.month + 1)
    let day = dateInfo.day > 9 ? dateInfo.day : "0" + dateInfo.day
    let hour = `${time}:00+00:00`

    return `${year}-${month}-${day}T${hour}`
}