import { useState } from "react"
import styles from './primes.module.css'
import prime from "../../algorithms/prime"
function Prime() {
    const [result, setResult] = useState(null)

    function resultChange(target) {
        const isPrime = prime(target.value)
        console.log(isPrime)
        setResult(isPrime)
    }
    function getText(value) {
        return (
            <div>
                {<h1 className={styles.result}>{value}</h1>}
            </div>)
    }
    return (
        <div className = {styles.container}>
            <h1 className={styles.head}>Por favor insira o numero que deseja checar se é primo</h1>
            <form>
            <input type="number" onChange={({target})=> resultChange(target)} name="number" className="question" id="nme" required autoComplete="off" />
            </form>
            {getText(result)}
        </div>
    )
}

export default Prime