import React from 'react'
import { StyledDisplayWrapper, StyledResult } from './styled'

const value = 564.7387456375

const DisplayFC = () => {
  return (
    <StyledDisplayWrapper>
      <StyledResult>
        {value}
      </StyledResult>
    </StyledDisplayWrapper>
  )
}

export default DisplayFC