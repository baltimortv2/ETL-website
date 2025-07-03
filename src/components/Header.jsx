import {motion} from 'framer-motion'
import {Menu,X} from 'lucide-react'
import {useState} from 'react'

export function Header(){
const [mobileMenuOpen,setMobileMenuOpen] = useState(false)

const toggleMobileMenu = () => {
setMobileMenuOpen(!mobileMenuOpen)
}

return (
<motion.header
className="header"
initial={{y:-100,opacity:0}}
animate={{y:0,opacity:1}}
transition={{duration:0.6,ease:[0.6,0.01,-0.05,0.95]}}
>
<div className="container">
<motion.div
className="logo"
whileHover={{scale:1.02}}
transition={{duration:0.15,ease:"easeOut"}}
>
<h1>ETL</h1>
</motion.div>

<nav className="nav">
<motion.a
href="#home"
whileHover={{y:-1}}
transition={{duration:0.15,ease:"easeOut"}}
>
Главная
</motion.a>
<motion.a
href="#products"
whileHover={{y:-1}}
transition={{duration:0.15,ease:"easeOut"}}
>
Продукция
</motion.a>
<motion.a
href="#solutions"
whileHover={{y:-1}}
transition={{duration:0.15,ease:"easeOut"}}
>
Решения
</motion.a>
<motion.a
href="#contact"
whileHover={{y:-1}}
transition={{duration:0.15,ease:"easeOut"}}
>
Контакты
</motion.a>
</nav>

<motion.button
className="mobile-menu-toggle"
onClick={toggleMobileMenu}
whileTap={{scale:0.95}}
transition={{duration:0.1}}
>
{mobileMenuOpen ? <X size={20}/> : <Menu size={20}/>}
</motion.button>
</div>

<motion.div
className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}
initial={false}
animate={{
opacity:mobileMenuOpen ? 1 : 0,
height:mobileMenuOpen ? 'auto' : 0
}}
transition={{duration:0.3,ease:"easeOut"}}
>
<nav className="nav">
<motion.a
href="#home"
onClick={toggleMobileMenu}
whileTap={{scale:0.98}}
>
Главная
</motion.a>
<motion.a
href="#products"
onClick={toggleMobileMenu}
whileTap={{scale:0.98}}
>
Продукция
</motion.a>
<motion.a
href="#solutions"
onClick={toggleMobileMenu}
whileTap={{scale:0.98}}
>
Решения
</motion.a>
<motion.a
href="#contact"
onClick={toggleMobileMenu}
whileTap={{scale:0.98}}
>
Контакты
</motion.a>
</nav>
</motion.div>
</motion.header>
)
} 