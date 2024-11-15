import './App.css'
import Company from './components/Company'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Work from './components/Work'


function App() {
  

  return (
    <div className='lg:mt-[3.75rem] mt-[1.875rem] '>
      <Navbar/>
      <Hero/>
      <Company/>
      <Services/>
      <Work/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
