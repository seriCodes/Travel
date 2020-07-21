import React,{useState} from 'react'

let height=0
export const BarsMenue = (props) => {
    // const [height,setHeight] =useState(0)
     const [newRender,setnewRender] =useState(true)

    // var x = document.getElementById("toggleDownMenue");

    // if(height<15){
    //     // setHeight(height+0.1)
    //     height=  height+5.1
    //     x.style.height =height+ "rem"
    //     console.log('iter')

    // }
    // if(height<15){
    //     // myFunction()
    //     setnewRender(!newRender)

    // }
    function myFunction() {
        // props.showMenue()
        console.log('bars cl')
        var elem = document.getElementById("toggleDownMenue-Container");   
        // var width = 0;
        var id;
        let compareResult=elem.style.height;
        console.log(elem.style.height)
        if(compareResult && compareResult.includes("rem")){ 
            compareResult=Number(compareResult.slice(0,-3))
            console.log(compareResult)

        }
        if(compareResult<15){
            id= setInterval(frame, 10);
            function frame() {
                compareResult=Number(compareResult)
              if (compareResult == 15) {
                clearInterval(id);
              } else {
                compareResult=compareResult+0.5; 
                elem.style.height = compareResult + 'rem'; 
                console.log('bars else')
                console.log(compareResult)
                console.log(elem.style.height)

              }
            }
        }else{
            id= setInterval(frame, 10);
            function frame() {
              if (compareResult == 0) {
                clearInterval(id);
              } else {
                compareResult=compareResult-0.5; 
                elem.style.height = compareResult + 'rem'; 
                console.log('bars else')
    
              }
        }
    }
        

//         var x = document.getElementById("toggleDownMenue");
// console.log(x.style.display)
// x.style.height=height+"rem"
// console.log(x.children) 
// if(height<15){
//     // setHeight(height+0.1)
//     height=  height+1
//     x.style.height =height+ "rem"
//     console.log('height')
//     console.log(height)
//     setnewRender(!newRender)
// }

// if (x.style.height === "15rem") {
//       x.style.height = "0rem";
//     } else {
//       x.style.height = "15rem";
//     }

// do{
//     console.log('iter')
//     setHeight(height+1)
//     console.log(height+1)

// }while(height<15)


// if (x.style.display === "none") {
        //   x.style.display = "";
        // } else {
        //   x.style.display = "none";
        // }
      }
      //all icons come from the link tag in appContainer 
    return (
        <div>
       
        
        <div className="topnav">
        <div id="myLinks">
       
        {props.children}
      </div>
      </div>
      <a href="javascript:void(0);" className="icon" onClick={myFunction}>
      <div className="bars-style">
    <i className="fa fa-bars" aria-hidden="true"></i>
    </div>
    </a>
  

        </div>
    )
}
//       <i className="fa fa-bars bars-style"></i>
