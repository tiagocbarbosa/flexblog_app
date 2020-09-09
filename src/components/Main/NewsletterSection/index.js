import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  background: #f7f7f7;
	padding: 60px calc((100% - 960px) / 2 );
	display: flex;
	flex-wrap: wrap;
`

const Wrapper = styled.div`
  flex: 1 1 240px;
	margin: 0 10px;

  h1 {
    font-size: 3em;
    color: #a4a4a4;
  }

  p{
    font-size: 1.25em;
    font-style: italic;
    max-width: 230px;
    color: #7c7c7c;
    margin-bottom: 10px;
  }
`

const Form = styled.form`
  flex: 2 1 260px;
	margin: 0 10px;
	align-self: center;
	display: flex;
	flex-wrap: wrap;

  input {
    flex: 3 1 200px;
    font-size: 1.25em;
    color: #7c7c7c;
    font-style: italic;
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    border: 4px solid #2c70ff;
    background: transparent;
    padding: 15px 10px;
    margin: 0px;
    border-radius: 0px;
  }

  button {
    flex: 1 1 200px;
    font-family: "Nunito", Helvetica, Arial, sans-serif;
    font-size: 2.25em;
    font-weight: bold;
    text-transform: uppercase;
    background: #2c70ff;
    color: white;
    margin: 0px;
    cursor: pointer;
    border: 0px;
    padding: 15px 10px;

    @media (max-width: 600px) {
	    & {
		  font-size: 1.5em;
	    }
    }
  }
`

const handleClick = (e) => {
  e.preventDefault()
  window.open('https://www.linkedin.com/in/tiagocastrobarbosa/')
  window.scrollTo(0,0)
}

function NewsletterSection() {
  return (
    <Container id='contact'>
      <Wrapper>
        <h1>Newsletter</h1>
        <p>assine e fique por dentro das novidades</p>
      </Wrapper>
      <Form>
        <input type='text' placeholder='Seu e-mail'></input>
        <button type='submit' onClick={handleClick}>Assinar</button>        
      </Form>
    </Container>
  )
}

export default NewsletterSection
