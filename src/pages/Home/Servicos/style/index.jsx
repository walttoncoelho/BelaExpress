import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  max-width: 1920px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-weight: 200;

    @media (max-width: 680px) {
      padding: 10px;
    font-size: 2.8rem;
  }
  }
`;
export const Container = styled.div`

  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: auto;
  padding: 10px;
  justify-content: center;
  @media (max-width: 680px) {
    flex-wrap: wrap;
  }

  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;


`;

export const Card = styled.div`

  flex-direction: column; 
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 4px;
  margin-right: 5px;
  margin-left: 2px;
  padding: 10px;
  max-width: 300px;
  min-height: 550px;
  
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  /*    flex: 1 2 3 300px; */
  
a {
  text-decoration: none;
}

  @media (max-width: 1200px) {
    width: 25%;
    
    flex-wrap: wrap;
  }

  @media (max-width: 680px) {
    width: 100%;
    padding: 10px;
    flex-wrap: wrap;
  }

  h4 {
    font-weight: bold;
    margin: auto;
    margin-bottom: 10px;
  }
  p {
    font-size: 0.8rem;
    margin: auto;
    margin-bottom: 10px;
    padding: 10px;
  }
  img {
    display: flex;
    margin: auto;
    padding: 5px;
    max-width: 270px;
    max-height: 270px;
    margin-bottom: 10px;
  }
`;
