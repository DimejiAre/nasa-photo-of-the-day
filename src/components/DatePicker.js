import React from "react";

function DatePicker(props) {
    const { date, setDate } = props;
    return (
        <>
            <label>Date:  </label>
            <input type="date" value={date} required pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:30))|(?:(?:0[13578]|1[02])-31))" id="dateInput" onChange={e => {
                setDate(e.target.value)
            }} />
        </>
    )
}

export default DatePicker;