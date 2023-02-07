import React from 'react'
import ThankYou from '../../components/Forms/ThankYou'
import UseWindowDimensions from '../../components/WindowSize'


const index = () => {
  const {width}= UseWindowDimensions()

const style = {
    backgroundColor: width<=450?"white":"#000000",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh'
}
  return (
    <div style={style} >
        <div>
            <ThankYou />
        </div>
    </div>
  )
}

export default index