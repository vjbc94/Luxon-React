import './Card.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from 'react';



const CardItem = ( {imagen, titulo, precio, stock }) => {

const [count, setCount ] = useState(0)

    const sumQ = () => {
        console.log("stock: ", stock)
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const restQ = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }


    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <div className='card-item'>
                    <div>
                        <img src={`./${imagen}`} />
                    </div>
                    <p>{titulo}</p>
                    <span>$ {precio}</span>
                    <div className='contador'>
                        <Button onClick= {restQ}> - </Button>
                        <p> {count}</p>
                        <Button onClick= {sumQ}> + </Button>
                    </div>
                    <Button variant="outlined"> Comprar </Button>
                </div>
            </CardContent>
        </Card>
    );
}

export default CardItem