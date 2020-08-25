import React from 'react'
import styled from 'styled-components'
import Menu from '../../Menu'
import Main from '../../Main'
import Footer from '../../Footer'

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 60px 10px;  
`

const Title = styled.h1`
  font-size: 3em;
  line-height: 1;
`

function Home() {
  return (
    <>
        <Menu />        
        <Container>
          <Title>Novos valores e<br></br>Propriedades de CSS</Title>        
        </Container>     
        <Main />
        <Footer />
    </>
  )
}

export default Home
