import React from 'react';

import { Bar, Button, Container, Window, Wrapper } from './styles';

interface Props {
  children: any;
  style?: any;
  light?: boolean;
}

const Terminal = (props: Props) => {
  const { children, style, light = false } = props;

  return (
    <Container>
      <Bar light={light}>
        <Wrapper>
          <Button color="#f85955" />
          <Button color="#fbbe3f" />
          <Button color="#45cc4b" />
        </Wrapper>
      </Bar>

      <Window style={style} light={light}>
        {children}
      </Window>
    </Container>
  );
};

export default Terminal;
