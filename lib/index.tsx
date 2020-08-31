import CSS from 'csstype';
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable';

import Terminal from './Terminal';

interface Props {
  children?: React.ReactNode;
  style?: CSS.Properties;
  contentContainerStyle?: CSS.Properties;
  language?: string;
  light?: boolean;
  value?: string;
}

const Window = (props: Props) => {
  const {
    children,
    style,
    language,
    light = false,
    value,
    contentContainerStyle,
  } = props;
  const content = value ?? children;

  if (typeof content === 'string') {
    return (
      <Terminal
        style={style}
        contentContainerStyle={contentContainerStyle}
        light={light}
      >
        <SyntaxHighlighter style={theme} language={language}>
          {content}
        </SyntaxHighlighter>
      </Terminal>
    );
  }

  return (
    <Terminal
      style={style}
      contentContainerStyle={contentContainerStyle}
      light={light}
    >
      {content}
    </Terminal>
  );
};

export default Window;
