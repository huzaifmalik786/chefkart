import React from 'react'
import Founder from '../../components/AboutUs/Founder'
import Hero from '../../components/AboutUs/Hero'
import Mission from '../../components/AboutUs/Mission'
import Vision from '../../components/AboutUs/Vision'
import ContactForm from '../../components/AboutUs/ContactForm'
import Facts from '../../components/homepage/Facts'
import Layout from '../../components/layouts/Layout'
import Social from '../../components/AboutUs/Social'
import Gallery from '../../components/AboutUs/Gallery'

const index = () => {
  return (
    <Layout>
        <Hero />
        <Vision />
        <Mission />
        <Facts bgcolor='#2D4739' color='#ffffff' px="4.44vw" py="5.55vw" />
        <Founder />
        <Gallery />
        <ContactForm />
        <Social />
    </Layout>
  )
}

export default index