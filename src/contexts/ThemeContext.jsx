import {createContext,useContext,useEffect,useState} from 'react'
const ThemeContext = createContext()
export function ThemeProvider({children,defaultTheme='dark',storageKey='etl-theme'}){
const [theme,setTheme] = useState(()=>(localStorage.getItem(storageKey))||defaultTheme)
useEffect(()=>{
const root = window.document.documentElement
root.setAttribute('data-theme',theme)
localStorage.setItem(storageKey,theme)
},[theme])
const value = {theme,setTheme:newTheme=>setTheme(newTheme),toggleTheme:()=>setTheme(prev=>prev==='dark'?'light':'dark')}
return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export const useTheme = ()=>{
const context = useContext(ThemeContext)
if(!context) throw new Error('useTheme must be used within ThemeProvider')
return context
} 