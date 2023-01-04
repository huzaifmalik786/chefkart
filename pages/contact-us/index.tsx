import React from 'react'
import ContactBanner from '../../components/contact-us/ContactBanner'
import Map from '../../components/contact-us/Map'
import Story from '../../components/contact-us/Story'
import Layout from '../../components/layouts/Layout'


const index = () => {
  return (
    <Layout>
        <ContactBanner />
        <Map />
        <Story />
    </Layout>
  )
}

export default index