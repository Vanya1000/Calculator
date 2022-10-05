import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { StyledDisplayWrapper, StyledError, StyledResult } from './styled'


class DisplayCC extends React.PureComponent {
  render() {
    return (
      <StyledDisplayWrapper>
        <StyledError isError={this.props.isError}>Error! Please, check input</StyledError>
        <StyledResult>
          {this.props.display || '0'}
        </StyledResult>
      </StyledDisplayWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  display: state.calculator.display,
  isError: state.calculator.isError,
});

DisplayCC.propTypes = {
  display: PropTypes.string,
  isError: PropTypes.bool
}

export default connect(mapStateToProps)(DisplayCC)
