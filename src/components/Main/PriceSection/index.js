import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    background-color: #f7f7f7;
    padding: 60px;
    display: flex;
    flex-wrap: wrap;
`

const Wrapper = styled.div`
    padding: 20px 40px;
    border: 3px solid white;
    margin: 10px;
    flex: 1;
`

const Title = styled.h2`
    font-size: 3em;
    color: #a4a4a4;
    text-align: center;
`

const Span = styled.span`
    max-width: 300px;
    font-size: 2.5em;
    font-weight: bold;
    text-align: center;
    display: block;
    padding: 10px 0;
    border-top: 3px solid white;
    border-bottom: 3px solid white;
    margin: 0 auto;
`

const Sup = styled.sup`
    font-size: 1.3rem;
`

const UnorderedList = styled.ul`
    max-width: 300px;
    padding: 20px 0;
    margin: 0 auto;
`

const ListItem = styled.li`
    font-style: italic;
    color: #7c7c7c;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        background: #2c70ff;
        border-radius: 50%;
    }
`

function PriceSection() {
  return (
    <Container id='price'>
        <Wrapper>
            <Title>Cobre</Title>
            <Span><Sup>R$</Sup>19</Span>
            <UnorderedList>
                <ListItem>Planos Ilimitados</ListItem>
                <ListItem>Acesso Restrito</ListItem>
                <ListItem>Conteúdo Secreto</ListItem>
                <ListItem>Suporte 24h</ListItem>
            </UnorderedList>
            <a href='#'>Comprar</a>
        </Wrapper>
        <Wrapper>
            <Title>Prata</Title>
            <Span><Sup>R$</Sup>39</Span>
            <UnorderedList>
                <ListItem>Planos Ilimitados</ListItem>
                <ListItem>Acesso Restrito</ListItem>
                <ListItem>Conteúdo Secreto</ListItem>
                <ListItem>Suporte 24h</ListItem>
                <ListItem>Compra Exclusiva</ListItem>
            </UnorderedList>
            <a href='#'>Comprar</a>
        </Wrapper>
        <Wrapper>
            <Title>Ouro</Title>
            <Span><Sup>R$</Sup>79</Span>
            <UnorderedList>
                <ListItem>Planos Ilimitados</ListItem>
                <ListItem>Acesso Restrito</ListItem>
                <ListItem>Conteúdo Secreto</ListItem>
                <ListItem>Suporte 24h</ListItem>
                <ListItem>Compra Exclusiva</ListItem>
                <ListItem>Download de Itens</ListItem>
            </UnorderedList>
            <a href='#'>Comprar</a>
        </Wrapper>
    </Container>
  )
}

export default PriceSection
