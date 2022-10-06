import React from 'react'
import { useSelector } from 'react-redux';
import { StyledHistoryWrapper, StyledHistoryList, StyledTitle, StyledHistotyItem } from './styled'

const HistoryFC = () => {
  const history = useSelector((state) => state.calculator.history);

  return (
    <StyledHistoryWrapper>
      <StyledTitle>
        History
      </StyledTitle>
      <StyledHistoryList data-cy="history">
      {history.map((item, index) => (
        <StyledHistotyItem key={index}>
          {item}
        </StyledHistotyItem>
      ))}
      </StyledHistoryList>
    </StyledHistoryWrapper>
  )
}

export default HistoryFC