import { Button } from '@mui/material';
import { React, useState } from 'react';

function ItemCount({ stock, setShowButton }) {
    const [count, setCount] = useState(0)

    const sumQ = () => {
        console.log("stock: ", stock)
        if (count < stock) {
            setCount(count + 1)
             console.log(count)
        }
    }
    const restQ = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (
        <>
         <div className='contador'>
            <Button onClick={restQ}> - </Button>
            <p> {count}</p>
            <Button onClick={sumQ}> + </Button>
        </div>
        <Button onClick={() => setShowButton(true)} color="primary" variant={'contained'} >Agregar Al carrito</Button>
        </>
       
    )

}

export default ItemCount

