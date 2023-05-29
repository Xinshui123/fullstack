import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  const increaseByOne = () => setCounter(counter + 1)
  const setZero = () => setCounter(0)

  console.log('rendering...', counter)
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setZero}>
        zero
      </button>
    </div>

  )
}



export default App