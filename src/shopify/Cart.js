import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { mixins, mainPadding, flexCenteredAll, fancyScroll, flexRow, flexRowCenteredVert } from './../styles/mixins'
import { H2, StyledButton } from './../styles/components'
import { widths, heights, shared, colors, spacing } from './../styles/theme.json'
import LineItem from './LineItem'

class Cart extends Component {
  constructor(props) {
    super(props);
    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
    let line_items = this.props.checkout.lineItems.map((line_item) => {
      return (
        <LineItem
          updateQuantityInCart={this.props.updateQuantityInCart}
          removeLineItemInCart={this.props.removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });

    return (
      <Fragment>
        {!this.props.cart.isCartOpen &&
          <CartButtonWrapper>
            <StyledButton className="App__view-cart" onClick={this.props.handleCartOpen}>Cart</StyledButton>
          </CartButtonWrapper>
        }
        <Transition from={{transform: `translateX(${widths.cart})` }} enter={{transform: `translateX(0})` }} leave={{transform: `translateX(${widths.cart})`}}>
          {this.props.cart.isCartOpen && (styles => 
            <CartWrapper style={styles}>
              <CartHeader>
                <H2>CART</H2>
                <StyledButton onClick={this.props.handleCartClose} className="Cart__close">
                  <span>CLOSE</span>
                </StyledButton>
              </CartHeader>
              <ul className="Cart__line-items">
                {line_items}
              </ul>
              <footer className="Cart__footer">
                <div className="Cart-info clearfix">
                  <div className="Cart-info__total Cart-info__small">Subtotal</div>
                  <div className="Cart-info__pricing">
                    <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
                  </div>
                </div>
                <div className="Cart-info clearfix">
                  <div className="Cart-info__total Cart-info__small">Taxes</div>
                  <div className="Cart-info__pricing">
                    <span className="pricing">$ {this.props.checkout.totalTax}</span>
                  </div>
                </div>
                <div className="Cart-info clearfix">
                  <div className="Cart-info__total Cart-info__small">Total</div>
                  <div className="Cart-info__pricing">
                    <span className="pricing">$ {this.props.checkout.totalPrice}</span>
                  </div>
                </div>
                <button className="Cart__checkout button" onClick={this.openCheckout}>Checkout</button>
              </footer>
            </CartWrapper>
          )}
        </Transition>
      </Fragment>
    )
  }
}

export default connect(
  state => ({
    cart: state.cart
  })
)(Cart)

// STYLES
const CartWrapper = styled.div`
  ${mainPadding};
  ${fancyScroll};
  overflow-y: scroll;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  background-color: white;
  border-left: ${shared.border_thin};
  z-index: 9000;
`

const CartButtonWrapper = styled.div`
  ${flexCenteredAll};
  width: ${heights.header};
  height: ${heights.header};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9000;
  background-color: ${colors.white};
  border-left: ${shared.border_thin};
  border-bottom: ${shared.border_thin};
`

const CartHeader = styled.header`
  ${flexRowCenteredVert};
  justify-content: space-between;
  padding: 0 ${spacing.double_pad};
  width: 100vw;
  height: ${heights.header};
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: ${shared.border_thin};
  background-color: ${colors.white};
`