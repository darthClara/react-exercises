import React, {useState} from "react";

export default function useCounter(valoreIniziale = 0) {
    const [contatore, setContatore] = useState(valoreIniziale)

    function gestisciIncrementa() {
        setContatore((num) => num + 1) 
    }

    function gestisciDecrementa() {
        setContatore((num) => num - 1) 
    }

    function gestisciReset() {
        setContatore((num) => num = valoreIniziale)
    }

    return {
        contatore: contatore,
        incrementa: gestisciIncrementa,
        decrementa: gestisciDecrementa,
        reset: gestisciReset
    }
}