import styled from 'styled-components';

enum Color {
  Light = '#E5E5E5',
  Dark = 'rgb(40, 44, 52)',
}

const getBackgroundColor = (light?: boolean) => {
  return light ? Color.Light : Color.Dark;
};

export const Container = styled.div`
  position: relative;

  * {
    line-height: 1.3em;
    letter-spacing: 0;
  }
`;

export const Bar = styled.div<{ light?: boolean }>`
  background: ${(props) => getBackgroundColor(props.light)};
  height: 2.3rem;
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Window = styled.section<{ light?: boolean }>`
  background: ${(props) => getBackgroundColor(props.light)};
  padding: 0rem 0.55rem 0.55rem 0.55rem;
  max-width: 100%;
  border-radius: 0 0 0.5rem 0.5rem;
  overflow: auto;
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  display: flex;
`;

export const Button = styled.div<{ color: string }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-left: 1rem;
  background: ${(props) => props.color};
  box-shadow: 0 0 0 0.2rem ${(props) => props.color};
`;
