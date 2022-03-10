import { useState } from "react"
import styles from './fibonacci.module.css'
import fibonacci from '../../algorithms/fibonacci'
function Fibonacci() {
    const [result, setResult] = useState(null)

    function resultChange(target) {
        const fib = fibonacci(target.value)
        console.log(fib)
        setResult(fib)
    }
    function getFibText(value) {
        if (value === null) {
            return
        }
        return (
            <div>
                {<h1 className={styles.result}>{value}</h1>}
            </div>
        )
    }
    return (
        <div className = {styles.container}>
            <h1 className={styles.head}>Por favor insira o numero do indice de fibonacci</h1>
            <form>
            <input type="number" onChange={({target})=> resultChange(target)} name="number" className="question" id="nme" required autoComplete="off" />
            </form>
            {getFibText(result)}
        </div>
    )
}

export default Fibonacci