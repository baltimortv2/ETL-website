import {Sun,Moon} from 'lucide-react'
import {useTheme} from '../contexts/ThemeContext'
import {motion} from 'framer-motion'
export function ThemeToggle(){
const {theme,toggleTheme} = useTheme()
return (
<motion.button
onClick={toggleTheme}
className="theme-toggle"
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
transition={{duration:0.3,ease:"easeOut"}}
>
<motion.div
animate={{rotate:theme==='dark'?0:180}}
transition={{duration:0.3,ease:"easeOut"}}
>
{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}
</motion.div>
</motion.button>
)
} 