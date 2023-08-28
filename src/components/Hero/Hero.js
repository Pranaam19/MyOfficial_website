import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm Pranaam <br />
          BE in CSE(DS)<br/>
           at SJEC Mangalore
        </SectionTitle>
        <SectionText>
        I'm a Front End Developer with a passion for building beautiful and functional user experiences. I love to create things that make people's lives easier.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;