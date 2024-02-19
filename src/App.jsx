// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import Hero from './components/Hero'
import Categories from './components/categories'
import ItemsSmContainer from './components/ItemsSmContainer'
import Layout from './components/Layout'
import CallToAction from './components/CallToAction'
import BlogContentContainer from './components/BlogContent'

function App() {

  return (
    <>
      <div className='w-full relative'>
        <Header/>
        <Menu/>
        <Hero/>
        <Categories />
        <ItemsSmContainer/>
        <Layout />
        <CallToAction />
        <BlogContentContainer />
      </div>
    </>
  )
}

export default App
