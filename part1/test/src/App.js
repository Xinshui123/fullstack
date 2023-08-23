import { useState } from 'react'

const History = (props) => {
  if (props.allCicks.length === 0) {
    return (
      <div>
        the app is used by the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {
        props.allCicks.join(' ')
      }
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  //const [counter, setCounter] = useState(0)
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  // const increaseByOne = () => setCounter(counter + 1)
  // const setZero = () => setCounter(0)

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  // const [clicks, setClicks] = useState({
  //   left: 0, right: 0
  // })
  const [allCicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allCicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allCicks.concat('R'))
    setRight(right + 1)
  }

  // console.log('rendering...', counter)

  return (
    <div>
      {/* <div>
        <div>{counter}</div>
        <button onClick={increaseByOne}>
          plus
        </button>
        <button onClick={setZero}>
          zero
        </button>
      </div> */}
      <div>
        <div>{left}</div>
        <Button handleClick={handleLeftClick} text='left'></Button>
        <div>{right}</div>
        <Button handleClick={handleRightClick} text='rigtht'></Button>
        <History allCicks={allCicks}></History>
      </div>
    </div>
  )
}



export default App