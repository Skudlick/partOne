import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    return(
        <div>
            <h1>statistics</h1>
            <p>good {props.good} </p>
            <p>neutral {props.neutral}</p>
            <p>bad {props.bad}</p>
            <p>all {props.stats.all}</p>
            <p>average {props.stats.average}</p>
            <p>positive {props.stats.positive} %</p>
        </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const stats = {
      all : good + neutral + bad,
      average : (good + neutral + bad) / 3,
      positive : good / (good + neutral + bad) * 100
  }
  
  /*
  const all = good + neutral + bad
  const average = all / 3
  const positive = good / all * 100
  **/


  const setToGood = (toGood) => () => setGood(toGood)
  const setToNeutral = (toNeutral) => () => setNeutral(toNeutral)
  const setToBad = (toBad) => () => setBad(toBad)

  return (
    <div>
        <h1>give feedback</h1>
        <button onClick={setToGood(good +1)}>good</button>
        <button onClick={setToNeutral(neutral +1)}>neutral</button>
        <button onClick={setToBad(bad +1)}>bad</button>
        <Statistics stats={stats} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)