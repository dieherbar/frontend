//Este es un componente funcional...
/*export default function Clock (props){
    return(
    <>
    <span>
        Esto es un reloj, hora actual: 
        <b>{props.date.toLocaleTimeString()}</b>
    </span>
    </>
    )
}*/

import { Component } from "react";

//Componente de clase
export default class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()}; //this.state.date
    }

    //Este es un nuevo metodo para actualizar el estado del reloj...
    tick(){
        this.setState({date: new Date()});
    }

    //Es invocado cuando el comopnente ya se pinto por primera vez y esta listo en el VDOM
    componentDidMount(){
        this.timerOne = setInterval( ()=> this.tick(),1000)

    }

    render(){
    return(
        <>
        <span>
            Esto es un reloj, hora actual: 
            <b id="reloj"> {this.state.date.toLocaleTimeString()}</b>
        </span>
        </>
        )
    }
}