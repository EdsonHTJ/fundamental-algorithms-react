import { useState } from "react"
import count from "../../algorithms/count"
import styles from './count.module.css'
function Count() {
    const [result, setResult] = useState(null)
    const [values, setResultValues] = useState(null)
    const [cut, setResultCut] = useState(null)


    function resultChangeValues(target) {
        var parsed = target.value.split(' ').map(function(item) {
            return parseInt(item, 10);
        });
        setResultValues(parsed)
        updateResult(parsed, cut)
    }

    function resultChangeCut(target) {
        setResultCut(Number(target.value))
        updateResult(values, Number(target.value))

    }

    function updateResult(values, cut) { 
        const res = count(values, cut)
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
            <h1 className={styles.head}>Insira os valores para realizar a contagem</h1>
            <h1 className={styles.desc}>a primeira entrada é o numero de corte</h1>
            <h1 className={styles.desc}>a segunda entrada são os valores separados por espaços ex: 1 2 3 4</h1>

            </div>
            <form>
            <input type="number" onChange={({target})=> resultChangeCut(target)} name="cut" id="nme" required autoComplete="off" />
            <input onChange={({target})=> resultChangeValues(target)} name="values" id="nme" required autoComplete="off" />
            </form>
            {getResultText(result)}
        </div>
    )
}

export default Count