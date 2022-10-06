import React from 'react'
import { useSelector } from 'react-redux'
import { StyledDisplayWrapper, StyledError, StyledResult } from './styled'

const DisplayFC = () => {
  const display = useSelector(state => state.calculator.display)
  const isError = useSelector(state => state.calculator.isError)
  return (
    <StyledDisplayWrapper>
      <StyledError data-cy="error" isError={isError}>Error! Please, check input</StyledError>
      <StyledResult data-cy="display">
        {display || '0'}
      </StyledResult>
    </StyledDisplayWrapper>
  )
}

export default DisplayFC