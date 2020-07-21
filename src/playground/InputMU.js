import React from 'react'
import { withStyles } from '@material-ui/core/styles';
// import {Button} from '../common/Button'
import InputBase from '@material-ui/core/InputBase';

const styles = {
    root: {
        width:'50%',
        // color: 'white',
        background:'white',
        borderRadius:'0.3rem',
        borderStyle:'groove',
        borderColor:'pink',
        borderWidth: '1px',
        paddingRight:'0.7rem',//X

        // borderRadius:'0.5rem',
         direction:'RTL',
         '&.Mui-focused': {
            // background:'red', 
            borderStyle:'groove',
            borderColor:'black',
            borderWidth: '1.3px', 
        },
        ['@media (max-width:895px)']: { // eslint-disable-line no-useless-computed-key
            width: '80%',
            background:'red',

          }
    },
      //  cursor: 'text',
      focused:{
        background:'red', 
        borderStyle:'solid',
        borderColor: 'deeppink',
        borderWidth: '6px',
    
    },
    rootSearchIcon:{
        color: 'gray',
    }, 
}


const InputMU = (props) => {
    return (
        <div className="InputMU-Demo">

        <div className="emailInput">
        
        <InputBase 
        className={props.classes.root}
        inputProps={{
        type:"email"
    }}
    
        placeholder=" אימייל אין קונטיינר לבן"
         > </InputBase>  
                     </div>
                     <div className="emailInput">
        
                     <InputBase 
                     className={props.classes.root}
                     focused={props.classes.focused}
                     inputProps={{
                     type:"email"
                 }}
                 
                     placeholder="&#9993;  &#9998;
                     CSS אין קונטיינר לבן"
                      > </InputBase>  
                                  </div>

        <div>
        sd <span>&#9993;</span>
        &#9998;
        </div>
        <div>sd
        </div>
        <div>sd
        </div>
        <div>sd
        </div>


            fsdf
        </div>
    )
}
export default withStyles(styles)(InputMU)