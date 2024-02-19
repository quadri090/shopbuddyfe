import React from 'react'
import Testimonial from './Testimonial'
import CtaBanner from './CtaBanner'
import Services from './Services'

export default function CallToAction() {
  return (
    <section className='flex flex-col gap-4 md:grid grid-cols-4 m-1 mt-16'>
        <Testimonial />
        <div className='col-span-2'>
            <CtaBanner/>
        </div>
        <Services />
    </section>
  )
}
