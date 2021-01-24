import React, { useEffect, useState, createRef } from "react";
import Calendar from 'react-awesome-calendar';
import AlertToast from "../../components/AlertToast";
import DateDialog from "../../components/DateDialog";
import Header from "../../components/Header";
import SwitchMode from "../../components/SwitchMode";
import eventFire from "../../utils/eventFire";
import getColorDate from "../../utils/getColorDate";

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

    useEffect(() => {
        document.getElementsByClassName("modeButton")[2].style.visibility = "hidden"
    }, [])

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

    const handleOpenModal = () => {
        if (mode === "add") {
            eventFire(document.getElementsByClassName('modeButton')[1], 'click');
            setOpen(true);
        }
    };

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

    const closeToast = () => {
        setOpenToast(false)
    }

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
