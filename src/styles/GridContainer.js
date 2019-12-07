import styled from "styled-components"

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
  margin: 0 auto;
  /* max-width: 1620px; */
  /* padding: 0px 1.0875rem 1.45rem; */
  padding-top: 0;
`

export default GridContainer
