import styled from 'styled-components'

export const StyledPageContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: ${props => props.theme.breakpoints.maxMobile}) {
    justify-content: flex-start;
  }
`
