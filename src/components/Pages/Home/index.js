import React from 'react'
import styled from 'styled-components'
import Menu from '../../Menu'
import Main from '../../Main'
import Footer from '../../Footer'

const Title = styled.h1`
  font-family: 'Nunito', sans-serif;
`

function Home() {
  return (
    <>
        <Menu />
        
        <Title>Novos valores e<br></br>Propriedades de CSS</Title>

        <Main />

        <Footer />
    </>
  )
}

export default Home
