import React from "react"

const Course = ({ course }) => {
    const array = course.parts.map(cour => cour.exercises)
    const init = 0
    const total = array.reduce((accumulator, currentValue) => accumulator + currentValue, init)

    // console.log("123")

    return (
        <div>
            <h1>
                {course.name}
            </h1>
            <ul>
                {course.parts.map(cour =>
                    <li key={course.parts.id}>
                        {cour.name}     {cour.exercises}
                    </li>
                )}
                <p>total of {total} exercises</p>
            </ul>

        </div >
    )
}

export default Course