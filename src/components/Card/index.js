import { useState } from 'react';
import MyButton from "../MyButton/index.js";

const Card = () => {
    const [valor, setValor] = useState(0)

    function Adicionar(){
        setValor(valor + 1)
    }
    
    function Subtrair(){
        setValor(valor - 1)
    }

    return(
        <div className="card">
            <div className="card-header">
                Meu Primeiro Card
            </div>
            <div className="card-body">
                <MyButton 
                    className='btn btn-success'
                    onClick={Adicionar}
                >
                    Adicionar
                </MyButton>
                <MyButton 
                    className='btn btn-danger'
                    onClick={Subtrair}
                >
                    Subtrair
                </MyButton>
                
                <p>{valor}</p>
            </div>
        </div>
    )
}

export default Card;