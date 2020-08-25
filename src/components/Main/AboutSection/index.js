import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  max-width: 960px;
  margin: 0 auto;
  border-top: 2px solid #2C70FF;
  border-bottom : 2px solid #2C70FF;
  padding: 60px 0px;
  display: flex;
  flex-wrap: wrap;
`

const AboutWrapper = styled.div`
  flex: 2 1 300px;
  margin: 0 10px;
`

const ImageWrapper = styled.div`
  flex: 1 1 160px;
  margin: 0 10px;
`

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: .5em;
`

const Paragraph = styled.p`
  font-size: 1.25em;
  line-height: 1.4em;
  margin-bottom: 1em;
  color: #7C7C7C;
`

function AboutSection() {
  return (
    <Container id='about'>
        <AboutWrapper>
            <Title>Sobre</Title>
            <Paragraph>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições inegavelmente apropriadas objetivos.</Paragraph>
            <Paragraph>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições inegavelmente apropriadas objetivos.</Paragraph>
        </AboutWrapper>

        <ImageWrapper>
            {/* Referencing a local image with React: https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react */}
            <img src={require('../../../assets/img/sobre1.jpg')} alt='Sobre 1' />
        </ImageWrapper>

        <ImageWrapper>
            <img src={require('../../../assets/img/sobre2.jpg')} alt='Sobre 2' />
        </ImageWrapper>
    </Container>
  )
}

export default AboutSection
