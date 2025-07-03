import {motion} from 'framer-motion'
import {Mail,Phone,MapPin,Clock,ArrowUp} from 'lucide-react'

export function Footer(){
const scrollToTop = () => {
window.scrollTo({top:0,behavior:'smooth'})
}

return (
<footer className="footer">
<div className="container">
<div className="footer-content">
<motion.div
className="footer-section"
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>
<h3>ETL Solutions</h3>
<p>Профессиональные светодиодные решения для современной мебели и интерьера.</p>
<div className="footer-social">
<motion.button
className="social-btn"
whileHover={{scale:1.1}}
whileTap={{scale:0.9}}
>
<Mail size={16}/>
</motion.button>
<motion.button
className="social-btn"
whileHover={{scale:1.1}}
whileTap={{scale:0.9}}
>
<Phone size={16}/>
</motion.button>
</div>
</motion.div>
<motion.div
className="footer-section"
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.1}}
viewport={{once:true}}
>
<h4>Контакты</h4>
<div className="contact-item">
<Phone size={16}/>
<span>+7 (495) 123-45-67</span>
</div>
<div className="contact-item">
<Mail size={16}/>
<span>info@etl-solutions.ru</span>
</div>
<div className="contact-item">
<MapPin size={16}/>
<span>г. Москва, ул. Примерная, 123</span>
</div>
<div className="contact-item">
<Clock size={16}/>
<span>Пн-Пт: 9:00-18:00</span>
</div>
</motion.div>
<motion.div
className="footer-section"
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.2}}
viewport={{once:true}}
>
<h4>Услуги</h4>
<ul className="footer-links">
<li><a href="#products">Светодиодные ленты</a></li>
<li><a href="#products">Профили и рассеиватели</a></li>
<li><a href="#products">Блоки питания</a></li>
<li><a href="#products">Контроллеры RGB</a></li>
<li><a href="#consultation">Консультация</a></li>
<li><a href="#installation">Монтаж</a></li>
</ul>
</motion.div>
<motion.div
className="footer-section"
initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6,delay:0.3}}
viewport={{once:true}}
>
<h4>Информация</h4>
<ul className="footer-links">
<li><a href="#about">О компании</a></li>
<li><a href="#portfolio">Портфолио</a></li>
<li><a href="#warranty">Гарантия</a></li>
<li><a href="#delivery">Доставка</a></li>
<li><a href="#support">Техподдержка</a></li>
</ul>
</motion.div>
</div>
<div className="footer-bottom">
<p>&copy; 2024 ETL Solutions. Все права защищены.</p>
<motion.button
className="scroll-top"
onClick={scrollToTop}
whileHover={{scale:1.1,y:-2}}
whileTap={{scale:0.9}}
>
<ArrowUp size={16}/>
</motion.button>
</div>
</div>
</footer>
)
} 