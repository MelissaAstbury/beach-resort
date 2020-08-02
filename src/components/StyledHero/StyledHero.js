import styled from "styled-components";

import defaultImage from "../../images/room-1.jpeg";

const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${defaultImage}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
