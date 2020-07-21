import React, {useState, useEffect} from 'react'
import {Button} from './common/Button'
import header from '../JScode/header'
import {BarsMenue} from './BarsMenue'

export const Header = (props) => {
    useEffect(()=>{
        if(isBigScreen){
    
            var x = document.getElementById("toggleDownMenue"); 
            if(x){
                // x.style.display = "none";
        
            }
        }        
    },[])
    
    const headerObj= new header()

    const[isBigScreen,setisBigScreen]=useState(headerObj.getWindowWidth(window.innerWidth))

    // const callBackButton = (linkText)=>{   
    //     headerObj.linkClicked(linkText)
    // }
    // let isBigScreen=headerObj.getWindowWidth(window.innerWidth);
    let reportWindowSize= ()=>{
        // console.log(window.innerWidth)

        if(headerObj.getWindowWidth(window.innerWidth)!=isBigScreen){
            // console.log('change', isBigScreen)
            setisBigScreen(headerObj.getWindowWidth(window.innerWidth))
            var elem = document.getElementById("toggleDownMenue-Container");
            if(!isBigScreen){
                elem.style.height="0rem"

            } 
        }
    // console.log(isBigScreen)
    }
    window.addEventListener('resize', reportWindowSize);
    const showMenuefunc= ()=>{
console.log('object')
    }
let bigScreenHeaderRight
if(isBigScreen){           
bigScreenHeaderRight=(
    <div className="header-right">
       
    <Button class1="header-hover" class2="sides-padding-added"
    callBack={()=>headerObj.linkClicked("צור קשר")}
    >
    צור קשר </Button>

    <Button class1="header-hover" class2="sides-padding-added"       
    callBack={()=>headerObj.linkClicked("טיולים מאורגנים")}
>
    טיולים מאורגנים </Button>

    <Button class1="header-hover" class2="sides-padding-added"
    callBack={()=>headerObj.linkClicked("טיסות")}
    >
    טיסות </Button>


    <Button class1="header-hover header-hover-fix" class2="sides-padding-added">
    חבילות נופש </Button>

    <Button class1="header-hover" class2="sides-padding-added" 
    callBack={()=>headerObj.linkClicked("דף הבית")}
    >דף הבית</Button> 
    </div>

)
}else{
    console.log('small')
    bigScreenHeaderRight=(
        <BarsMenue showMenue={showMenuefunc}></BarsMenue>
    )
}
    return (
        <div className="header-smallScreen-wrapper">

        <div className="header-wrapper">
        <div className="header">
        <div className="header-Left">
            <div className="header-Left-child ">
            
            <a className="Left-child-right" href="https://www.w3schools.com">Alray</a>

            </div>
            <div className="header-Left-child">
           $USD
            </div>
            </div>

            {bigScreenHeaderRight}

      
            </div>
            
</div>
<div className="toggleDownMenue-Container" id="toggleDownMenue-Container">

<div className="toggleDownMenue" id="toggleDownMenue">

<Button class1="header-hover" class2="sides-padding-added" 
callBack={()=>headerObj.linkClicked("דף הבית")}
>דף הבית</Button>

<Button class1="header-hover header-hover-fix" class2="sides-padding-added">
חבילות נופש </Button>

<Button class1="header-hover" class2="sides-padding-added"
callBack={()=>headerObj.linkClicked("טיסות")}
>
טיסות </Button>




<Button class1="header-hover" class2="sides-padding-added"       
callBack={()=>headerObj.linkClicked("טיולים מאורגנים")}
>
טיולים מאורגנים </Button>

<Button class1="header-hover" class2="sides-padding-added"
callBack={()=>headerObj.linkClicked("צור קשר")}
>
צור קשר </Button>
</div>
</div>

</div>

    )
}
