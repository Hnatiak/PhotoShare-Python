import styled from '@emotion/styled';

export const DivStyles = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    padding: 45px;
    -webkit-box-align: center;
    align-items: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EditRoleModal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalButton = styled.button`
  font-style: normal;
  font-weight: var(--fontWeight500);
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  width: 100%;
  height: 29px;
  background: rgb(154, 196, 60);
  border-radius: 8px;
  margin-top: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;



export const Select = styled.select`
  padding: 5px 40px;
`;