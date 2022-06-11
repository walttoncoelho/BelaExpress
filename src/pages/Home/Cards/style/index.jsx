import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

`;

export const Grid = styled.div`
  display: flex;
  padding: 10px;
  max-width: 1900px;
  position: absolute;
  margin-top: -5rem;

  @media (max-width: 768px) {
    margin-top: 1px;
    width: 100%;
    flex-direction: column;
    position: relative;
  }
`;

export const Grid1 = styled.div`
  background-color: #8d3286;
  flex-direction: column;
  width: 100%;
  min-width: 350px;
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 5px;

  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: bold;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    font-size: 0.8rem;
    color: #fff;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1em;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    margin: auto;
    padding: 5px;
    margin-top: 0px;
    margin-bottom: 0px;

    p {
      font-size: 1.5em;
      font-weight: 300;
    }
  }
`;

export const Grid2 = styled.div`
  background-color: #9f5699;
  flex-direction: column;
  display: flex;
  width: 100%;
  min-width: 350px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 5px;
  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: bold;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    
    color: #fff;
    
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1em;
    font-weight: 300;

  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    margin: auto;
    padding: 5px;
    margin-top: 0px;
    margin-bottom: 0px;

    p {
      font-size: 1.5em;
      font-weight: 300;
    }
  }
`;

export const Grid3 = styled.div`
  background-color: #b17aac;
  flex-direction: column;
  display: flex;
  width: 100%;
  min-width: 350px;

  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 5px;
  h1 {
    font-size: 3rem;
    color: #fff;
    font-weight: bold;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  p {
    
    color: #fff;
   
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 1em;
    font-weight: 300;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    min-width: 100%;
    margin: auto;
    padding: 5px;
    margin-top: 0px;
    margin-bottom: 0px;

    p {
      font-size: 1.5em;
      font-weight: 300;
    }
  }
`;
