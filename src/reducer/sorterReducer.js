
const sorterReducer= (state,action)=>{
    // state= action.payload
    console.log('action.payload sorter reducer ', action.payload)
    return action.payload;
    // switch(action.type){
    //     case 'RATING':
    //         console.log('RATING')
    //         console.log(action.payload)
    //         if(action.payload.isCheck){
    //             state.rating[action.payload.rating-1]=action.payload.rating
    //             console.log(state.rating)
    //         }else{
    //             state.rating[action.payload.rating-1]=null
    //             console.log(state.rating)

    //         }

    //     return{...state}
    //     case 'PRICE_RANGE':
    //         console.log(action.payload)
    //         state.priceRange=action.payload
    //     return{...state}
    //     case 'HOSPITALITY':
    //         if(action.payload.subType=='Breakfast'){
    //             state.hospitality.breakFast=action.payload.selected
    //         }else{
    //             state.hospitality.sleep=action.payload.selected
    //         }
    //     return{...state}
           
    //     case 'NAME':
    //         state.name=action.payload
    //         return{...state}

    //     default:
    //         console.log( "bug")
    //         return null
 
    // }

}
export default sorterReducer