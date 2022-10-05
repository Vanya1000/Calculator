import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { StyledKeypadWrapper, StyledButton } from './styled'
import { 
  setDisplay, 
  clearLastNumber, 
  clearDisplay, 
  calculate
} from '@/store/slice/calculatorSlice'

const btn = [
  'C', 7, 8, 9, '*', 
  '-', 4, 5, 6, '/',
  '+', 1, 2, 3, '=',
  '.', '(', 0,  ')', '←',
]

class KeypadCC extends React.Component {

  handleClick = (v) => () => {
      switch (v) {
        case '=':
          this.props.calculate();
          break
        case 'C':
          this.props.clearDisplay()
          break
        case '←':
          this.props.clearLastNumber()
          break
        default:
          this.props.setDisplay(v)
    }
  }

  render() {
    return (
      <StyledKeypadWrapper>
        {btn.map((value) => (
            <StyledButton onClick={this.handleClick(value)} key={value}>
              {value}
            </StyledButton>
        ))}
      </StyledKeypadWrapper>
    )
  }
}

KeypadCC.propTypes = {
  setDisplay: PropTypes.func,
  clearLastNumber: PropTypes.func,
  clearDisplay: PropTypes.func,
  calculate: PropTypes.func,
}

export default connect(null, {
  setDisplay, 
  clearLastNumber, 
  clearDisplay, 
  calculate
})(KeypadCC)