import React from 'react'
import { useSelector } from 'react-redux'

import * as Styled from './styled'

const DisplayFC = () => {
  const { display, isError } = useSelector(state => state.calculator)
  return (
    <Styled.DisplayWrapper>
      <Styled.Error data-cy="error" isError={isError}>Error! Please, check input</Styled.Error>
      <Styled.Result data-cy="display">
        {display || '0'}
      </Styled.Result>
    </Styled.DisplayWrapper>
  )
}

export default DisplayFC