import { useState } from "react"
import sum from "../../algorithms/sum"
import styles from './sum.module.css'
function Sum() {
    const [result, setResult] = useState(null)

    function resultChange(target) {
        let values = target.value.split(",").map(item => { return Number(item)}).filter(item => !isNaN(item))
        let res = sum(values)
        console.log(res)
        setResult(res)
    }
    function getPrimeText(value) {
        if (typeof value != "boolean") {
            return (
                <div>
                    {<h1 className={styles.result}>{value}</h1>}
                </div>)
        }

        value = Boolean(value)
        return (
            <div>
                {<h1 className={styles.result}>{value?"é primo":"não é primo"}</h1>}
            </div>
        )
    }
    return (
        <div className = {styles.container}>
            <h1 className={styles.head}>Por favor insira uma lista de numeros para serem somados</h1>
            <form>
            <input onChange={({target})=> resultChange(target)} name="number" class="question" id="nme" required autocomplete="off" />
            </form>
            {getPrimeText(result)}
        </div>
    )
}

export default Sum