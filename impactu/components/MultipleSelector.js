import { useState } from 'react';
import Select from "react-select";

const MultipleSelector = ({ dates }) => {

    const [selectedDates, selectedDatesSet] = useState();

    const handleChange = (data) => {
        selectedDatesSet(data)
    }

    return (
        <Select
            id="dataEscolhida"
            name="Data preferencia"
            placeholder="Seleciona as tuas preferências"
            options={dates}
            value={selectedDates}
            onChange={handleChange}
            isMulti />
    )
}

export default MultipleSelector;