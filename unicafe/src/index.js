import React from 'react'
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

                yhteensä {props.arvostelut[0].tehtavia + props.arvostelut[1].tehtavia + props.arvostelut[2].tehtavia} tehtävää
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


const App = () => {
    // tallenna napit omaan tilaansa
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>anna palautetta</h1>
            <div>
                <button onClick={this.klikHyva}>Hyvä</button>
                <button onClick={this.klikNeutraali}>Neutraali</button>
                <button onClick={this.klikHuono}>Huono</button>
            </div>
            <div>
                <h1>statistiikka</h1>
                <p>Hyvä {this.state.hyva}</p>
                <p>Neutraali {this.state.neutraali}</p>
                <p>Huono {this.state.huono}</p>
                <p>Keskiarvo {this.state.keskiarvo}</p>
                <p>Positiivisia {this.state.positiivisia}%</p>
            </div>
        </div>


    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)