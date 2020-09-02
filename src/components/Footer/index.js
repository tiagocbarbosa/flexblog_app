import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  background: #2c70ff;
  height: 200px;
  align-items: center;
  
  /* ...or this style
  background: #2c70ff;
  padding: 60px; */
  
  p {
    flex: 1;
    text-align: center;
    font-size: 2.25em;
    color: #122ab2;

    /* ...or this style
    text-align: center;
    font-size: 2.25em;
    color: #122ab2;
    margin-bottom: 10px; */
  }
`

function Footer() {
  return (
    <Container>
        <p>FlexBlog © Todos os direitos reservados.</p>
    </Container>
  )
}

export default Footer
