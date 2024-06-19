import {useState} from 'react'

function Carta({id,color,texto}){

    const [colorCarta,setColorCarta] = useState(color)

    return(
        <div id={id} className={"carta " + colorCarta}>
            <p>{texto}</p>
            <button onClick={()=>setColorCarta('red')}>Red</button>
            <button onClick={()=>setColorCarta('blue')} >Blue</button>
            <button onClick={()=>setColorCarta('green')} >Green</button>
        </div>
    )
}

export default Carta