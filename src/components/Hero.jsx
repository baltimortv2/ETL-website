import {ArrowDown,Zap,Shield,Palette,Sparkles} from 'lucide-react'

export function Hero(){
return (
<section className="hero">
<div className="hero-bg">
<div className="gradient-orb orb-1"/>
<div className="gradient-orb orb-2"/>
</div>
<div className="container">
<div className="hero-content">
<h1 className="hero-title">
Светодиодная подсветка для
<span className="gradient-text">современной мебели</span>
</h1>
<p className="hero-subtitle">
Профессиональные LED решения для мебели и интерьера с безупречным качеством и энергоэффективностью
</p>
<div className="hero-buttons">
<button className="btn-primary">
<Sparkles size={16} style={{marginRight:'0.5rem'}}/>
Получить консультацию
</button>
<button className="btn-secondary">
Каталог продукции
</button>
</div>
</div>
<div className="hero-features">
<div className="feature-card">
<div>
<Zap className="feature-icon"/>
</div>
<h3>Энергоэффективность</h3>
<p>Современные LED технологии с минимальным энергопотреблением и максимальной яркостью</p>
</div>
<div className="feature-card">
<div>
<Shield className="feature-icon"/>
</div>
<h3>Долговечность</h3>
<p>Надежные решения со сроком службы до 50 000 часов и гарантией качества</p>
</div>
<div className="feature-card">
<div>
<Palette className="feature-icon"/>
</div>
<h3>Стильный дизайн</h3>
<p>Элегантная подсветка для любого интерьера с широким выбором цветовых решений</p>
</div>
</div>
</div>
<div className="scroll-indicator">
<ArrowDown size={20}/>
</div>
</section>
)
} 