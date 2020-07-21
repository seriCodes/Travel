import React from 'react'
import ResultsFilter from './ResultsFilter'
// import Radio from '@material-ui/core/Radio';
import RadioButtonsGroup from './RadioButtonsGroup'
import Sorters from './Sorters'
import Filter from '../JScode/filtersSorts/filterCode'
import Sort from '../JScode/filtersSorts/sortCode'

import header from '../JScode/header'
import {Results} from './Results'
import data from '../database'
import { FiltersContext} from '../contexts/FilterContext'
import { SorterContext} from '../contexts/SorterContext'

export const MainContent = () => {
    // console.log('data')
    // console.log(data)
    //     console.log(data.headline)
    //     console.log(data[1])
    
    const filterContext=React.useContext(FiltersContext) 
    const sorterContext=React.useContext(SorterContext) 
    // console.log('sorterContext')
    // console.log(sorterContext)

    // console.log(filterContext)

    const FilterObj= new Filter()
    const SortObj= new Sort()
     
  let hotelsFiltered= FilterObj.filter(data,filterContext.FiltersState)
console.log('sorterContext.sorterState main', sorterContext.sorterState)
console.log('hotelsFiltered main', hotelsFiltered)

  SortObj.sortHotels(hotelsFiltered,sorterContext.sorterState)
  const headerObj= new header()
    const[isBigScreen,setisBigScreen]=React.useState(headerObj.getWindowWidth(window.innerWidth)) 
    let filtersComponentRight;
let filtersComponentLeft;
    let reportWindowSize= ()=>{
         if(headerObj.getWindowWidth(window.innerWidth)!=isBigScreen){
            console.log('change f/m main', isBigScreen)
            setisBigScreen(headerObj.getWindowWidth(window.innerWidth)) 
        }
     }
    window.addEventListener('resize', reportWindowSize);

    if(isBigScreen){
        console.log('change f/m isBigScreen', isBigScreen)
        filtersComponentLeft=null
        filtersComponentRight=( 
                <ResultsFilter></ResultsFilter> )
    }else{
        filtersComponentRight=null
        filtersComponentLeft=( 
            <ResultsFilter></ResultsFilter> )
    } 

    
    return (
        <div className="MainContent-Container">
   
        <div className="MainContent"> 
        <div className="MainContent-left-AllScreens">
        <div className="ResultsFilter-up-small-Screen">
        {filtersComponentLeft}
        </div>

        <div className="Results-sorter-container">
       <Sorters></Sorters>
        </div>
        <div className="Results-declarer">תוצאות הסינון הן {hotelsFiltered.length} המלונות הבאים:</div>
        <div className="Results-container">
{
    hotelsFiltered.map((hotel,index)=>{
        return (
            <Results headline={hotel["headline"]} 
rating={hotel["rating"]}
departueHour={hotel["departureHour"]}
departureDate={hotel["departureDate"]}
arrivalHour={hotel["arrivalHour"]}

arrivalDate={hotel["arrivalDate"]}
isBreakfast={hotel["isBreakfast"]}
nights={hotel["nights"]}
price={hotel["price"]}
 ></Results>
 
        )
    }
    
    )

    
} 
        </div>
        
        </div>

        <div className="ResultsFilter-right-big-Screen">
        
        {filtersComponentRight}

        </div>
        </div> 
        </div>
    )
}
