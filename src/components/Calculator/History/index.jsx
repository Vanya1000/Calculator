import React from 'react'
import { StyledHistoryWrapper, StyledHistoryList, StyledTitle, StyledHistotyItem } from './styled'

const value = ['1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3', '1 + 2 = 3',]

const HistoryFC = () => {
  return (
    <StyledHistoryWrapper>
      <StyledTitle>
        History
      </StyledTitle>
      <StyledHistoryList>
      {value.map((item, index) => (
        <StyledHistotyItem key={index}>
          {item}
        </StyledHistotyItem>
      ))}
      </StyledHistoryList>
    </StyledHistoryWrapper>
  )
}

export default HistoryFC