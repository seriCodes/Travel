class Filter{
    constructor(){

    }
    filter(hotels,filter){
        // console.log('hotels')
        // console.log(hotels)
        // console.log(filter)
        // let rating
        let filteredHotels=[]
        for(var hotel=0;hotel<hotels.length; hotel++){
            // console.log('in for')
            // console.log(filter.rating)
            // console.log(hotels[hotel].rating)
            // console.log(filter.rating.includes(Number(hotels[hotel].rating)) )

if(filter.rating.includes(Number(hotels[hotel].rating))){
    filteredHotels.push(hotels[hotel])
    // console.log('in if')
}
        }
let maxPrice, minPrice;
if(filter.priceRange[0]> filter.priceRange[1]){
    maxPrice=filter.priceRange[0];
    minPrice=filter.priceRange[1]
} else{
    maxPrice=filter.priceRange[1];
    minPrice=filter.priceRange[0]

}
// console.log('maxPrice, minPrice')

// console.log(maxPrice)
// console.log(minPrice)


let filteredHotelsAfterPrice=[];
for(var hotel=0;hotel<filteredHotels.length; hotel++){ 
    // console.log('filteredHotels[hotel].price',filteredHotels[hotel].price)

        if(filteredHotels[hotel].price>=minPrice && filteredHotels[hotel].price<=maxPrice ){ 
            // console.log('hotel price',filteredHotels[hotel])
            filteredHotelsAfterPrice.push(filteredHotels[hotel])
        } 
// console.log('hotel counst',hotel)

    }
//     console.log('filteredHotelsAfterPrice')

    // console.log('filteredHotelsAfterPrice')
    // console.log(filteredHotelsAfterPrice)


    let filteredHotelsAfterHospitality=[];
    for(var hotel=0;hotel<filteredHotelsAfterPrice.length; hotel++){ 
        // console.log('filteredHotelsAfterPrice[hotel].isBreakfast',filteredHotelsAfterPrice[hotel].isBreakfast  )
        // console.log('filteredHotelsAfterPrice[hotel].nights',filteredHotelsAfterPrice[hotel].nights  )
        // console.log('filter.nights',filter.hospitality.breakFast)
        // console.log('filter.isBreakfast',filter.hospitality.sleep )    
            if(filteredHotelsAfterPrice[hotel].isBreakfast=="ארוחת בוקר"  && filter.hospitality.breakFast ){ 
                
            //     console.log('hotel price',filteredHotels[hotel])
            filteredHotelsAfterHospitality.push(filteredHotelsAfterPrice[hotel])
            } 
            if(filteredHotelsAfterPrice[hotel].isBreakfast=="חדר בלבד"  && filter.hospitality.sleep ){ 
                
                //     console.log('hotel price',filteredHotels[hotel])
                filteredHotelsAfterHospitality.push(filteredHotelsAfterPrice[hotel])
                } 
    // console.log('hotel counst',hotel)
    
        }

        console.log('filter.name',filter.name)

        let filteredHotelsAfterName=[];
    for(var hotel=0;hotel<filteredHotelsAfterHospitality.length; hotel++){ 
if(filter.name){
    console.log('filter.name.toLowerCase()',filter.name.toLowerCase())
}
if(
    (filter.name && //cancel error at first render
        filteredHotelsAfterHospitality[hotel].headline.toLowerCase().includes(filter.name.toLowerCase()) 
    )
    ||!filter.name){
    filteredHotelsAfterName.push(filteredHotelsAfterHospitality[hotel]) 
} 
} 
return filteredHotelsAfterName 
}

}
export default Filter;