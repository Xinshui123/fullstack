import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>

  )
}

const StatisticLine = (props) => {

  return <p>{props.text}:{props.value}</p>
}

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  if (total === 0) {
    return <p>No Feedback Given</p>
  }

  return (
    <div>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='total' value={total} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
      {/* <p>neutral:{props.neutral}</p>
      <p>bad:{props.bad}</p>
      <p>all:{props.allCicks}</p>
      <p>average:{props.average}</p>
      <p>positive:{props.positive}</p> */}
    </div>
  )
}

const App = (props) => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // const [allCicks, setAll] = useState(0)
  // const [average, setAverage] = useState(0)
  // const [positive, setPositive] = useState(0)

  const total = good + neutral + bad
  const average = (good * 1 + bad * (-1)) / total
  const positive = ((good / total) * 100).toFixed(1) + '%'

  const handleGood = () => {
    setGood(good + 1)
    // setAll(allCicks + 1)
    // setAverage((good * 1 + bad * (-1)) / allCicks)
    // setPositive(good / allCicks)
  }
  const handelNeutral = () => {
    setNeutral(neutral + 1)
    // setAll(allCicks + 1)
    // setAverage((good * 1 + bad * (-1)) / allCicks)
    // setPositive(good / allCicks)
  }
  const handleBad = () => {
    setBad(bad + 1)
    // setAll(allCicks + 1)
    // setAverage((good * 1 + bad * (-1)) / allCicks)
    // setPositive(good / allCicks)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text='Good'></Button>
      <Button handleClick={handelNeutral} text='Neutral'></Button>
      <Button handleClick={handleBad} text='Bad'></Button>

      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App