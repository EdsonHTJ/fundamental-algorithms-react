import { useState } from "react"
import mdc from "../../algorithms/mdc"
import styles from './mdc.module.css'
function Mdc() {
    const [result, setResult] = useState(null)
    const [mdc1, setResultMdc1] = useState(null)
    const [mdc2, setResultMdc2] = useState(null)


    function resultChangeMdc1(target) {
        setResultMdc1(Number(target.value))
        updateMdc(target.value, mdc2)
    }

    function resultChangeMdc2(target) {
        setResultMdc2(Number(target.value))
        updateMdc(mdc1, target.value)

    }

    function updateMdc(value1, value2) { 
        if ((value1 == null) || (value2 == null)) {
            return
        }

        value1 = Number(value1)
        value2 = Number(value2)

        if ((value1 === 0) || (value2 === 0)) {
            return
        }
        
        const res = mdc(value1, value2)
        setResult(res)

    }


    function getResultText(value) {
        
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
            </div>
        )
    }
    return (
        <div className = {styles.container}>
            <div>
            <h1 className={styles.head}>Insira dois numeros para descobrir o mdc</h1>
            <h1 className={styles.desc}>ambos os numeros precisam ser positivos</h1>
            </div>
            <form>
            <input type="number" onChange={({target})=> resultChangeMdc1(target)} name="number" className="question" id="nme" required autoComplete="off" />
            <input type="number" onChange={({target})=> resultChangeMdc2(target)} name="number2" className="question" id="nme" required autoComplete="off" />
            </form>
            {getResultText(result)}
        </div>
    )
}

export default Mdc