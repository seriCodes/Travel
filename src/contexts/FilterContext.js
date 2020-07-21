import React from 'react'
import filtersReducer from '../reducer/filtersReducer'
// '../reducer/filtersReducer'
var  FiltersContext =React.createContext()
export {FiltersContext}
const initialState={
    rating:[1,2,3,4,5],
    priceRange:[819,6000],
    hospitality:{
        sleep:true,
        breakFast:true,
    },
    name:null
}


const FiltersProvider=(props)=>{
    const  [FiltersState,FiltersDispatch] =React.useReducer(filtersReducer,initialState)
    console.log(FiltersState)
    console.log(FiltersDispatch)

    const valueProp={FiltersState,FiltersDispatch}
    console.log(valueProp)

    return(
        <FiltersContext.Provider value= {valueProp}>
        {props.children}
        </FiltersContext.Provider>
    )
}

export {FiltersProvider}