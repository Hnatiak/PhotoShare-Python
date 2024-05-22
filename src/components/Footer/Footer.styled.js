import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FooterContainer = styled.footer`
    display: flex;
    background: #111;
    flex-direction: column;
    color: #bbb;
`;

export const Container = styled.div`
    display: flex; 
    padding: 60px 25px; 
    gap: 20px;
    justify-content: space-between;
    @media screen and (max-width: 780px) {
        padding: 50px 30px;
    }
    @media screen and (max-width: 680px) {
        display: block;
        padding: 50px 20px;
        gap: 10px;
    }
`;

export const Menu = styled.div`
    width: 270px;
    @media screen and (max-width: 780px) {
        width: 166px;
    }
    @media screen and (max-width: 680px) {
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const Contacts = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 780px) {
        width: 166px;
    }
    @media screen and (max-width: 680px) {
        width: 100%;
    }
`;

export const Title = styled.h5`
    font-weight: 300;
    margin-bottom: 20px; 
    color: #eee;
    font-size: 24px;
    @media screen and (max-width: 780px) {
        line-height: 1.5em;
    }
`;

export const ContactsLi = styled.li`
    padding: 2px 0 2px 0;
    margin-bottom: 20px;
    &:last-child {
    margin-bottom: 0px;
    }
    @media screen and (max-width: 780px) {
        line-height: 1.5em;
    }
`;

export const LinkLi = styled.li`
    padding: 2px 0 2px 0;
    color: #919191;
    @media screen and (max-width: 780px) {
        line-height: 1.5em;
    }
`;

export const A = styled.a`
    transition: color 0.2s ease-in;
    &:hover{
        color: #9AC43C;
    }
`;

export const Icon = styled(FontAwesomeIcon)`
    width: 20px;
    height: 20px;
    &:hover{
        color: #9AC43C;
    }
`;

export const SideContainer = styled.div`
    background: #0a0a0a;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
        padding: 30px 20px;
    }
`;

export const SocialMedia = styled.div`
    gap: 20px; 
    display: flex;
    @media screen and (max-width: 480px) {
        gap: 10px;
        align-items: center;
    }
`;

