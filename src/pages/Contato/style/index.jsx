import styled from "styled-components";

export const Container = styled.div`
  background-color: #b17aacc0;
  flex-direction: row;
  display: flex;
  max-width: 100%;
  margin: auto;
  position: none;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Grid1 = styled.div`
  width: 50%;
  display: flex;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const ContainerImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: auto;
    width: 300px;
  }
`;

export const Grid2 = styled.div`
  max-width: 900px;
  display: flex;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Grid3 = styled.div`
  background-color: #e9e9e9;
  width: 50%;
  display: flex;
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Grid4 = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  position: static;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Grid5 = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  position: static;

  iframe {
    width: 600px;
    height: 600px;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media (max-width: 768px) {
    width: 100%;
    iframe {
      width: 420px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 8px;
  > img {
    max-width: 400px;
    border-radius: 4px;
  }
`;
