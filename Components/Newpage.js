import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


class Newpage extends Component{
render(){
return <div>
      <Typography component="h1" variant="h5">
           Sign up
           <Link color="inherit" href="https://lakshit27.github.io.com/">
        &nbsp;Your Website
           </Link>
      </Typography> <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>

     
        <Toolbar position="absolute" color="default" >
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
        <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" className={classes.title}>
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
    </div>
}
}


// exportconst Newpage1 = (props) => {
//     return <div>
    
//     <Button variant="contained" color="primary">
//       Hello World {props.myname}
//     </Button>
//     </div>
//  } default Newpage1;
export default Newpage; 
