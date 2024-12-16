import styled from "styled-components";

const ColorList = styled.li`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.color};
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  gap: 1rem;
`;

export default function Color({artPieces}){
    const colors = artPieces.colors
    return(
        <>
        <ul>
          <List>
            {colors.map((color, index) => (
              <ColorList key={index} color={color}></ColorList>
            ))}
          </List>
        </ul>
        </>
    )
}