import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { StyledDisplayWrapper, StyledError, StyledResult } from './styled'


class DisplayCC extends React.Component {
  render() {
    const { isError, display } = this.props;
    return (
      <StyledDisplayWrapper>
        <StyledError data-cy="error" isError={isError}>Error! Please, check input</StyledError>
        <StyledResult data-cy="display">
          {display || '0'}
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
