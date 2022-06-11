import styled from "styled-components";

export const Container = styled.div`
background-color: #f3f3f3;

  border-radius: 4px;
  display: flex;
  max-width: 1920px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: wrap;
`;

export const Grid1 = styled.div`
background-color: #f3f3f3;
  flex-direction: column;
  display: flex;
  width: 50%;
 
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: 1 2 500px;

  padding: 5px;
  margin-right: 2px;
 
  svg {
    display: flex;
    margin: auto;   
    width: 60px;
    height:60px;
    stroke: #8D3286;
    margin-top: 30px;
    margin-bottom: -35px;

  }

  
  @media (max-width: 700px) {
    order: 2;

    p {
      max-width  : 250px; 
    }
  }

  p {
    display: flex;
    padding: 20px;
    margin: auto;      
    text-align: center;
  }
`;

export const Grid2 = styled.div`
background-color: #9F5699;
  display: flex;
  width: 50%;
  height: 300px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: 1 2 500px;

  padding: 5px;

  @media (max-width: 700px) {
    order: 2;
  }

  p {
    padding: 30px;
    color: #ffff;
  }
  h2{
    color: #8D3286;
   
  }
`;
