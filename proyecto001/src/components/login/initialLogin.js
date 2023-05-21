import Login from "./login";
import Logout from "./logout";
import { useContext } from "react";
import { contextState } from "@/context/contextprovider";

export default function InitialLogin( props ) {

    let context = useContext(contextState);
    let isLoggedIn = context.isLoggedIn;

    if (isLoggedIn){
        return <Logout/>
    } else {
        return <Login/>
    }

    //return isLoggedIn? <Logout/>:<Login/>;
}