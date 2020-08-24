import React from 'react'
import styled from 'styled-components'

function AboutSection() {
  return (
    <section id='about'>
        <div>
            <h1>Sobre</h1>
            <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições inegavelmente apropriadas objetivos.</p>
            <p>O que temos que ter sempre em mente é que a determinação clara de objetivos afeta positivamente a correta previsão das condições inegavelmente apropriadas objetivos.</p>
        </div>

        <div>
            {/* Referencing a local image with React: https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react */}
            <img src={require('../../../assets/img/sobre1.jpg')} alt='Sobre 1' />
        </div>

        <div>
            <img src={require('../../../assets/img/sobre2.jpg')} alt='Sobre 2' />
        </div>
    </section>
  )
}

export default AboutSection
