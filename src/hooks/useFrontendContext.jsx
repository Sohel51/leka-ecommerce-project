import { useContext } from "react";
import { FrontendContext } from "../context/FrontendContext";

function useFrontendContext(){
    return useContext(FrontendContext);
}

export default useFrontendContext