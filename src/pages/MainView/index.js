import React, { useEffect, useState, createRef } from "react";
import Calendar from 'react-awesome-calendar';
import AlertToast from "../../components/AlertToast";
import DateDialog from "../../components/DateDialog";
import Header from "../../components/Header";
import SwitchMode from "../../components/SwitchMode";
import eventFire from "../../utils/eventFire";
import getColorDate from "../../utils/getColorDate";

/**
 * Main Component of the app.
 * Renders the calendar and its functionalities
 * @component
 * @returns {React.ReactElement}
 */
export default function MainView() {
    const calendar = createRef();
    const [mode, setMode] = useState("add")
    const [modeSwitch, setModeSwitch] = useState({ list: false, add: true });
    const [openModal, setOpen] = useState(false)
    const [hideSwitch, setHideSwitch] = useState(false)
    const [openToast, setOpenToast] = useState(false)
    const [info, setInfo] = useState({})
    const [events, setEvents] = useState([{
        id: 1,
        color: getColorDate("low"),
        from: '2021-01-02T18:00:00+00:00',
        to: '2021-01-02T19:10:00+00:00',
        title: 'This is an event'
    }])

    /**
     * Hides an element of the DOM before the component is mounted  
     */
    useEffect(() => {
        document.getElementsByClassName("modeButton")[2].style.visibility = "hidden"
    }, [])

    /**
     * This function is called when touch a day in the calendar.
     * It opens the modal to add a new date.
     * @param {object} e Info emmited when touch a day in calendar 
     */
    const clickDay = (e) => {
        const { mode, ...dateInfo } = e
        if (mode === "dailyMode") {
            setHideSwitch(true)
            setInfo(dateInfo)
            handleOpenModal()
        }
        if (mode === "monthlyMode") {
            setHideSwitch(false)
        }
    }

    /**
     * Opens the modal. 
     * (Previously it fires automatically 
     * the Month button at the top of the page
     * to prevent the access to list day agenda)
     */
    const handleOpenModal = () => {
        if (mode === "add") {
            eventFire(document.getElementsByClassName('modeButton')[1], 'click');
            setOpen(true);
        }
    };

    /**
     * Add new event to calendar. Then it throws a toast if
     * there is a new event to add
     * @param {object} newObj Contains the new date info 
     */
    const handleCloseModal = (newObj) => {
        setOpen(false);
        if (newObj) {
            let maxId = Math.max(...events.map(event => event.id))
            setEvents((prev) => {
                let newArray = prev
                newArray.push({ ...newObj, id: maxId + 1 })
                return newArray
            })
            setOpenToast(true)
        }
    };

    /**
     * Fires automatically when autoHides finish or if we close the toast
     */
    const closeToast = () => {
        setOpenToast(false)
    }

    /**
     * Changes the switchmode info and the app mode
     * @param {object} event Contains the event emmited by SwitchMode component
     */
    const handleChangeMode = (event) => {
        setModeSwitch({ ...modeSwitch, [event.target.name]: event.target.checked });
        modeSwitch.list ? setMode("add") : setMode("list")
    };

    return (
        <div style={{ backgroundColor: mode === "add" ? "white" : "#fcfaf5" }}>
            <Calendar
                ref={calendar}
                header={Header}
                events={events}
                onChange={clickDay}
            />
            <DateDialog open={openModal} handleClose={handleCloseModal} dateInfo={info} />
            {
                !hideSwitch && <SwitchMode checked={modeSwitch} setChecked={handleChangeMode} />
            }
            <AlertToast openToast={openToast} closeToast={closeToast} />
        </div>
    )
}