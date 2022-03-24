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
        if (typeof value == "boolean") {
            return (
                <div>
                    {<h1 className={styles.result}>{value? "é primo":"não é primo"}</h1>}
                </div>)
            // variable is a boolean
        }else {
            return (
                <div>
                    {<h1 className={styles.result}>{value}</h1>}
                </div>)
        }
    }
    return (
        <div className = {styles.container}>
            <div>
            <h1 className={styles.head}>Insira o numero que deseja checar se é primo</h1>
            <h1 className={styles.desc}>o numero precisa ser maior do que zero</h1>
            </div>
            <form>
            <input type="number" onChange={({target})=> resultChange(target)} name="number" className="question" id="nme" required autoComplete="off" />
            </form>
            {getText(result)}
        </div>
    )
}

export default Prime