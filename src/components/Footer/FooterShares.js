import React from 'react'
import {Button} from "../common/Button";

export const FooterShares = () => {


    //  <i class='fas fa-arrow-up' style='font-size:36px'></i>
    return (
        <div className="FooterShares">
 

 <div className="Social-Media-Container">
 <div class="circle-Button arrow">
 <i class="fa fa-arrow-up" aria-hidden="true" onClick={()=>{
       window.scrollTo({top: 0, behavior: 'smooth'});

 }}></i>
 </div> 

 <div class="circle-Button ">
 <a href="#" class="fa fa-instagram"></a> 
 </div> 
 <div class="circle-Button">
 <a href="#" class="fa fa-facebook"></a>
 </div> 
 <div class="circle-Button">
 <a href="#" class="fa fa-twitter"></a>
 </div> 
 <div class="circle-Button">
 <a href="#" class="fa fa-google"></a>
 </div>  

         </div>
         <div className="CC-Container">
         © 2018 כל הזכויות שמורות Alray
         </div>

        </div>
    )
}
