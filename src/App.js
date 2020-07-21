import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppContainer} from './components/AppContainer';
import './style/styles.scss';
// style/styles.scss';
import RadioB from './playground/radioB';
import Select from './playground/Select';
import AccordionDemo from './playground/AccordionDemo';
import {FiltersProvider} from './contexts/FilterContext'
import {SorterProvider} from './contexts/SorterContext'
import {CircleDemo} from './playground/CircleDemo';
import InputMU from './playground/InputMU';





//    WithStyles 
import WithStyles from './playground/WithStyles';

// <RadioB></RadioB>
// <WithStyles></WithStyles> <FiltersProvider>  </FiltersProvider>
// <AccordionDemo></AccordionDemo>
//     <CircleDemo></CircleDemo>

function App() {
  return (
    <SorterProvider>
    <FiltersProvider>
    <div className="App">

    <AppContainer></AppContainer> 
    </div>
    </FiltersProvider>
    </SorterProvider>
  );
}

export default App;
