import {motion} from 'framer-motion'
import {Lightbulb,Home,Palette,Star,ArrowRight,Zap} from 'lucide-react'

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

export function Products(){
return (
<motion.section
className="products"
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.8,ease:"easeOut"}}
viewport={{once:true}}
>
<div className="container">
<motion.div
className="products-header"
variants={staggerContainer}
initial="initial"
whileInView="animate"
viewport={{once:true}}
>
<motion.h2
className="section-title"
variants={fadeInUp}
>
Наша продукция
</motion.h2>
<motion.p
className="section-subtitle"
variants={fadeInUp}
>
Широкий ассортимент LED решений для любых задач
</motion.p>
</motion.div>
<motion.div
className="products-grid"
variants={staggerContainer}
initial="initial"
whileInView="animate"
viewport={{once:true}}
>
<motion.div
className="product-card"
variants={fadeInUp}
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.2,ease:"easeOut"}}
>
<div className="product-image">
<Lightbulb className="product-icon"/>
</div>
<h3>Светодиодные ленты</h3>
<p>Гибкие LED ленты для подсветки мебели, полок, ниш. Различные цветовые температуры и мощности.</p>
<div className="product-features">
<span className="feature-tag">IP65</span>
<span className="feature-tag">5050 SMD</span>
<span className="feature-tag">12V/24V</span>
</div>
<motion.button
className="product-btn"
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
>
Подробнее <ArrowRight size={16}/>
</motion.button>
</motion.div>
<motion.div
className="product-card"
variants={fadeInUp}
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.2,ease:"easeOut"}}
>
<div className="product-image">
<Home className="product-icon"/>
</div>
<h3>Профили для лент</h3>
<p>Алюминиевые профили для защиты и рассеивания света. Различные формы и размеры.</p>
<div className="product-features">
<span className="feature-tag">Алюминий</span>
<span className="feature-tag">Рассеиватель</span>
<span className="feature-tag">Заглушки</span>
</div>
<motion.button
className="product-btn"
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
>
Подробнее <ArrowRight size={16}/>
</motion.button>
</motion.div>
<motion.div
className="product-card"
variants={fadeInUp}
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.2,ease:"easeOut"}}
>
<div className="product-image">
<Zap className="product-icon"/>
</div>
<h3>Блоки питания</h3>
<p>Надежные драйверы для LED лент. Различные мощности и степени защиты.</p>
<div className="product-features">
<span className="feature-tag">12V-24V</span>
<span className="feature-tag">30-300W</span>
<span className="feature-tag">IP20-IP67</span>
</div>
<motion.button
className="product-btn"
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
>
Подробнее <ArrowRight size={16}/>
</motion.button>
</motion.div>
<motion.div
className="product-card"
variants={fadeInUp}
whileHover={{y:-5,scale:1.02}}
transition={{duration:0.2,ease:"easeOut"}}
>
<div className="product-image">
<Palette className="product-icon"/>
</div>
<h3>Контроллеры RGB</h3>
<p>Умные контроллеры для цветной подсветки с поддержкой различных эффектов.</p>
<div className="product-features">
<span className="feature-tag">Wi-Fi</span>
<span className="feature-tag">Bluetooth</span>
<span className="feature-tag">RGB+W</span>
</div>
<motion.button
className="product-btn"
whileHover={{scale:1.05}}
whileTap={{scale:0.95}}
>
Подробнее <ArrowRight size={16}/>
</motion.button>
</motion.div>
</motion.div>
</div>
</motion.section>
)
} 