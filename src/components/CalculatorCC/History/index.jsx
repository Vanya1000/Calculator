import React from 'react'
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

export default connect(mapStateToProps)(HistoryCC)
