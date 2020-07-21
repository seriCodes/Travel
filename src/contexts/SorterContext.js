import React from 'react'
import sorterReducer from '../reducer/sorterReducer'
 var  SorterContext =React.createContext()
export {SorterContext}
const initialState='sortCheap' 

const SorterProvider=(props)=>{
    const  [sorterState,SorterDispatch] =React.useReducer(sorterReducer,initialState)
    console.log('sorterState')

    console.log(sorterState)
    console.log(SorterDispatch)

    const valueProp={sorterState,SorterDispatch}
    console.log(valueProp)

    return(
        <SorterContext.Provider value= {valueProp}>
        {props.children}
        </SorterContext.Provider>
    )
}

export {SorterProvider}