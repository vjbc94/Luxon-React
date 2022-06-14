import { Button } from '@mui/material';
import { React, useState } from 'react';


function ItemCount({ stock, count,actualizarCount, setShowButton}) {

    const sumQ = () => {

        if (count < stock) {
            actualizarCount(count + 1)
        }
    }
    const restQ = () => {
        if (count > 0) {
            actualizarCount(count - 1)
        }
    }

    return (
        <>
            <div className='contador'>
                <Button onClick={restQ}> - </Button>
                <p> {count}</p>
                <Button onClick={sumQ}> + </Button>
            </div>
            <Button
                onClick={() => setShowButton(true)}
                color="primary" variant={'contained'}
                >
                Agregar Al carritoo
            </Button>
        </>

    )

}

export default ItemCount

