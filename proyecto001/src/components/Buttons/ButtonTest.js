import { Component } from "react";

export default class ButtonTest extends Component {
    constructor(props) {
        super(props)
        this.state = { contador: 0 }
    }
    incrementar() {
        this.setState({ contador: this.state.contador + 1 })
    }
    decrecer() {
        let cuenta = this.state.contador - 1
        if (cuenta <= 0) {
            cuenta = 0
        }
        this.setState({ contador: cuenta })
    }
    volver() {
        this.setState({ contador: this.state.contador = 0 })
    }
    render() {
        return (
            <>
                <br></br>
                <button onClick={() => this.incrementar()}>
                    ++
                </button>
                <br></br>
                <br></br>
                <button onClick={() => this.decrecer()}>
                    --
                </button>
                <br></br>
                <br></br>
                <button onClick={() => this.volver()}>
                    Reset
                </button>
                <br></br>
                <span> El contador es: {this.state.contador}</span>
            </>
        )
    }
}