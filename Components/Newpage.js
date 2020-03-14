import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';


class Newpage extends Component{
render(){
return <div>
      <Typography component="h1" variant="h5">
           Sign up
           <Link color="inherit" href="https://lakshit27.github.io">
        &nbsp;Your Website
           </Link>
      </Typography>
      <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
         <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
            />
      </Toolbar>
      
     <Toolbar position="absolute" color="default" >
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
      </Toolbar>
        
  <Toolbar position="static">
   
    <Typography variant="h6" >
      News
    </Typography>
    <Button color="inherit">Login</Button>
  </Toolbar>

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
