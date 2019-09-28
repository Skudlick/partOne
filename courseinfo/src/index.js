import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
      <div>
          {props.course.name}
      </div>
    )
    
}

const Content = (props) => {
  return (    
    <div>
      <Part1 part1name={props.course.parts[0].name} part1number={props.course.parts[0].exercises} />
      <Part2 part2name={props.course.parts[1].name} part2number={props.course.parts[1].exercises} />
      <Part3 part3name={props.course.parts[2].name} part3number={props.course.parts[2].exercises} />
    </div>
  )
  
}

const Part1 = (props) => {
  return(
    <div>
      <p>
        {props.part1name} {props.part1number}
      </p>
        
    </div>

  )
}

const Part2 = (props) => {
  return(
    <div>
      <p>
        {props.part2name} {props.part2number}
      </p>
    </div>

  )
}

const Part3 = (props) => {
  return(
    <div>
      <p>
        {props.part3name} {props.part3number}
      </p>
      
    </div>

  )
}

const Total = (props) => {
  return (
    <div>
      <p>
        Numbers of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
