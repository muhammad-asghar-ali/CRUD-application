// import react from 'react';
import { AppBar, Toolbar, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    hearder: {
        background:'#111111'
    },
    tabs: {
        color:"#FFFFFE",
        textDecoration: "none",
        marginRight: 20,
        fontSize: 20
    }
}); 
const Navbar = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.hearder} position='static'>
            <Toolbar>
                <Link className={classes.tabs} to='/' exact>Home</Link>
                <Link className={classes.tabs} to='all' exact>All User</Link>
                <Link className={classes.tabs} to='add' exact>Add user</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;