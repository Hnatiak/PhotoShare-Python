import styled from '@emotion/styled';

export const PhotoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  padding: 25px;
`;

export const PhotoItem = styled.li`
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;

  img {
    width: 350px;
    height: auto;
  }

  p {
    padding: 10px;
    text-align: center;
  }
`;