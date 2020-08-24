import React from 'react'
// import styled from 'styled-components'

function ProductsSection() {
  return (
    <section id='products'>
        <h1>Produtos</h1>

        <div>
            <div>
                <h2>Purple</h2>
                <img src={require('../../../assets/img/produtos1.jpg')} alt='Produtos 1' />
            </div>

            <div>
                <h2>Pink</h2>
                <img src={require('../../../assets/img/produtos2.jpg')} alt='Produtos 2' />
            </div>

            <div>
                <h2>Blue</h2>
                <img src={require('../../../assets/img/produtos3.jpg')} alt='Produtos 3' />
            </div>
        </div>
    </section>
  )
}

export default ProductsSection
