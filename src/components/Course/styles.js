import styled from 'styled-components'

export const StyledCard = styled.div`
  flex: 0 0 98%;
  overflow: hidden;
  margin: 1rem 0.5rem 2rem;
  @media (min-width: ${props => props.theme.breakpoints.maxMobile}) {
    flex: 0 0 47%;
  }
  @media (min-width: ${props => props.theme.breakpoints.maxTablet}) {
    flex: 0 0 320px;
  }

  .title {
    background: lightblue;
    font-size: 1.5rem;
    padding: 0.25rem 0.75rem;
    position: relative;
    z-index: 30;

    a {
      @media (min-width: ${props => props.theme.breakpoints.maxMobile}) {
        font-size: 1.25rem;
      }
    }
  }
`
