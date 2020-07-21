import React, {useState} from 'react'
import { Radio } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HotelRating from './filters/HotelRating';
import PriceFilter from './filters/PriceFilter';
import HospitalitySelctor from './filters/HospitalitySelctor';
import NameFilter from './filters/NameFilter';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
// const cyanLidght=red[50]
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import header from '../JScode/header'
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { green } from '@material-ui/core/colors';


const styles = {
    root: {
        color:'white',
        // borderStyle: 'solid',
        // borderColor: 'brown',
        // bordeWidth: '13px',
        // width:'100%',
        // width: '100%',

        background:'#313685',
        // boxSizing: 'contenBox',
        // boxSizing: 'borderBox',
        // padding:'10px, 0px, 0px'//!?!?
        paddingTop: '0px',
    paddingRight: '0px',
    paddingBottom: '0px',
    paddingLeft: '0px',
    },
    details: {
        // alignItems: 'center',
        // width: '100%',

          },
          summary:{
            direction:'RTL',
          },
          IconButtonAttributes:{
            direction:'RTL',
            color:'white',
            // color:'white',
            // borderStyle: 'solid',
            // borderColor: 'brown',
            // bordeWidth: '13px',
            // width:'100%',
            // width: '100%',
    
            // background:'green',
            fontSize: 30 

          },
    
}

const ResultsFilter = (props) => {
    const headerObj= new header()
    const[isBigScreen,setisBigScreen]=useState(headerObj.getWindowWidth(window.innerWidth))

    let reportWindowSize= ()=>{
        // console.log(window.innerWidth)

        if(headerObj.getWindowWidth(window.innerWidth)!=isBigScreen){
            // console.log('change', isBigScreen)
            setisBigScreen(headerObj.getWindowWidth(window.innerWidth))          
        } 
    }
    window.addEventListener('resize', reportWindowSize); 

    let resultsFiltersComponents;
    if(isBigScreen){           
        resultsFiltersComponents=(
            <React.Fragment>
            <div className="filter-headline">
            סינון תוצאות
            </div>
            <hr></hr>
            <HotelRating></HotelRating>
            <hr></hr>
    
            <PriceFilter></PriceFilter>
                    <hr></hr>
    <HospitalitySelctor></HospitalitySelctor>
    <hr></hr>
    <NameFilter></NameFilter>
            </React.Fragment>
        )
    }else{
        // className="accordion-Filter" - in Accordion component the  classes attribute will override the className only in the same css attributes.
 
        resultsFiltersComponents=(
            <div className="ResultsFilter ">
            <Accordion
            className="accordion-Filter"

            classes={{root:props.classes.root}} 
            // IconButtonProps={{
                // fontSize:80 ,  
                // color:'white',
                // expandIcon:props.classes.IconButtonAttributes,
            
            // }} 

            >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
              classes={{root:props.classes.summary}} 
              IconButtonProps={{
                // fontSize:80 ,  
                // color:'white',
                expandIcon:props.classes.IconButtonAttributes,
            
            }} 

              
            ><div className="filter-headline ">
            סינון תוצאות
            </div>
            
            
        
      

          </AccordionSummary>
          <AccordionDetails 
          classes={{root:props.classes.details}} 
          className="AccordionDetails"
          >
          <div className=" AccordionDetails-inner">
          <HotelRating></HotelRating>
            <hr></hr>
             <PriceFilter></PriceFilter>
                    <hr></hr>
    <HospitalitySelctor></HospitalitySelctor>
    <hr></hr>
    <NameFilter></NameFilter> 
    </div>
    </AccordionDetails>
    
            </Accordion>
            </div>
        )
    }


    return (
        <div className="ResultsFilter">

       {resultsFiltersComponents}
       </div>

    )
}
export default withStyles(styles)(ResultsFilter);


