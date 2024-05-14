import React, { useContext } from 'react'
import { themecontext } from './PlvUsecontext'

export default function PlvUsecontext2() {
    const theme=useContext(themecontext);
  return (
    <div className={theme + 'm-3'}>
        <h2>PlvUsecontext2</h2>
        <p>
            <b>2210900079</b>
            <b>Phan Lạc Việt</b>
            <i>K22CNT2</i>
        </p>
    </div>
  )
}
