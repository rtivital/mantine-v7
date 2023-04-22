import React from 'react';
import cx from 'clsx';
import { Title, useMantineTheme } from '@mantine/core';
import classes from './MdxTitle.module.css';

export function MdxTitle({
  id,
  children,
  order = 2,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  const theme = useMantineTheme();

  if (order === 1) {
    return (
      <Title className={classes.title} data-h1>
        {children}
      </Title>
    );
  }

  return (
    <>
      <div id={id} data-heading={children} data-order={order} className={classes.offset} />
      <Title order={order} className={classes.title} {...others}>
        <a className={cx(classes.link, theme.focusClassNames.auto)} href={`#${id}`}>
          {children}
        </a>
      </Title>
    </>
  );
}

export const h = (order: 1 | 2 | 3 | 4 | 5 | 6) => (props: any) =>
  <MdxTitle order={order} {...props} />;
