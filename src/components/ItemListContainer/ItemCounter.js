import { Button } from '@mui/material';
import { React, useState } from 'react';

function ItemCount({ stock }) {
    const [count, setCount] = useState(0)

    const sumQ = () => {
        console.log("stock: ", stock)
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const restQ = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }
    return (

        <div className='contador'>
            <Button onClick={restQ}> - </Button>
            <p> {count}</p>
            <Button onClick={sumQ}> + </Button>
        </div>
    )

}

export default ItemCount

