import './NavBar.css'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Button } from '@mui/material'
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';
import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <>
            <AppBar position="static" color="inherit" className='header-principal'>
                <Toolbar>
                    <div className='container-logo'>
                    <Link to="/">    <img src="./luxoon.png" alt='foto' /> </Link>
                    </div>
                    <ul className='navbar'>
                        <li className='li-inicio'>
                            <Button color="inherit"> <Link to="/">INICIO </Link>
                            </Button>
                        </li>
                        <li>
                            <Button color="inherit" >PRODUCTOS</Button>
                        </li>
                        <li>
                            <Button color="inherit"  >NOVEDADES</Button>
                        </li>
                        <li>
                            <Button color="inherit"  >CONTACTO</Button>
                        </li>
                    </ul>
                    <Button color="inherit">
                        <AddShoppingCartTwoToneIcon />
                    </Button>
                </Toolbar>
            </AppBar>
        </>

    )

}

export default NavBar 