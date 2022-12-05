import { HTMLAttributes } from "react";

import React, { useState, useEffect } from 'react';







export function Busca(Props:any) {

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();

         const entrada=document.getElementById('inp1') as HTMLInputElement
         const resp=document.getElementById('saida')
        

        setTerm(entrada?.value!)
    }
    const [term, setTerm] = useState("sssss");

    


return <>

<form onSubmit={submitForm}> 
<input type='text' id='inp1' />
<button type="submit" id="btn1" className="btn">Submit</button>
<label id="saida">{term}</label>
</form>


</>


}