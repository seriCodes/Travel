import { Radio } from '@material-ui/core';
import React,{useState} from 'react'
import './_radio.scss'
import { withStyles } from '@material-ui/core/styles';

// import styles from './MaterialUiStyles'
// ../../styles/MaterialUiStyles';

// const styles = {
//     root: {
//     //   backgroundColor: 'blue',
//       color: 'green',
//     //   'darkblue',
//     '&$checked': {
//         color: 'darkblue'
//         // 'white'
//     },
//     //   '&$checked': {
//     //     color: 'yellow'
//     // },

//     },
//   };
  const styles = {
    root: {
        color: 
        // 'yellow',
        'white',
        '&$checked': {
            color: 'darkblue'
            // 'white'
        },
        paddingRight: 0,
        paddingLeft: 0
    }
}

 const RadioB = (props) => {
    console.log('props RadioB')
    console.log(props)
    const [isChecked,setisChecked]=useState(true)
    // let isChecked;//X1
    // isChecked=true;//X1
    const doIt= (param)=>{
        // alert('pressed '+param )//V
        // isChecked=!isChecked//X1
        setisChecked(!isChecked)
    }
    
    return (
        <div className='test'> 
        <span className='test'>dsadsa</span>
        <Radio  onClick={()=>doIt('arg1')}  checked={isChecked}  size=' '
        ></Radio>
      
        <Radio   checked={false}></Radio>
        <Radio classes={{root:{color: 'white'},}}  checked={true}></Radio>
    <span className='test'>444</span>

    <Radio  classes='makeWhite'  checked={true}></Radio>

    <span className='test'>555</span>
    <Radio  className='makeWhite'  checked={true}></Radio>
    <span className='test'>6</span>
    <Radio classes={props.classes.root}  checked={true}></Radio>
    <span className='test'>7</span>
    <Radio classes={props.classes.root}  checked={true}></Radio>
        <span className='test'>8</span>
        
        <Radio classes={props.classes.root}  checked={true}></Radio>

        <span className='test'>94</span>


        <span className='test'>10</span>
        <Radio className={props.classes.root}></Radio>

        <span className='test'>11</span>
        <Radio className={props.classes.root} checked={false}>
        </Radio>


                </div>
    )
}

export default withStyles(styles)(RadioB);

