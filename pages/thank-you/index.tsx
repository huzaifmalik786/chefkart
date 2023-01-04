import React from 'react'
import ThankYou from '../../components/Forms/ThankYou'

const style = {
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh'
}
const index = () => {
  return (
    <div style={style}>
        <div>
            <ThankYou />
        </div>
    </div>
  )
}

export default index