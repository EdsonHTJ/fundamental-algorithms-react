import { useState } from "react"
import quickSort from "../../algorithms/quicksort"
import styles from './quicksort.module.css'
function Quicksort() {
    const [result, setResult] = useState(null)

    function resultChange(target) {
        let values = target.value.split(" ").map(item => { return Number(item)}).filter(item => !isNaN(item))
        let res = quickSort(values, 0, values.length - 1)
        console.log(res)
        res = res.map(item => { 
            return item + " "
        })
        setResult(res)
    }
    function getText(value) {
            return (
                <div>
                    {<h1 className={styles.result}>{value}</h1>}
                </div>
        )
    }
    return (
        <div className = {styles.container}>
            <div>
            <h1 className={styles.head}>Insira uma lista de numeros para serem ordenados </h1>
            <h1 className={styles.desc}>os numeros precisam ser separados por espaços ex: 1 2 3 4 </h1>
            </div>
            <form>
            <input onChange={({target})=> resultChange(target)} name="number" className="question" id="nme" required autoComplete="off" />
            </form>
            {getText(result)}
        </div>
    )
}

export default Quicksort