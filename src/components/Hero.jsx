import {motion} from 'framer-motion'
import {ArrowDown,Lightbulb,Home,Palette,Sparkles,Zap,Shield} from 'lucide-react'

const fadeInUp = {
  initial:{y:30,opacity:0},
  animate:{y:0,opacity:1}
}

const staggerContainer = {
  animate:{
    transition:{
      staggerChildren:0.1
    }
  }
}

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
}

export function Hero(){
return (
<motion.section
className="hero"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.8,ease:"easeOut"}}
>
<div className="hero-bg">
<motion.div
className="gradient-orb orb-1"
animate={{scale:[1,1.1,1],rotate:[0,180,360]}}
transition={{duration:20,repeat:Infinity,ease:"linear"}}
/>
<motion.div
className="gradient-orb orb-2"
animate={{scale:[1.1,1,1.1],rotate:[360,180,0]}}
transition={{duration:25,repeat:Infinity,ease:"linear"}}
/>
</div>
<div className="container">
<motion.div
className="hero-content"
variants={staggerContainer}
initial="initial"
animate="animate"
>
<motion.h1
className="hero-title"
variants={fadeInUp}
transition={{duration:0.8,ease:[0.6,0.01,-0.05,0.95]}}
>
Светодиодная подсветка для
<span className="gradient-text">современной мебели</span>
</motion.h1>
<motion.p
className="hero-subtitle"
variants={fadeInUp}
transition={{duration:0.8,ease:[0.6,0.01,-0.05,0.95]}}
>
Профессиональные LED решения для мебели и интерьера с безупречным качеством и энергоэффективностью
</motion.p>
<motion.div
className="hero-buttons"
variants={fadeInUp}
transition={{duration:0.8,ease:[0.6,0.01,-0.05,0.95]}}
>
<motion.button
className="btn-primary"
whileHover={{scale:1.02,y:-2}}
whileTap={{scale:0.98}}
transition={{duration:0.15,ease:"easeOut"}}
>
<Sparkles size={16} style={{marginRight:'0.5rem'}}/>
Получить консультацию
</motion.button>
<motion.button
className="btn-secondary"
whileHover={{scale:1.02,y:-2}}
whileTap={{scale:0.98}}
transition={{duration:0.15,ease:"easeOut"}}
>
Каталог продукции
</motion.button>
</motion.div>
</motion.div>
<motion.div
className="hero-features"
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8,delay:0.4,ease:"easeOut"}}
>
<motion.div
className="feature-card"
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.2,ease:"easeOut"}}
>
<motion.div animate={floatingAnimation}>
<Zap className="feature-icon"/>
</motion.div>
<h3>Энергоэффективность</h3>
<p>Современные LED технологии с минимальным энергопотреблением и максимальной яркостью</p>
</motion.div>
<motion.div
className="feature-card"
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.2,ease:"easeOut"}}
>
<motion.div animate={floatingAnimation}>
<Shield className="feature-icon"/>
</motion.div>
<h3>Долговечность</h3>
<p>Надежные решения со сроком службы до 50 000 часов и гарантией качества</p>
</motion.div>
<motion.div
className="feature-card"
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.2,ease:"easeOut"}}
>
<motion.div animate={floatingAnimation}>
<Palette className="feature-icon"/>
</motion.div>
<h3>Стильный дизайн</h3>
<p>Элегантная подсветка для любого интерьера с широким выбором цветовых решений</p>
</motion.div>
</motion.div>
</div>
<motion.div
className="scroll-indicator"
animate={{y:[0,8,0]}}
transition={{duration:2,repeat:Infinity,ease:"easeInOut"}}
>
<ArrowDown size={20}/>
</motion.div>
</motion.section>
)
} 