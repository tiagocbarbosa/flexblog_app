import React from 'react'
import styled from 'styled-components'

const SuperInfoBg = styled.div`
  background-color: #122AB2;
  color: white;
`

const SuperInfo = styled.div`
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10px;
`

const Button = styled.a`
  color: white;
  margin: 0 10px 10px 10px;
`

const Paragraph = styled.p`
  margin: 0 10px 10px 10px;
`

function SuperHead() {
  return (
    <SuperInfoBg>
        <SuperInfo>
            <Paragraph>Seg / Sex - 08:00 às 18:00</Paragraph>
            <Button href='tel:+552199999999'>+55 21 9999-9999</Button>
            <Paragraph>Av. Ali Perto, 330, Botafogo - RJ</Paragraph>
        </SuperInfo>
    </SuperInfoBg>
  )
}

export default SuperHead
