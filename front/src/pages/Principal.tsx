import { useEffect, useState } from "react";
import { Acumulado } from "../components/Acumulado/Index";
import { Cabecalho } from "../components/Cabecalho";
import { Local } from "../components/Local/index";
import { Numeros } from "../components/Numeros/Index";
import { ProximoC } from "../components/ProximoC";
import { Busca } from "../components/Busca";

import { WrapperSld } from "./styles";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../Styles/theme";



import services from "../services";
import { Props } from "../types";

export default function Principal() {
    const [concurso,setConcurso]=useState({} as Props);
    const [tema, setTema] = useState(dark)

    useEffect(
        function(){
        (
            async function () {
                const numero = Math.floor(Math.random() * 2533);
                const concurso: Props = await services.get(numero);
                console.log(concurso);
                setConcurso( concurso);
                setTema( parseInt(concurso.listaDezenas[0])%2 === 0 ? light:dark)
            }
        )()
        },
        []
    );

    return (
    <>{concurso.numero &&
        <ThemeProvider theme={tema}>
        <WrapperSld>
            <Cabecalho numero={concurso.numero} dataApuracao={concurso.dataApuracao}/>
            {concurso.acumulado && <Acumulado />}
            <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio} />
            <Numeros listaDezenas={concurso.listaDezenas} />
            <ProximoC valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso}
            dataProximoConcurso={concurso.dataProximoConcurso}></ProximoC>
        </WrapperSld>
        </ThemeProvider>}



        <Busca/>
     </>



    );
}