import { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
function CalendarComponent(){
    const [dateA, setDateA] = useState(new Date());
    // const [dateB, setDateB] = useState(new Date());
    console.log("This is dateA", dateA)
    // console.log("This is dateB", dateB)
    return (
        <>
        <h1>Hi Maica</h1>
        <Calendar onChange={setDateA} value={dateA}/>
        {/* <Calendar onChange={setDateB} value={dateB}/> */}


        </>
    )
}
export default CalendarComponent;