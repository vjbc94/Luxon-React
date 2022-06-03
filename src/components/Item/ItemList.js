import CardItem from '../Item/Item'
import { Grid } from '@mui/material';

const CardList = ({ titulo, products }) => {

    return (
        <>
            <h2>{titulo}</h2>
            <Grid container spacing={4} >
                {
                    products.map(({ titulo, precio, imagen, id, stock }) => {
                        return (
                            <Grid item md={4} key={id}>
                                <CardItem titulo={titulo} precio={precio} imagen={imagen} stock={stock} id={id} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default CardList