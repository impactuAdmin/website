import { useState } from 'react';

const MultipleSelector = ( { dates } ) => {

    const [selectedDates, selectedDatesSet] = useState([]);

    const handleChange = (e) => {
        const clickedDate = e.target.value

        if(selectedDates.includes(clickedDate)) { // if already includes, delete
            selectedDatesSet(selectedDates.filter(date => date !== clickedDate))
        }
        else { // otherwise, add
            selectedDatesSet([...selectedDates, clickedDate]) 
        }
    }

    return (
        <select id="dataEscolhida" name="Data preferencia" multiple size="4" value={selectedDates} onChange={(e) => handleChange(e)} required>
            {dates.map((date) =>
                <option key={date.id} id={date.id} value={date.data} selected={selectedDates.includes(date)}>{date.data}</option>
            )}
        </select>
    )
}

export default MultipleSelector;