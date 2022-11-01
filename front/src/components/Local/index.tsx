import { HTMLAttributes } from "react";
import { LocalSld } from "./styles";

type Props=HTMLAttributes <HTMLElement>&{
    localSorteio: string;
    nomeMunicipioUFSorteio:String;

};

export function Local({localSorteio,nomeMunicipioUFSorteio}:Props){
    return(
    <LocalSld> Sorteio realizaso no {localSorteio} em {nomeMunicipioUFSorteio}</LocalSld>
    )
}