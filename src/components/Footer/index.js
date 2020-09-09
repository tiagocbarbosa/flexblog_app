import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  display: flex;
  background: #2c70ff;
  height: 200px;
  align-items: center;
  
  a {
    flex: 1;
    text-align: center;
    font-size: 2.25em;
    color: #122ab2;
    cursor: pointer;
  }

  /* The a HTML tag could be a paragraph without a link to my LinkedIn. Here is it's CSS:
  p {
    flex: 1;
    text-align: center;
    font-size: 2.25em;
    color: #122ab2;
  } */
`

function Footer() {
  return (
    <Container>
        <a onClick={() => {
          window.open('https://www.linkedin.com/in/tiagocastrobarbosa/')
        }}>Designed by Origamid and developed by tiagocbarbosa.</a>
    </Container>
  )
}

export default Footer
