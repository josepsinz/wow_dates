export default function getColorDate(level) {
    switch (level) {
        case "low":
            return "green"
        case "medium":
            return "orange"
        case "high":
            return "red"
        default:
            return "lightblue"
    }
}