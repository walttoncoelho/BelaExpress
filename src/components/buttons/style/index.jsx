import styled from "styled-components";

export const ButtomWhatsApp = styled.div`
  display: flex;
  max-height: 50px;
  max-width: 50px;
  height: 50px;
  width: 50px;
  margin: auto;
  background: #5ab062;
  border-radius: 100%;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: #1dc41d;
    color: #ffffff;
    border-color: #ffffff;
    font-weight: bold;
  }

  a {
    display: flex;
  }



  @media (max-width: 1200px) {
  
    padding: 10px;
   
  }


  @media (max-width: 700px) {
    margin: auto;
  }
`;



export const Buttom = styled.button`
  display: flex;
  border: 2px solid #8d3286;
  background-color: #aa38a1;
  border-radius: 4px;
  color: #8d3286;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  min-width :250px;
  max-width: 250px;
  height: 50px;
  color: #ffffff;
  margin: auto;  
  
  padding: 20px;
  &:hover {
    background-color: #ffffff;
    border-color: #8d3286;
    font-weight: bold;
    color: #8d3286;
  }

`;

export const ButtomAtendimento = styled.button`
  display: flex;
  border: 2px solid #328d50;
  background-color: #38aa41;
  border-radius: 4px;
  color: #8d3286;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  min-width :250px;
  max-width: 250px;
  height: 50px;
  color: #ffffff;
  margin: auto;  
  
  padding: 20px;
  &:hover {
    background-color: #3e8000;
    border-color: #18aa3d;
    font-weight: bold;
    color: #ffffff;
  }
`;
