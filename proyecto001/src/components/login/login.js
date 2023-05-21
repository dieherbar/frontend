import { useContext } from "react"
import { contextState } from "@/context/contextprovider";
import LANGUAGE from "@/data/language.json"

export default function Login(){
    let context = useContext(contextState);
    let lan = context.language;
    const CURRENT_LANGUAGE = LANGUAGE[lan];

    function submitFunction(event){
        console.log("Estoy invocando la funcion submit...")
        event.preventDefault();
        //fetch a backend
        //o envio de data a firebase...
    }

    return(
        <>
        <form onSubmit={(event) => submitFunction(event)} method="post">
            <div>
                <label>{CURRENT_LANGUAGE.USEREMAIL}</label>
                <input
                type="text"
                name="email"
                onChange={() => console.log("callback llamado...")}
                />
            </div>
            <div>
            <label>{CURRENT_LANGUAGE.PASSWORD}</label>
                <input
                type="password"
                name="password"
                onChange={() => console.log("")}
                />
            </div>
            <div>
                <button type="submit">{CURRENT_LANGUAGE.SUBMIT}</button>
            </div>
        </form>
        </>
    )
}