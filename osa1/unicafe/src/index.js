import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.annapalautetta.nimi}</h1>

        </div>
    )
}
const Sisalto = (props) => {
    return (
        <div>
            <p>
                <Arvostelu arvostelu={props.arvostelut[0]} />
                <Arvostelu arvostelu={props.arvostelut[1]} />
                <Arvostelu arvostelu={props.arvostelut[2]} />
            </p>
        </div>
    )
}


const Yhteensa = (props) => {
    return (
        <div>
            <p>

                yhteensä {props.arvostelut[0].tehtavia + 
                    props.arvostelut[1].tehtavia + props.arvostelut[2].tehtavia} tehtävää
            </p>
        </div>
    )
}
const Arvostelu = (props) => {
    return (
        <div>
            <p>
                {props.arvostelu.nimi}
            </p>
        </div>
    )
}
const funktio = () => {
    return (
        1
    )
}

const Statistics = (props) => {
    const goodie = 1
    const neutralie = 0
    const badie = -1
    const averagecounted = (goodie*props.good + neutralie*props.neutral + badie*props.bad)/props.all.length
    var positivePercent = ((props.good)/props.all.length)*100
    if (props.all.length === 0){
        return(
            <div>
                Ei yhtään arvostelua. Arvostele!
            </div>
        )
    }
    return(
        <div>


            <table>
                <tbody>
                    <tr>
                        <td>Good: {props.good} </td>  
                    </tr>
                    <tr>
                        <td>Neutral: {props.neutral}</td>
                    </tr>
                    <tr>
                        <td>Bad: {props.bad}</td>
                    </tr>
                    <tr>
                         <td>All: {props.all.length}</td>
                    </tr>
                    <tr>
                         <td>Average: {averagecounted}</td>
                    </tr>
                    <tr>
                         <td>Positives: {positivePercent}%</td>
                    </tr>


                </tbody>
            </table>
            
         
            
        </div>
    )
    
}
const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )


const App = (props) => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState([])


    const handleGoodClick = () => {
        setAll(all.concat('G'))
        setGood(good+1)
    }
    const handleNeutralClick = () => {
        setAll(all.concat('N'))
        setNeutral(neutral+1)
    }
    const handleBadClick = () => {
        setAll(all.concat('B'))
        setBad(bad+1)
    }

    return (
        <div>
            <h1>anna palautetta</h1>
            <div>
                <Button handleClick={handleGoodClick} text='Good' />
                <button onClick={handleNeutralClick}>Neutraali</button>
                <button onClick={handleBadClick}>Bad</button>
                
            </div>
            <div>
                <h1>statistiikka</h1>
               

                <Statistics all={all} good={good} neutral={neutral} bad={bad}/>
              
    
            </div>
        </div>


    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)