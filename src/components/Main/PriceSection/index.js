import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    background-color: #f7f7f7;
    padding: 60px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
`

const Wrapper = styled.div`
    flex: 1;
    border: 4px solid white;
    padding: 20px;    
    margin: 10px;
`

const Title = styled.h2`
    font-size: 3em;
    color: #a4a4a4;
    text-align: center;
    margin-top: 20px;
`

const Span = styled.span`
    max-width: 300px;
    margin: 20px auto;
    display: block;
    font-size: 2.5em;
    text-align: center;
    font-weight: bold;
    padding: 10px 0 5px 0;
    border-top: 3px solid white;
    border-bottom: 3px solid white;    
`

const Sup = styled.sup`
    font-size: 1.5rem;
`

const UnorderedList = styled.ul`
    max-width: 300px;
    margin: 20px auto;
    font-size: 1.25em;
    font-style: italic;
    color: #7c7c7c;
`

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    &::after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        background: #2c70ff;
        border-radius: 50%;
    }
`

const Button = styled.a`
    max-width: 300px;
    display: block;
    margin: 20px auto;
    border: 4px solid;
    color: #222222;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.25em;
    padding: 15px 0;
    text-align: center;
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
            <Button href='#'>Comprar</Button>
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
            <Button href='#'>Comprar</Button>
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
            <Button href='#'>Comprar</Button>
        </Wrapper>
    </Container>
  )
}

export default PriceSection
