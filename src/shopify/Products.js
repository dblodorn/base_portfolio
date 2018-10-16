import React, { Component } from 'react'
import styled from 'styled-components'
import { grid, flexRowWrap } from './../styles/mixins'
import { H2 } from './../styles/components'
import { widths } from './../styles/theme.json'
import Product from './Product'

class Products extends Component {
  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });
    return (
      <ProductsWrapper className={'two_col'}>
        {products}
      </ProductsWrapper>
    );
  }
}

export default Products;

// STYLES
const ProductsWrapper = styled.ul`
  ${grid};
  ${flexRowWrap};
  width: 100%;
  min-height: 100%;
  position: relative;
`