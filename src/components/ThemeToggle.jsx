import {Sun,Moon} from 'lucide-react'
import {useTheme} from '../contexts/ThemeContext'
import {motion} from 'framer-motion'
export function ThemeToggle(){
const {theme,toggleTheme} = useTheme()
return (
<motion.button
onClick={toggleTheme}
className="theme-toggle"
whileHover={{scale:1.1}}
whileTap={{scale:0.9}}
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.3}}
>
<motion.div
animate={{rotate:theme==='dark'?180:0}}
transition={{duration:0.3}}
>
{theme==='dark'?<Sun size={20}/>:<Moon size={20}/>}
</motion.div>
</motion.button>
)
} 