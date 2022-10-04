import styled from "styled-components"

export const StyledHistoryWrapper = styled.div`
  width: 300px;
  border-left: 1px solid ${props => props.theme.palette.text.primary};
  display: flex;
  flex-direction: column;
`

export const StyledTitle = styled.p`
  font-size: 20px;
  margin: 0 auto;
  margin-bottom: 10px;
`
export const StyledHistoryList = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;
  padding: 0 20px;
  overflow: auto;
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    background-clip: content-box;
    border: 5px solid ${props => props.theme.palette.background.primary};
    border-radius: 25px;
  }
  &::-webkit-scrollbar {
    background: inherit;
  }
`

export const StyledHistotyItem = styled.p`
  font-size: 20px;
  padding: 10px 0;
`