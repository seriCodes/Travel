import React from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Radio } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import HotelRating from '../components/filters/HotelRating';
import PriceFilter from '../components/filters/PriceFilter';
import HospitalitySelctor from '../components/filters/HospitalitySelctor';
import NameFilter from '../components/filters/NameFilter';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const styles = {
    root: {
        color:'green',
        borderStyle: 'solid',
        borderColor: 'brown',
        bordeWidth: '13px',
    }    
}

const AccordionDemo = (props) => {
    return (
        <div>
        <Accordion>       
         <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
      <div className="ResultsFilter">
      <div className="filter-headline">
      סינון תוצאות
      </div>
      <hr></hr>

</div>
    </AccordionSummary>
    <AccordionDetails classes={{root:props.classes.root}}>
    sfsafs 
    </AccordionDetails>

</Accordion>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
        <div className="ResultsFilter">
        <div className="filter-headline">
        סינון תוצאות
        </div>
        <hr></hr>
  
</div>
      </AccordionSummary>
      <AccordionDetails>
      <div className="flex-center-column">
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
export default withStyles(styles)(AccordionDemo);
