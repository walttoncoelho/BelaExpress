import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffffff;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2px;
`;

export const Grid1 = styled.div`

  display: flex;
  margin: auto;
`;

export const Grid2 = styled.div`
max-width: 1555px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  flex: 1 2 200px;
`;

export const Card = styled.div`
display: flex;
  max-width: 250px;
  height: 150px;
  margin: auto;  
  margin-top: 20px;
  border-radius: 9px;
  margin-left: 5px;
  flex-wrap: wrap;
  
  border: 1px solid #94438068;

  img {
    display: flex;
    margin: auto;
    padding: 15px;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    max-width: 200px;
    max-height: 100%;
  }


`;
