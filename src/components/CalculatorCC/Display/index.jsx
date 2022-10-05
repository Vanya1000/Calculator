import React from 'react'
import {connect} from 'react-redux';
import { StyledDisplayWrapper, StyledResult } from './styled'


class DisplayCC extends React.PureComponent {
  render() {
    return (
      <StyledDisplayWrapper>
        <StyledResult>
          {this.props.display || '0'}
        </StyledResult>
      </StyledDisplayWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  display: state.calculator.display
});

export default connect(mapStateToProps)(DisplayCC)
