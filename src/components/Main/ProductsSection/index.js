import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    max-width: 960px;
    margin: 60px auto;
`

const Title = styled.h1`
    font-size: 3em;
    margin: 0 10px 60px 10px;
`

const OuterWrapper = styled.div`
    display: flex;
    margin: 0 10px;
    flex-wrap: wrap;
    align-items: flex-end;
`

const InnerWrapper = styled.div`
    flex: 1 1 175px;
    margin: 0 10px;
    border-top: 5px solid;
`

const ProductTitle = styled.h2`
    color: #A4A4A4;
    background-color: #F7F7F7;
    font-size: 3em;
    padding: 60px 20px;
`

function ProductsSection() {
  return (
    <Container id='products'>
        <Title>Produtos</Title>
        <OuterWrapper>
            <InnerWrapper style={{borderTopColor: "#AE81FF"}}>
                <ProductTitle>Purple</ProductTitle>
                <img src={require('../../../assets/img/produtos1.jpg')} alt='Produtos 1' />
            </InnerWrapper>
            <InnerWrapper style={{borderTopColor: "#F9265E"}}>
                <ProductTitle>Pink</ProductTitle>
                <img src={require('../../../assets/img/produtos2.jpg')} alt='Produtos 2' />
            </InnerWrapper>
            <InnerWrapper style={{borderTopColor: "#66D9EB"}}>
                <ProductTitle>Blue</ProductTitle>
                <img src={require('../../../assets/img/produtos3.jpg')} alt='Produtos 3' />
            </InnerWrapper>
        </OuterWrapper>
    </Container>
  )
}

export default ProductsSection
