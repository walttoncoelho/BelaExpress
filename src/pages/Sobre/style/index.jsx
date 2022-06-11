import styled from "styled-components";

export const Banner = styled.div`
  background-color: #722064;
  background-image: url(./images/sobre/bgsobre.png);
  display: flex;
  margin: auto;
  flex-direction: row;
  max-width: 1920px;
  height: 350px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
  }
`;

export const Banner2 = styled.div`
  background-color: #963f87;
  display: flex;
  margin: auto;
  flex-direction: row;
  max-width: 1920px;
  height: 350px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
  }
`;


export const Grid4 = styled.div`
  background-color: aqua;
  margin: auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 680px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Img1 = styled.div`
  img {
    display: flex;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    margin: auto;
    @media (max-width: 680px) {
      width: 100%;
    }
  }
`;

export const Img2 = styled.div`
  img {
    display: flex;
    border-radius: 10px;
    padding: 10px;
    width: 300px;
    margin: auto;
    @media (max-width: 680px) {
      width: 100%;
      display: none;
    }
  }
`;

export const Grid5 = styled.div`
  display: flex;
  width: 50%;
  margin: auto;
  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 680px) {
    width: 100%;
    height: 200px;
    flex-direction: column;
    order: 3;
  }

  img {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    padding: 10px;
    width: 550px;
    margin: auto;
    @media (max-width: 680px) {
      width: 100%;
     
      position: static;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  background-color: #faf6f1;
  max-width: 100%;

  

  @media (max-width: 700px) {
    height: 100%;
  }
`;

export const Grid0 = styled.div`

  max-width: 1555px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: wrap;
`;

export const Banner1 = styled.div`

flex-direction: column;
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 700px) {
    width: 100%;
    order: 2;
  }

  h4 {
    color: #ffffff;
    padding: 30px;
    line-height: 30px;
    font-weight: 300;
  }

  p {
    padding: 30px;
  }
`;

export const Grid1 = styled.div`

flex-direction: column;
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: auto;

  @media (max-width: 700px) {
    width: 100%;
    order: 1;
  }

  p {
    padding: 30px;
  }

  img {
    max-width: 200px;
  }
`;

export const Grid2 = styled.div`

  display: flex;
  width: 50%;

  justify-content: center;
  align-items: center;
  margin: auto;
  flex: 2 1 400px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    order: 2;
  }
`;


export const Grid3 = styled.div`
background-color: aquamarine;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex: 2 1 400px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    order: 2;
  }

  img {
    width: 100%;
  }
`;

export const Card = styled.div`
background-color: #ec3ba8;
  display: flex;
  flex-wrap: wrap;
  margin: 8px;

  > img {
    width: 100%;
    border-radius: 4px;
  }
`;



