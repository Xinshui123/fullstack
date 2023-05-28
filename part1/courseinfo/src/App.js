const Header = (props) => {
  const course = props.course
  return (
    <div>
      <p>
        {course}
      </p>
    </div>
  )
}

const Part = (props) => {
  const name = props.name
  const num = props.num

  return (
    <div>
      <p>
        {name} {num}
      </p>
    </div>
  )
}

const Content = (props) => {

  const name1 = props.name1
  const name2 = props.name2
  const name3 = props.name3
  const num1 = props.num1
  const num2 = props.num2
  const num3 = props.num3

  return (
    <div>
      <Part name={name1} num={num1} />
      <Part name={name2} num={num2} />
      <Part name={name3} num={num3} />
    </div>
  )
}

const Total = (props) => {
  const total = props.total
  return (
    <div>
      <p>
        Total is {total}
      </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        name1={part1}
        name2={part2}
        name3={part3}
        num1={exercises1}
        num2={exercises2}
        num3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}
export default App