import { useState }  from "react"

function Counter() {
    const [ counter, setCounter ] = useState(0)

    function increase() {
        setCounter(counter + 1)
    }
    function decrease() {
        setCounter(counter - 1)
    }

    return (
        <>
        <h1>{counter}</h1>
        <br />
        <button onClick={ increase }>Increase</button>
        <span>  </span>
        <button onClick={ decrease }>Decrease</button>
        </>
    )
}

export default Counter