import styled from "styled-components"

const GridContainer = styled.div`
  display: grid;
  margin: 0 auto;
  @media screen and (min-width: 1400px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 8px;
  padding-top: 0;
`

export default GridContainer
