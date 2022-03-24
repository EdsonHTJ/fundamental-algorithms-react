import { useState } from "react"
import sum from "../../algorithms/sum"
import styles from './sum.module.css'
function Sum() {
    const [result, setResult] = useState(null)

    function resultChange(target) {
        let values = target.value.split(" ").map(item => { return Number(item)}).filter(item => !isNaN(item))
        let res = sum(values)
        console.log(res)
        setResult(res)
    }
    function getText(value) {
        if (typeof value === 'string' || value instanceof String) {
            return (
                <div>
                    {<h1 className={styles.desc}>{"Erro: " + value}</h1>}
                </div>
            )
        }

        return (
        <div>
            {<h1 className={styles.result}>{value}</h1>}
        </div>)
    }
    return (
        <div className = {styles.container}>
            <div>
            <h1 className={styles.head}>Insira uma lista de numeros para serem somados</h1>
            <p className={styles.desc}>as entradas devem ser separadas por espaço ex: 1 5 6 7</p>
            </div>
            <form>
            <input onChange={({target})=> resultChange(target)} name="number" className="question" id="nme" required autoComplete="off" />
            </form>
            {getText(result)}
        </div>
    )
}

export default Sum