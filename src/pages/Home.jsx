import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Servicios from '../components/Servicios'
import Portafolio from '../components/Portafolio'
import Contacto from '../components/Contacto'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.classList.add('fade-in-up')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    document.querySelectorAll('section').forEach((section) => {
      section.style.opacity = '0'
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Hero />
      <Servicios />
      <Portafolio />
      <Contacto />
    </>
  )
}
