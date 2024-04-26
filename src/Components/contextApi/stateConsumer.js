import React, { useState } from 'react'
import { MyContext } from './stateProvider'
export default function stateConsumer() {
    const {theme,setTheme} = useState(MyContext)
    
  return (
   <div style={theme}>
    
    <button>Dark mode</button>
   </div>
  )
}
