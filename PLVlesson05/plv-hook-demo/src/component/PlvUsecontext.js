import React, { createContext, useContext, useState } from 'react'
import PlvUsecontext1 from './PlvUsecontext1';
export const themecontext = createContext()
export default function PlvUsecontext() {
    const [theme,settheme]=useState('red');
    const plvhandlechage = () =>{
        settheme(theme=='red'?'blue':'red');
    }
  return (
    <themecontext.Provider value={theme}>
    <div className='alert'>
        <h2>Demo use context</h2>
        <PlvUsecontext1/>
        <button onClick={plvhandlechage}>Change bgcolor</button>
    </div>
    </themecontext.Provider>
  )
}
