import React from 'react'
import { useSelector } from 'react-redux'

import { StyledDisplayWrapper, StyledError, StyledResult } from './styled'

const DisplayFC = () => {
  const { display, isError } = useSelector(state => state.calculator)
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