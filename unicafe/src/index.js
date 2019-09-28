import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = all / 3
  const positive = good / all * 100

  const setToGood = (toGood) => () => setGood(toGood)
  const setToNeutral = (toNeutral) => () => setNeutral(toNeutral)
  const setToBad = (toBad) => () => setBad(toBad)

  return (
    <div>
        <h1>give feedback</h1>
        <button name="good" onClick={setToGood(good +1)}>good</button>
        <button name="neutral" onClick={setToNeutral(neutral +1)}>neutral</button>
        <button name="bad" onClick={setToBad(bad +1)}>bad</button>
        <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)