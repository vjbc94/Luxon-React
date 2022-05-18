import './NavBar.css'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavBar = () => {

    return (
        <>
            <AppBar position="static" color="inherit" className='header-principal'>
                <Toolbar>
                    <div className='container-logo'>
                        <img src="./luxoon.png" alt='foto' />
                    </div>
                    <ul className='navbar'>
                        <li className='li-inicio'>
                            <Button color="inherit"  >INICIO</Button>
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
                    <ShoppingCartIcon /> 
                </Button>
                </Toolbar>
            </AppBar>
        </>

    )

}

export default NavBar 