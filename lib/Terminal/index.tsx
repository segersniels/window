import CSS from 'csstype';
import React from 'react';

import { Bar, Button, Container, Window, Wrapper } from './styles';

interface Props {
  children: React.ReactNode;
  style?: CSS.Properties;
  contentContainerStyle?: CSS.Properties;
  light?: boolean;
}

const Terminal = (props: Props) => {
  const { children, style, light = false, contentContainerStyle } = props;

  return (
    <Container style={style}>
      <Bar light={light}>
        <Wrapper>
          <Button color="#f85955" />
          <Button color="#fbbe3f" />
          <Button color="#45cc4b" />
        </Wrapper>
      </Bar>

      <Window style={contentContainerStyle} light={light}>
        {children}
      </Window>
    </Container>
  );
};

export default Terminal;
