import React from 'react'
import { Container } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {

  return (
    <Container sx={{
      maxHeight: '100vh',
    }}
      disableGutters
      maxWidth='xxl'
    >
      <Carousel
    
        autoPlay
        infiniteLoop
        showThumbs={false}
        showArrows={true}
      >
        <div style={{ width: '100%', height: '100vh' }}>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://media.qrtiger.com/blog/2023/07/feedback-qr-codejpg_800.webp" />
        </div>
        <div style={{ width: '100%', height: '100vh' }}>
          <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://cdn.vectorstock.com/i/500p/02/24/qr-code-verification-service-web-banner-isometric-vector-25710224.jpg" />
        </div>
       
      </Carousel>
    </Container>
  )
}

export default App
