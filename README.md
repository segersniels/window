## @segersniels/window

[![Actions](https://action-badges.now.sh/segersniels/window)](https://github.com/segersniels/window/actions)[![npm](https://img.shields.io/npm/dm/@segersniels/window.svg)](https://www.npmjs.com/package/@segersniels/window)

![screenshot](https://i.imgur.com/Vtoq5YU.png)

## Demo

You can view it in action on my [blog](https://nielssegers.be).

## Usage

### react-markdown

Use it in combination with [react-markdown](https://github.com/rexxars/react-markdown) to nicely present code to the user.

```js
import Window from '@segersniels/window';
import ReactMarkdown from 'react-markdown';

...

<ReactMarkdown
  source={source}
  renderers={{
    code: Window,
  }}
/>

...
```

### Custom usage

Use it independently and pass whatever `children` you want to it. Please note that when passing `children` you will not have syntax highlighting enabled.

```js
<Window>
  <p>Hello World!</p>
</Window>
```

However you can pass your own code to the `value` prop directly and control the language by passing the `language` prop. This will override any children passed.

```js
<Window value='const foo = "bar";' language="javascript" />
```

### SSR

Server side rendering is currently not available due to a webpack `style-loader` limitation. Feel free to create a pull request to implement this behavior.

![custom](https://i.imgur.com/tFWXmrj.png)
