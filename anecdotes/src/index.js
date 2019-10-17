import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
      <div>
        <button onClick={props.onClick}>
          {props.text}
        </button>
      </div>
  )

}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(6).fill(0));
  

  const randomSelected = (random) => () => setSelected(random);
  const incrementVote = (select) => {
    const copy = [...points]
    copy[select] += 1;
    setPoints(copy)
  } 
  

  console.log(points)
  console.log(selected)
  return (
    <div>
      {props.anecdotes[selected]}
      <br></br>
      has {points[selected]} points
      <br></br>
      <Button onClick={() => incrementVote(selected)} text="vote" />
      <Button onClick={randomSelected(Math.floor(Math.random() * 6))} text="next anecdote"/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)