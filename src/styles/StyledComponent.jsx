import styled from "styled-components";

export const Button = styled.button`
  padding: ${({ padding }) => padding && padding};
  font-size: ${({ fontSize }) => fontSize && fontSize};
  color: ${({ color }) => color && color};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  background: ${({ bgColor }) => bgColor && bgColor};
  border: ${({ border }) => border && border};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
`;

export const Box = styled.div`
  background-image: ${({ backgroundImage }) =>
    backgroundImage && backgroundImage};
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  left: ${({ left }) => left && left};
  right: ${({ right }) => right && right};
  bottom: ${({ bottom }) => bottom && bottom};
  align-items: ${({ alignItems }) => alignItems && alignItems};
  justify-content: ${({ justify }) => justify && justify};
  text-align: ${({ textAlign }) => textAlign && textAlign};
  display: ${({ display }) => display && display};
  height: ${({ height }) => height && height};
  width: ${({ width }) => width && width};
  flex-direction: ${({ flexDirection }) => flexDirection && flexDirection};
  place-items: ${({ placeitems }) => placeitems && placeitems};
  padding: ${({ padding }) => padding && padding};
  font-size: ${({ fontSize }) => fontSize && fontSize};
  color: ${({ color }) => color && color};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  margin-right: ${({ marginRight }) => marginRight && marginRight};
  background-color: ${({ bgColor }) => bgColor && bgColor};
  border: ${({ border }) => border && border};
  border-radius: ${({ borderRadius }) => borderRadius && borderRadius};
  font-weight: ${({ fontWeight }) => fontWeight && fontWeight};
  float: ${({ float }) => float && float};
  overflow-y: ${({ overflowY }) => overflowY && overflowY};
  min-height: ${({ minHeight }) => minHeight && minHeight};
  background: ${({ background }) => background && background};
  flex: ${({ flex }) => flex && flex};
  max-width: ${({ maxWidth }) => maxWidth && maxWidth};
`;

export const Img = styled.img`
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  margin-top: ${({ margin }) => margin && margin};
  color: ${({ color }) => color && color};
  object-fit: ${({ objectFit }) => objectFit && objectFit};
  border-radius: ${({ Radius }) => Radius && Radius};
  padding: ${({ padding }) => padding && padding};
  &:hover {
    color: white;
  }
`;

export const Nav = styled.nav`
  width: 80vw;
  height: 70px;
  background-color: ${({ bgColor }) => bgColor && bgColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0%;
  z-index: 22;
`;
export const PlayCircle = styled.div`
  position: ${({ position }) => position && position};
  top: ${({ top }) => top && top};
  bottom: ${({ bottom }) => bottom && bottom};
  right: ${({ right }) => right && right};
  margin-left: ${({ marginLeft }) => marginLeft && marginLeft};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: none;
  transition: ${({ transition }) => transition && transition};
  border-radius: 50%;
  background: #1db954;
`;
