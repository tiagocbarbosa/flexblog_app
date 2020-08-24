import React from 'react'
import SuperHead from './SuperHead'
import styled from 'styled-components'

const Header = styled.header`
    background-color: #2C70FF;
`

const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 15px 0;    
`

const Logo = styled.a`
    color: white;
    font-size: 2.25em;
    font-weight: bold;
    margin: 0 10px;
`

const UnorderedList = styled.ul`
    display: flex;
    flex-wrap: wrap;
`

const Button = styled.a`
    color: white;
    font-size: 1.25em;
    display: block;
    padding: 10px;

    &:hover {
        color: #122AB2;
    }
`

function Menu() {
  return (
    <>
        <SuperHead />
        <Header>
            <Container>
                <div>
                    <Logo href='#'>FlexBlog</Logo>
                </div>

                <nav>
                    <UnorderedList>
                        <li><Button href='#about'>Sobre</Button></li>
                        <li><Button href='#products'>Produtos</Button></li>
                        <li><Button href='#price'>Preço</Button></li>
                        <li><Button href='#contact'>Contato</Button></li>
                    </UnorderedList>
                </nav>
            </Container>
        </Header>
    </>
  )
}

export default Menu
