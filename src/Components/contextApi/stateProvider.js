import React from 'react'
const Mytheme = React.createContext()
export default function stateProvider() {
    const [theme,setTheme] = useState("white")
  return (
    <div>
        <MyContext.Provider value={{theme,setTheme}}>
            <stateConsumer/>
        </MyContext.Provider>

    </div>
  )
}
export {Mytheme}
