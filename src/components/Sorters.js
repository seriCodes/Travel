import React,{useState} from 'react'
import {Button} from './common/Button'
import Sort from '../JScode/filtersSorts/sortCode'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import header from '../JScode/header'
import {SorterContext} from '../contexts/SorterContext'

// import FormControl from '@material-ui/core/FormControl';

// import NativeSelect from '@material-ui/core/NativeSelect';

const styles = {
    root: {
        // color: 'green',
        // width:'90%',
        display:'flex',
        // justifyContent:'right',
        justifyItems:'right',
        // 'white',
        // backgroun:'green', 
        // color: 'yellow',//V
        // direction:'RTL',

     
    // },
    // selectMenu:{
    //     direction:'RTL',
    //     backgroun:'green',
    //     borderStyle:'groove',
    //     borderColor: 'green',
    //     bordeWidth: '23px',
    
    // },
    // select:{
    //     direction:'RTL',
    //     backgroun:'green',
    //     borderStyle:'groove',
    //     borderColor: 'green',
    //     bordeWidth: '23px',


    },
    // select:{
    //     color: 'yellow',

    // },


}

let renderCounter=0;
const Sorters = (props) => {
    console.log('renderCounter',renderCounter++)
const [width, setWidth]=useState('90%')
const [selectState, setSelectState]=useState('sortRatingHigh')
//     sortExpensive   sortRatingHigh sortCheap
const sorterContextObj=React.useContext(SorterContext) 
// alert(SorterContext)
console.log('sorterContext fm comp')
console.log(sorterContextObj)

// alert(SorterContext.sorterState)
React.useEffect(()=>{
    console.log(document.getElementById("selectComponent"))  
    // document.getElementById("selectComponent").Value="sortExpensive"
    let buttonStressed;
    console.log('buttons from sorters ')
    document.getElementById("sortCheapButton").classList.remove("selectedSorter")
    // console.log(document.getElementById("sortCheapButton"))
    document.getElementById("sortRatingHighButton").classList.remove("selectedSorter")
    // console.log(document.getElementById("sortRatingHighButton"))

    document.getElementById("sortLucrativeButton").classList.remove("selectedSorter")
    // console.log(document.getElementById("sortLucrativeButton"))

    
    switch(sorterContextObj.sorterState){
        case 'sortCheap':
            // alert('sortCheap f/m sortrs component')
    console.log('sortCheap f/m sortrs component')
    buttonStressed= document.getElementById("sortCheapButton")
    // let cheapButton= document.getElementById("test")
    console.log(buttonStressed)
    // if(cheapButton){
        buttonStressed.classList.add("selectedSorter");
        console.log(buttonStressed) 
        setSelectState('sortCheap')
        break;
        case 'sortRatingHigh':
            buttonStressed= document.getElementById("sortRatingHighButton")
            buttonStressed.classList.add("selectedSorter"); 
            break;
            case 'sortLucrative':
                buttonStressed= document.getElementById("sortLucrativeButton")
                buttonStressed.classList.add("selectedSorter");
     
                break;
    
        default:
            console.log('bug f/m sortrs component')
    
    }
})

 
const headerObj= new header()

    const[isBigScreen,setisBigScreen]=React.useState(headerObj.getWindowWidth(window.innerWidth))

    let sort=new Sort()

    let reportWindowSize= ()=>{
        // console.log(window.innerWidth)

        if(headerObj.getWindowWidth(window.innerWidth)!=isBigScreen){
            console.log('change f/m sorter', isBigScreen)
            setisBigScreen(headerObj.getWindowWidth(window.innerWidth))
            var elem = document.getElementById("toggleDownMenue-Container");
            if(!isBigScreen){
                elem.style.height="0rem"

            } 
        }
    // console.log(isBigScreen)
    }
    window.addEventListener('resize', reportWindowSize);

    let alternateOrderComponent;
if(isBigScreen){   
    alternateOrderComponent=(
        <React.Fragment>
        <div className="Sorters-Left"> 
        <Select 
        id={"selectComponent"}

        className={props.classes.root}
        onChange={(e)=>sorterContextObj.SorterDispatch({
             payload: e.target.value
        })}
        // defaultValue={selectState}
        defaultValue={'sortCheap'}  
        value= {sorterContextObj.sorterState}
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
        <MenuItem value={'sortCheap'}>
        <div className='            selector-inner
        '>            
        מחיר, מהנמוך לגבוה

        </div> 
        </MenuItem>
        <MenuItem value={'sortExpensive'}>
        <div className=' selector-inner
        '>            
        מחיר, מהגבוה לנמוך

        </div> 
        </MenuItem>
        <MenuItem value={'sortRatingHigh'}>
        <div className=' selector-inner
        '>            
        דירוג, מהגבוה לנמוך
        </div>
        </MenuItem>

        <MenuItem value={'sortRatingLow'}>
        <div className=' selector-inner
        '>            
        דירוג, מהנמוך לגבוה
        </div>

        </MenuItem>
        <MenuItem value={'sortLucrative'}>
        <div className=' selector-inner
        '> 
        הכי משתלם
         </div>
        
        </MenuItem>
      </Select>  
      
      <span className="Sorters-Left-Descriptor">:מיין לפי</span>
        
        </div>
        
        <div 
        className="vl"></div>

        <div   className="Sorters-Right">
        <Button id={'sortLucrativeButton'} value={'sortLucrative'} class1="header-hover sides-padding-added" class2="" callBack={(e)=>
            sorterContextObj.SorterDispatch({
                payload:'sortLucrative'
           })}>הכי משתלם <i onClick={()=>{

            sorterContextObj.SorterDispatch({
                payload: 'sortLucrative'
            })}} class="fa fa-money" aria-hidden="true"></i>
        </Button>
  
    <Button id={'sortRatingHighButton'} value={'sortRatingHigh'} class1="header-hover" class2="sides-padding-added" callBack={(e)=>{
         sorterContextObj.SorterDispatch({
            payload:'sortRatingHigh'
        })
    }
      }>הכי פופולרי <i onClick={()=>{
         sorterContextObj.SorterDispatch({
            payload: 'sortRatingHigh'
        })}}
         class ="fa fa-trophy " aria-hidden="true">
     </i> 
    </Button>
    
    <Button 
    value={'sortCheap'} 
    id="sortCheapButton"
    class1="header-hover" class2="sides-padding-added" callBack={(e)=>
        sorterContextObj.SorterDispatch({
            payload:'sortCheap'
       })}>הכי זול <i onClick={()=>{
        // alert('bigscreen cheap')

        sorterContextObj.SorterDispatch({
            payload: 'sortCheap'
        })}} class="fa fa-usd" aria-hidden="true"></i>
    </Button> 
</div>
</React.Fragment>
    )
    // console.log(alternateOrderComponent)
}else{
    // styles.root.width= '80%';X
    // styles.root.color='green';X
    console.log('styles.root.color', styles.root.color)
    // console.log(alternateOrderComponent)
let selectClassNames= 'Sorters-Left-selector'
// `${props.classes.root} `
console.log(`selectClassNames`)
console.log(selectClassNames)

    alternateOrderComponent=(
        <React.Fragment>
        <div className="Sorters-Right">
        <Button id={'sortLucrativeButton'} value={'sortLucrative'} class1="header-hover" class2="sides-padding-added" callBack={(e)=>
            sorterContextObj.SorterDispatch({
                payload:'sortLucrative'
                //  e.target.getAttribute('value')// creates a problem when icon pressed as well- cecomes null
           })}>הכי משתלם <i class="fa fa-money" aria-hidden="true"></i>
        </Button>
  
    <Button id={'sortRatingHighButton'} value={'sortRatingHigh'} class1="header-hover" class2="sides-padding-added" callBack={(e)=>sorterContextObj.SorterDispatch({
        payload:'sortRatingHigh'
   })}>הכי פופולרי <i class="fa fa-trophy" aria-hidden="true"></i>

    </Button>
    
    <Button   value={'sortCheap'}
    id={"sortCheapButton"}
    class1="header-hover" class2="sides-padding-added" callBack={(e)=>sorterContextObj.SorterDispatch({
        payload: 'sortCheap'
   })}>הכי זול&nbsp;
<i onClick={()=>{
    sorterContextObj.SorterDispatch({
        payload: 'sortCheap'
    })}}
     class="fa fa-usd" aria-hidden="true"></i>
    </Button> 
</div>

<div className="Sorters-Left"> 
 
        <Select 
        id={"selectComponent"}
        className={selectClassNames}

        onChange={(e)=>sorterContextObj.SorterDispatch({
            payload: e.target.value
       })}        
       defaultValue={selectState}
       value= {sorterContextObj.sorterState}

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
       
        // classes={props.classes.root} 
        // MenuProps={props.classes.root}
               >
        <MenuItem value={'sortCheap'}>
        <div className='            selector-inner
        '>            
        מחיר, מהנמוך לגבוה

        </div> 
        </MenuItem>
        <MenuItem value={'sortExpensive'}>
        <div className=' selector-inner
        '> 
        מחיר, מהגבוה לנמוך  
              </div>
        </MenuItem>
        <MenuItem value={'sortRatingHigh'}>
        <div className=' selector-inner
        '> 
        דירוג, מהגבוה לנמוך           </div>
        </MenuItem>

        <MenuItem value={'sortRatingLow'}>
        <div className=' selector-inner
        '> 
        דירוג, מהנמוך לגבוה         </div>
        
        </MenuItem>
        <MenuItem value={'sortLucrative'}>
        <div className=' selector-inner
        '> 
        הכי משתלם
         </div>
        </MenuItem>
      </Select>  
 

       <span className="Sorters-Left-Descriptor">:מיין לפי</span>
        
        </div>
        </React.Fragment>

    )



}
    return (
        <div className="sortes ">
{alternateOrderComponent} 
</div>
    )
}
export default withStyles(styles)(Sorters);
