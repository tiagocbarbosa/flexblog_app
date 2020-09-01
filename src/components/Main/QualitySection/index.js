import React from 'react'
import styled from 'styled-components'
import './style.css'

const Container = styled.section`
  max-width: 960px;
  margin: 60px auto;
  display: flex;
  flex-wrap: wrap;
`
const Wrapper = styled.div`
  flex: 1 1 300px;
  margin: 20px 10px;
`

const Title = styled.h2`
  font-size: 2.25em;
  color: #A4A4A4;
  margin-bottom: 20px;

  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 30px;
    margin-right: 10px;
    background-color: blue;
  }
`

const Paragraph = styled.p`
  font-size: 1.25em;
  line-height: 1.4;
  color: #7C7C7C;
`

function QualitySection() {
  return (
    <Container id='quality'>
        <Wrapper>
          <Title>Inteligente</Title>
          <Paragraph>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições</Paragraph>
        </Wrapper>

        <Wrapper>
          <Title>Compacto</Title>
          <Paragraph>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições inegavelmente apropriadas</Paragraph>
        </Wrapper>

        <Wrapper>
          <Title>Econômico</Title>
          <Paragraph>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições</Paragraph>
        </Wrapper>

        <Wrapper>
          <Title>Transparente</Title>
          <Paragraph>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições</Paragraph>
        </Wrapper>

        <Wrapper>
          <Title>Opaco</Title>
          <Paragraph>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições inegavelmente apropriadas</Paragraph>
        </Wrapper>

        <Wrapper>
          <Title>Sustentável</Title>
          <Paragraph>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições</Paragraph>
        </Wrapper>
    </Container>
  )
}

export default QualitySection
