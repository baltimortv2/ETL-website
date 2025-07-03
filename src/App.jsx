import {ThemeProvider} from './contexts/ThemeContext'
import {ThemeToggle} from './components/ThemeToggle'
import {Header} from './components/Header'
import {Hero} from './components/Hero'
import './components/ThemeToggle.css'
import './components/Header.css'
import './components/Hero.css'

function App(){
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle/>
        <Header/>
        <main>
          <Hero/>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App 