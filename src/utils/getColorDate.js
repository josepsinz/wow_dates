/**
 * Returns the css color depending on date priority 
 * @param {string} level Priority
 * @returns {strign} The resulting css color  
 */
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