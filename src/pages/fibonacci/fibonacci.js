import { useState } from "react"
import styles from './fibonacci.module.css'

function Fibonacci() {
    const [number, setNumber] = useState('')

    return (
        <div className = {styles.container}>
            <h1>Por favor insira o numero do indice de fibonacci</h1>
            <form>
            <input type="text" name="name" class="question" id="nme" required autocomplete="off" />
            </form>
        </div>
    )
}

export default Fibonacci