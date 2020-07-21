import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
    root: {
    //   backgroundColor: 'indigo',
    //   width:'100%'
    },
  };
  
const SelectDemo = (props) => {
    // defaultValue={props.classes.root}
    return (
        <div>
        <div className='selectDemo'> dsa</div>
            <Select 
            className='selectDemo'
             
            defaultValue={'PRICE_LOW'}
                     MenuProps={{
                       anchorOrigin: {
                           vertical: "bottom",
                           horizontal: "right"
                       },
                       transformOrigin: {
                           horizontal: "right"
                       },
                       getContentAnchorEl: null,
                   }}
    
           //  inputProps={{
           //    name: 'name',
           //    id: 'uncontrolled-native',
           //    direction:'RTL',
           //    backgroun:'green',
           //    borderStyle:'groove',
           //    borderColor: 'green',
           //    bordeWidth: '23px', 
           //  }}
           
           //  classes={props.classes.root} 
           //  MenuProps={props.classes.root}
                   >
                   <span className='selectDemo'>dsa</span>
                   <div className='selectDemo'>selectDemo</div>
                   <div className='selectDemo-inner'>selectDemo-inner
                   </div>
                   <div className='selectDemo-inner'>ss
            <MenuItem  value={'PRICE_LOW'}>מחיר, מהנמוך לגבוה
            selectDemo-inner from div</MenuItem>
            </div>
            <MenuItem className='selectDemo-inner' value={'PRICE_HIGH'}>מחיר, מהגבוה לנמוך selectDemo-inner</MenuItem>


            <MenuItem value={'RATE_HIGH'}>
            <div className='selectDemo-inner'>selectDemo-inner
            </div>
            </MenuItem>
            <MenuItem value={'RATE_LOW'}>
            <div className='            selectDemo-inner-with100
            '>            selectDemo-inner-with100

            </div>    </MenuItem>
            <MenuItem value={'LUCRATIVE'}>הכי משתלם</MenuItem>
          </Select>
              </div>
    )
}
export default withStyles(styles)(SelectDemo);

