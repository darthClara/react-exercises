import { useRef, useEffect } from "react"

export default function CarDetails({initialData}) {
    
    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef()

    useEffect(() => {
        modelRef.current.value = ""
        yearRef.current.value = ""
        colorRef.current.value = ""
    }, [initialData])

    return (
        <div>
            <form>
                <input ref={modelRef} type="text" placeholder={initialData.model}/>
                <input ref={yearRef} type="text" placeholder={initialData.year}/>
                <input ref={colorRef} type="text" placeholder={initialData.color}/>
            </form>
        </div>
    )
}