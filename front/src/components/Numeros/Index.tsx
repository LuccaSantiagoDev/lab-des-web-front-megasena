import { HTMLAttributes } from "react";
import {  NumerosSld, SorteioSld} from "./styles";
import {  CirculoSld} from "./styles";

type Props=HTMLAttributes <HTMLElement>&{
    listaDezenas: string[];

};

export function Numeros({listaDezenas}:Props){
    return(
    
    <>

<SorteioSld>
{
listaDezenas?.map(
    dezena =>(
        <CirculoSld> 
        
            < NumerosSld> {dezena}</NumerosSld>

            </CirculoSld>  
            
            )
        )
}
</SorteioSld>
   
    
    </>
    )
}