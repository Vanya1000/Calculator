import React from 'react'
import { useSelector } from 'react-redux';
import { StyledHistoryWrapper, StyledHistoryList, StyledTitle, StyledHistotyItem } from './styled'

const value = ['1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3',]

const HistoryFC = () => {
  const history = useSelector((state) => state.calculator.history);

  return (
    <StyledHistoryWrapper>
      <StyledTitle>
        History
      </StyledTitle>
      <StyledHistoryList>
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