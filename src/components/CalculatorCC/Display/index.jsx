import React from 'react'
import PropTypes from 'prop-types';
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

DisplayCC.propTypes = {
  display: PropTypes.string
}

export default connect(mapStateToProps)(DisplayCC)
