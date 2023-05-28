const Header = (props) => {
  console.log(props)
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

  const parts = props.parts

  return (
    <div>
      <Part name={parts[0].name} num={parts[0].exercises} />
      <Part name={parts[1].name} num={parts[1].exercises} />
      <Part name={parts[2].name} num={parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {

  //const total = props.total
  // function sum(arry) {
  //   let t = 0
  //   arry.forEach(
  //     (value) => {
  //       t += value.exercises;
  //     }
  //   )
  //   return t
  // }

  return (
    <div>
      <p>
        Total is {(total) => {
          let t = 0
          total.forEach(
            (value) => {
              t += value.exercises;
            }
          )
          return t
        }}
      </p>
    </div>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={course.parts} />
    </div>
  )
}
export default App