/**
 * Fires a event of the DOM
 * @param {jQuery} el Element of the dom 
 * @param {string} etype Action to be display 
 */
export default function eventFire(el, etype) {
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}