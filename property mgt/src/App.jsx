import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from "./scenes/dashboard";
import Invoices from "./scenes/Invoices";
import Contacts from "./scenes/Contacts";

// import Bar from "./scenes/bar";
// import Form from "./scenes/Form";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calendar from"./scenes/Calendar"

import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'
import Team from './scenes/Teams'
import Form from './scenes/Form'
import { FAQ } from './scenes/FAQ'
import Bar from './scenes/Bar'
import Pie from './scenes/Pie'
import { Line } from './scenes/Line'
import Geo from './scenes/Geo'
import Calendar from './scenes/Calendar'
// import { Calendart } from './scenes/Calendart'


function App() {
  const[theme,colorMode]=useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
    <div className="App" style={{display:"flex"}}>
      <Sidebar/>
<main className='content'>
<Topbar/>

    <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/invoices' element={<Invoices/>}/>
      <Route path='/Bar' element={<Bar/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/line' element={<Line/>}/>
      <Route path='/pie' element={<Pie/>}/>
      <Route path='/FAQ' element={<FAQ/>}/>
      <Route path='/geography' element={<Geo/>}/> 
      <Route path='/Calendar' element={<Calendar/>}/>
    </Routes>

</main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
