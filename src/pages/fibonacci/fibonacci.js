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

        if (typeof value === 'string' || value instanceof String) {
            return (
                <div>
                    {<h1 className={styles.desc}>{"Erro: " + value}</h1>}
                </div>
            )
        }

        value = value.join(" ")

        return (
            <div>
                {<h1 className={styles.result}>{value}</h1>}
            </div>
        )
    }
    return (
        <div className = {styles.container}>
            <div>
            <h1 className={styles.head}>Insira o numero do indice de fibonacci</h1>
            <h1 className={styles.desc}>o numero precisa ser maior do que zero</h1>
            </div>
            <form>
            <input type="number" onChange={({target})=> resultChange(target)} name="number" className="question" id="nme" required autoComplete="off" />
            </form>
            {getFibText(result)}
        </div>
    )
}

export default Fibonacci