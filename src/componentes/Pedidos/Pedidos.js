import React from 'react'
import Card from './Card';
import './Pedidos.css';

function Pedidos() {
    return ( <>
        <div className='CardGroup'>

            <Card nombre = 'vainilla' price = '7'></Card>
            <Card nombre = 'Chocolate' price = '10'></Card>
            <Card nombre = 'Nutella' price = '20'></Card>

        </div>
    </> );
}

export default Pedidos;