import {ThemeProvider} from './contexts/ThemeContext'
import {ThemeToggle} from './components/ThemeToggle'
import {Header} from './components/Header'
import {Hero} from './components/Hero'
import {Products} from './components/Products'
import {Footer} from './components/Footer'
import './components/ThemeToggle.css'
import './components/Header.css'
import './components/Hero.css'
import './components/Products.css'
import './components/Footer.css'

function App(){
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle/>
        <Header/>
        <main>
          <Hero/>
          <Products/>
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  )
}

export default App 