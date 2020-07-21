class Sort{
    constructor(){

    }


sortHotels(hotels,sortSelected){
// alert('dsa')

const sortCheap = (hotelA,hotelB)=>{
 return hotelA.price-hotelB.price;
}
const sortExpensive = (hotelA,hotelB)=>{ 
return hotelB.price- hotelA.price ;
}
const sortRatingHigh = (hotelA,hotelB)=>{ 
    return hotelB.rating- hotelA.rating ;
    }
 const sortRatingLow = (hotelA,hotelB)=>{ 
        return hotelA.rating- hotelB.rating ;
        }

  const sortLucrative = (hotelA,hotelB)=>{ 

  return (hotelA.price/hotelA.rating)-(hotelB.price/hotelB.rating) ;
            }
    switch (sortSelected) {
      case "sortCheap":
        hotels.sort(sortCheap);
        break;
      case "sortExpensive":
        hotels.sort(sortExpensive);
        break;
      case "sortRatingHigh":
        hotels.sort(sortRatingHigh);
        break;

      case "sortRatingLow":
        hotels.sort(sortRatingLow);
        break;
        case "sortLucrative":
            hotels.sort(sortLucrative);
            break;
    
      default:
        console.log("sortSelected",sortSelected)
        alert("bug f/m sort code",sortSelected );
    }

// hotels.sort(sortCheap)
// hotels.sort(sortExpensive)
// hotels.sort(sortRatingHigh)
// hotels.sort(sortRatingLow)



let swapHolder;
for(var hotel=0;hotel<hotels.length; hotel++){
    //cheap-top-left


// if(hotel>0 && hotels[hotel-1].price>hotels[hotel].price){


//     // console.log('hotels[hotel-1]')

//     // console.log(hotels[hotel-1])
//     // console.log(hotels[hotel])

//     // swapHolder=hotels[hotel-1] ;
//     // console.log(swapHolder)

//     // hotels[hotel-1]=hotels[hotel];
//     // console.log('after swap')
//     // console.log(hotels[hotel-1])

//     // hotels[hotel]=swapHolder;
//     // console.log(hotels[hotel])

// }


}


}



handleSort(sorter){
    console.log('sorter')
    // alert(sorter)
    console.log(sorter)
switch(sorter){
    case 'PRICE_LOW':
console.log('PRICE_LOW in switch')

    break;

    default:
        console.log('a bug')

}

}
}
export default Sort;