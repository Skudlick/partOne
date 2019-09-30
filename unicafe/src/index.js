import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({value, text, unit}) => {
    return (
        <>
            <tr>
                <td>{text}</td>
                <td>{value} {unit}</td>
            </tr>
        </>
    )

}

const Statistics = ({good, bad, neutral}) => {
    const all = good + neutral + bad
    const average = (good - bad ) / all
    const positive = good / (good + neutral + bad) * 100
    if (all === 0){
        return (
            <div>
                <h1>statistics</h1>
                <h2>No feedback given</h2>
            </div>
        )
    }
    return(
        <>
            <h1>statistics</h1> 
            <table>
                <tbody>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="all" value={all} />
                    <Statistic text="average" value={average} />
                    <Statistic text="positive" value={positive} unit="%" /> 
                </tbody>
            </table>
        </>
    );
};

const Button = (props) =>{
    return (
        <button onClick={props.onClick} >
            {props.text}
        </button>
    )

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (toGood) => () => setGood(toGood)
  const setToNeutral = (toNeutral) => () => setNeutral(toNeutral)
  const setToBad = (toBad) => () => setBad(toBad)

  return (
    <div>
        <h1>give feedback</h1>
        <Button onClick={setToGood(good +1)} text="Good" />
        <Button onClick={setToNeutral(neutral +1)} text="Neutral" />
        <Button onClick={setToBad(bad +1)} text="Bad" />
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)