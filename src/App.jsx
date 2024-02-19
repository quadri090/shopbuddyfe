import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Categories from './components/categories'
import ItemsSmContainer from './components/ItemsSmContainer'
import Layout from './components/Layout'
import CallToAction from './components/CallToAction'
import BlogContentContainer from './components/BlogContent'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='md:max-w-7xl p-[15px] mx-auto relative'>
        <Header/>
        <Menu/>
        <Hero/>
        <Categories />
        <ItemsSmContainer/>
        <Layout />
        <CallToAction />
        <BlogContentContainer />
      </div>
        <Footer />
    </>
  )
}

export default App
