import { HTMLAttributes } from "react";
import { DiaSld, GrandeSld, ProximoSld } from "./styles";

type Props=HTMLAttributes <HTMLElement>&{
    dataProximoConcurso:String;
    valorEstimadoProximoConcurso:number;

};


export function ProximoC({dataProximoConcurso,valorEstimadoProximoConcurso}:Props){
    return(

<>
<ProximoSld>
    estimativa de premio do proximo concurso: <GrandeSld> R${valorEstimadoProximoConcurso?.toLocaleString('pt-BR')}</GrandeSld>
   </ProximoSld>

<DiaSld>No dia {dataProximoConcurso}</DiaSld>


</>

    );
}