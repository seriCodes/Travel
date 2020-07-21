import React from 'react'
import {Button} from './common/Button'
import header from '../JScode/header'

let resultDiv
export const Results = (props) => {
    const headerObj= new header()

    const[isBigScreen,setisBigScreen]=React.useState(headerObj.getWindowWidth(window.innerWidth))
   React.useEffect(()=>{
        resultDiv= document.getElementById("result");
        console.log('resultDiv')
        console.log(resultDiv)
        console.log(resultDiv.style)
        console.log(resultDiv.style.height)

        // console.log(resultDiv[0])
        // console.log(resultDiv.style.height)
        
    },[isBigScreen])


    // const callBackButton = (linkText)=>{   
    //     headerObj.linkClicked(linkText)
    // }
    // let isBigScreen=headerObj.getWindowWidth(window.innerWidth);
    let reportWindowSize= ()=>{
 
        if(headerObj.getWindowWidth(window.innerWidth)!=isBigScreen){
             setisBigScreen(headerObj.getWindowWidth(window.innerWidth)) 
        } 
    }
    window.addEventListener('resize', reportWindowSize);  
let starsArray=[]
for(var star=0;star<props.rating;star++){
    starsArray.push(<i className="fa fa-star star-result" aria-hidden="true"></i>) 
}
let resultsCenterComponents;
if(isBigScreen){   
    resultsCenterComponents=(
        <React.Fragment>
        <div className="result-Center-wrapper">
        <div className="result-Center-Left-bottom">
        <Button    callBack={()=>headerObj.linkClicked("הצג חבילות נוספות למלון זה")}
        class1={"more-hotel-packeges"}
        >הצג חבילות נוספות למלון זה</Button>   
                       </div>
        <div className="result-Center-Right-up">
        <div className="result-headline">  
        <h3> {props.headline}</h3>      
       
        </div> 
        <div className="result-rating">
        { starsArray  } 
     </div>
     <section className="logistics">
        <div className="result-departue">
        <span className="hour"> {props.departueHour} | </span>
        <span className="date"> {props.departureDate}</span>
        <span className="sub-headline"> :יציאה</span>
  </div>
  
        <div className="result-arrival">
        <span className="hour"> {props.arrivalHour} | </span>
        <span className="date">{props.arrivalDate}</span>
        <span className="sub-headline"> :חזרה</span>
         </div>
         </section>
        <div className="result-nights-rooms-breakfast">
        {props.nights}  |{props.isBreakfast} 
        </div>

  </div> 
  </div>
  </React.Fragment>
    )
}else{
    resultsCenterComponents=(
        <React.Fragment>
        <div className="result-Center-Right-up">
        <div className="result-headline">  
        <h3> {props.headline}</h3>      
       
        {props.headline} </div> 
        <div className="result-rating">
        { starsArray  } 
     </div>
     <section className="logistics">
        <div className="result-departue">
        <span className="hour"> {props.departueHour} | </span>
        <span className="date"> {props.departureDate}</span>
        <span className="sub-headline"> :יציאה</span>
  </div>
  
        <div className="result-arrival">
        <span className="hour"> {props.arrivalHour} | </span>
        <span className="date">{props.arrivalDate}</span>

        <span className="sub-headline"> :חזרה </span>
         </div>
         </section>
         <div className="result-nights-rooms-breakfast">
         {props.nights}  |{props.isBreakfast} 
         </div>
 

            
          </div> 
           <div className="result-Center-Left-bottom">
           <Button callBack={()=>headerObj.linkClicked("הצג חבילות נוספות למלון זה")}
           class1={"more-hotel-packeges"}
           >הצג חבילות נוספות למלון זה</Button>
        </div> 
          </React.Fragment>
    )
}    

    return (
        <div id="result" className="result">
        <div className="result-Left">
        <div className="price">
       ${props.price}
        </div>
        <div className="priceDetails">
       מחיר ממוצע לאדם בחדר זוגי
         </div>
<Button callBack={()=>headerObj.linkClicked("פרטים נוספים")} 
class1={"moreDetails"}
>פרטים נוספים</Button> 
        </div>
        <div className="result-Center">
{resultsCenterComponents}  
        </div>

        <div className="result-Image">
        
        </div>
          
        </div>
    )
}
