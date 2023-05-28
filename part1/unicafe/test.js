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

console.log(course.parts[1].exercises)

// const val = (i) => {
//     for (let i = 0; i < course.parts.length; i++) {
//         const element = array[i];

//     }
// }


const tmap = course.parts