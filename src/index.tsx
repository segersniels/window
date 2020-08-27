import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark-reasonable';

import Terminal from './Terminal';

interface Props {
  children: any;
  style?: any;
  language?: string;
  light?: boolean;
  value?: string;
}

const Window = (props: Props) => {
  const { children, style, language, light = false, value } = props;
  const content = value ?? children;

  if (typeof content === 'string') {
    return (
      <Terminal style={style} light={light}>
        <SyntaxHighlighter style={theme} language={language}>
          {content}
        </SyntaxHighlighter>
      </Terminal>
    );
  }

  return (
    <Terminal style={style} light={light}>
      {content}
    </Terminal>
  );
};

export default Window;
