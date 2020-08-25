import React from 'react'
// import styled from 'styled-components'

function NewsletterSection() {
  return (
    <section id='contact'>
      <div>
        <h1>Newsletter</h1>
        <p>assine e fique por dentro das novidades</p>
      </div>
      <input type='text' placeholder='Seu e-mail'></input>
      <button type='submit'>Assinar</button>
    </section>
  )
}

export default NewsletterSection
