import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    @media screen and (max-width: 480px) {
        flex-direction: column;
        gap: 35px;
    }
`;

export const ContainerDivInfo = styled.div`
    max-width: 550px;
    @media screen and (min-width: 481px) {
        width: 550px;
    }
`;