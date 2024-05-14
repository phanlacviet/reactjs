import React,{useState} from 'react'
import PLVusetsate from './component/PLVusetsate'
import PlvUseEffect from './component/PlvUseEffect'
import PlvUsecontext from './component/PlvUsecontext'
import './App.css'
export default function 
() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Phan Lạc Việt-Hook</h1>
      <PLVusetsate/>
      <hr/>
      <PlvUseEffect/>
      <hr/>
      <PlvUsecontext/>
    </div>
  )
}
