import { useState } from 'react'

const Buttom = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = (props) => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [maxIndex, setMaxIndex] = useState(0);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const RandomSelect = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  // var ary = new Uint8Array(anecdotes.length)

  const Vote = (props) => {
    // setVote(votes[selected] += 1)
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVote(newVotes);
    const maxIndex = newVotes.indexOf(Math.max(...newVotes));
    setMaxIndex(maxIndex)
    // ary[selected] += 1
    // console.log(ary[selected])
    // setVote(vote + 1)
    console.log(newVotes)
    console.log(maxIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <Buttom handleClick={Vote} text='vote' />
      <Buttom handleClick={RandomSelect} text='next anecdote' />
      <h1>Anecdote with most votes</h1>
      {anecdotes[maxIndex]}
    </div>
  )
}

export default App