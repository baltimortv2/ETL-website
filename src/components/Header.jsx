import {motion} from 'framer-motion'
export function Header(){
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
</div>
</motion.header>
)
} 