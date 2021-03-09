import cx from 'classnames';
import CSS from 'csstype';
import React from 'react';

import styles from './Terminal.module.css';

interface Props {
  children: React.ReactNode;
  style?: CSS.Properties;
  contentContainerStyle?: CSS.Properties;
  light?: boolean;
}

const Terminal = (props: Props) => {
  const { children, style, light = false, contentContainerStyle } = props;

  return (
    <div
      className={cx(styles.container, {
        [styles.light]: light,
      })}
      style={style}
    >
      <div
        className={cx(styles.bar, {
          [styles.light]: light,
        })}
      >
        <div className={styles.wrapper}>
          <div className={cx(styles.button, styles.red)} />
          <div className={cx(styles.button, styles.yellow)} />
          <div className={cx(styles.button, styles.green)} />
        </div>
      </div>

      <section
        className={cx(styles.window, {
          [styles.light]: light,
        })}
        style={contentContainerStyle}
      >
        {children}
      </section>
    </div>
  );
};

export default Terminal;
