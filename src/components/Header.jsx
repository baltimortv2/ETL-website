import {motion} from 'framer-motion'
export function Header(){
return (
<motion.header
className="header"
initial={{y:-100,opacity:0}}
animate={{y:0,opacity:1}}
transition={{duration:0.8,ease:"easeOut"}}
>
<div className="container">
<motion.div
className="logo"
whileHover={{scale:1.05}}
transition={{duration:0.2}}
>
<h1>ETL</h1>
</motion.div>
<nav className="nav">
<motion.a
href="#home"
whileHover={{y:-2}}
transition={{duration:0.2}}
>
Главная
</motion.a>
<motion.a
href="#products"
whileHover={{y:-2}}
transition={{duration:0.2}}
>
Продукция
</motion.a>
<motion.a
href="#solutions"
whileHover={{y:-2}}
transition={{duration:0.2}}
>
Решения
</motion.a>
<motion.a
href="#contact"
whileHover={{y:-2}}
transition={{duration:0.2}}
>
Контакты
</motion.a>
</nav>
</div>
</motion.header>
)
} 