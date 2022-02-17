import { useState } from "react"
import styles from './fibonacci.module.css'

function Fibonacci() {
    const [number, setNumber] = useState('')

    return (
        <div classname = {styles.container}>
            Teste
            <input onChange={event => setNumber(event.target.value)} />
        </div>
    )
}

export default Fibonacci