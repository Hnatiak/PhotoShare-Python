import styled from '@emotion/styled';

export const PhotoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  list-style: none;
  padding: 45px 45px 0px 45px;
  gap: 25px;
`;


export const Delete = styled.button`
  background: red;
  color: white;
  border-radius: 15px;
  font-size: 15px;
  padding: 4px 20px;
  border: none;
  @media screen and (max-width: 780px) {
    padding: 7px 20px 10px 20px;
    align-items: center;
  }
`;


export const PhotoItem = styled.li`
  border: 1px solid #ddd;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #9AC43C;
  padding: 25px;

  img {
    width: 350px;
    height: auto;
  }

  p {
    padding: 10px;
    text-align: center;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const DivButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Edit = styled.button`
  background-color: #0056b3;
  color: white;
  border-radius: 15px;
  font-size: 15px;
  padding: 4px 20px;
  border: none;
  @media screen and (max-width: 780px) {
    padding: 7px 20px 10px 20px;
    align-items: center;
  }
`;


export const Save = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;