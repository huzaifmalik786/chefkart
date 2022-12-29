import React from 'react'
import ContactBanner from '../../components/contact-us/ContactBanner'
import Story from '../../components/contact-us/Story'
import ContactForm from '../../components/Forms/ContactForm'
import Layout from '../../components/layouts/Layout'


const index = () => {
  return (
    <Layout>
        <ContactBanner />
        <Story />
    </Layout>
  )
}

export default index