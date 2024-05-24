import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Div = styled.div`
    display: flex;
    height: 60vh;
    justify-content: center;
    align-items: center;
`;

export const DivContent = styled.div`
    margin: 15px;
    display: flex;
    height: 60vh;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction: row-reverse;
`;

export const AddPhotoBtn = styled.button`
    font-style: normal;
    font-weight: var(--fontWeight500);
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    width: 20%;
    height: 49px;
    margin-top: 24px;
    background: rgb(154, 196, 60);
    border-radius: 8px;
    @media screen and (max-width: 768px) {
        width: 287px;
    }
`;

export const A = styled(Link)`
    transition: color 0.2s ease-in;
    &:hover{
        color: #9AC43C;
    }
`;