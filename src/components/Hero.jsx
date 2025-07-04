import {motion} from 'framer-motion'
import {ArrowDown,Zap,Database,BarChart3} from 'lucide-react'
export function Hero(){
return (
<motion.section
className="hero"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:1}}
>
<div className="hero-bg">
<motion.div
className="gradient-orb orb-1"
animate={{scale:[1,1.2,1],rotate:[0,180,360]}}
transition={{duration:8,repeat:Infinity,ease:"linear"}}
/>
<motion.div
className="gradient-orb orb-2"
animate={{scale:[1.2,1,1.2],rotate:[360,180,0]}}
transition={{duration:10,repeat:Infinity,ease:"linear"}}
/>
</div>
<div className="container">
<motion.div
className="hero-content"
initial={{y:50,opacity:0}}
animate={{y:0,opacity:1}}
transition={{duration:0.8,delay:0.2}}
>
<motion.h1
className="hero-title"
initial={{y:30,opacity:0}}
animate={{y:0,opacity:1}}
transition={{duration:0.8,delay:0.4}}
>
Современные решения для
<span className="gradient-text">обработки данных</span>
</motion.h1>
<motion.p
className="hero-subtitle"
initial={{y:30,opacity:0}}
animate={{y:0,opacity:1}}
transition={{duration:0.8,delay:0.6}}
>
ETL процессы нового поколения с использованием передовых технологий
</motion.p>
<motion.div
className="hero-buttons"
initial={{y:30,opacity:0}}
animate={{y:0,opacity:1}}
transition={{duration:0.8,delay:0.8}}
>
<motion.button
className="btn-primary"
whileHover={{scale:1.05,y:-2}}
whileTap={{scale:0.98}}
>
Начать работу
</motion.button>
<motion.button
className="btn-secondary"
whileHover={{scale:1.05,y:-2}}
whileTap={{scale:0.98}}
>
Узнать больше
</motion.button>
</motion.div>
</motion.div>
<motion.div
className="hero-features"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:1,delay:1}}
>
<motion.div
className="feature-card"
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.3}}
>
<Zap className="feature-icon"/>
<h3>Высокая скорость</h3>
<p>Молниеносная обработка больших объемов данных</p>
</motion.div>
<motion.div
className="feature-card"
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.3}}
>
<Database className="feature-icon"/>
<h3>Надежность</h3>
<p>Безопасное хранение и передача данных</p>
</motion.div>
<motion.div
className="feature-card"
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.3}}
>
<BarChart3 className="feature-icon"/>
<h3>Аналитика</h3>
<p>Мощные инструменты для анализа данных</p>
</motion.div>
</motion.div>
</div>
<motion.div
className="scroll-indicator"
animate={{y:[0,10,0]}}
transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}
>
<ArrowDown size={24}/>
</motion.div>
</motion.section>
)
} 