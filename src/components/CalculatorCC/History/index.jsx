import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { StyledHistoryWrapper, StyledHistoryList, StyledTitle, StyledHistotyItem } from './styled'

class HistoryCC extends React.Component {
  
    render() {
      return (
        <StyledHistoryWrapper>
          <StyledTitle>History</StyledTitle>
          <StyledHistoryList>
            {this.props.history.map((item, index) => (
              <StyledHistotyItem key={index}>
                {item}
              </StyledHistotyItem>
            ))}
          </StyledHistoryList>
        </StyledHistoryWrapper>
      )
    }
}

const mapStateToProps = (state) => ({
  history: state.calculator.history,
});

HistoryCC.propTypes = {
  history: PropTypes.array
}

export default connect(mapStateToProps)(HistoryCC)
