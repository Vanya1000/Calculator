import React from 'react'
import { useSelector } from 'react-redux'
import { StyledDisplayWrapper, StyledResult } from './styled'

const value = 564.7387456375

const DisplayFC = () => {
  const display = useSelector(state => state.calculator.display)
  return (
    <StyledDisplayWrapper>
      <StyledResult>
        {display || '0'}
      </StyledResult>
    </StyledDisplayWrapper>
  )
}

export default DisplayFC