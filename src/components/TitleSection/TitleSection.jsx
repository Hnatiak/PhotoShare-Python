import React from 'react';
import { Section, Container, Title } from './TitleSection.styled'
// import { Link } from 'react-router-dom';

const TitleSection = ({title}) => {
  return (
    <Section>
      <Container>
          <Title>{title}</Title>
      </Container>
    </Section>
  );
};

export default TitleSection;