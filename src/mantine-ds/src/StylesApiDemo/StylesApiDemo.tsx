import React from 'react';
import { UnstyledButton, Text, Anchor } from '@mantine/core';
import { DemoAreaProps } from '../DemoArea';
import { DemoCode } from '../DemoCode';
import { DemoRoot } from '../DemoRoot';
import { DemoColumns } from '../DemoColumns';
import classes from './StylesApiDemo.module.css';

export interface StylesApiProps extends DemoAreaProps {
  data: { selectors: Record<string, string> };
  code: string;
  onStylesApiLink(): void;
}

function getCss(hovered: string | null) {
  return hovered
    ? `.${hovered} {\n  outline: 2px solid #fe0d45;\n}\n`
    : '/*\n * Hover over selectors to apply outline styles\n */';
}

export function StylesApiDemo({
  data,
  code,
  withPadding,
  maxWidth,
  centered,
  children,
  onStylesApiLink,
}: StylesApiProps) {
  const [hovered, setHovered] = React.useState<string | null>(null);
  const [selected, setSelected] = React.useState<string[]>([]);

  const selectors = Object.keys(data.selectors);
  const controls = selectors.map((selector) => (
    <UnstyledButton
      className={classes.selector}
      mod={{ hovered: hovered === selector, selected: selected.some((s) => s === selector) }}
      key={selector}
      onMouseEnter={() => setHovered(selector)}
      onMouseLeave={() => setHovered(null)}
      onClick={() => {
        if (selected.some((s) => s === selector)) {
          setSelected(selected.filter((s) => s !== selector));
        } else {
          setSelected([...selected, selector]);
        }
      }}
    >
      <Text mb={2}>{selector}</Text>
      <Text fz={11} c="dimmed">
        {data.selectors[selector]}
      </Text>
    </UnstyledButton>
  ));

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: getCss(hovered) }} />
      <DemoRoot>
        <DemoColumns
          withPadding={withPadding}
          maxWidth={maxWidth}
          centered={centered}
          controls={controls}
          title="Component Styles API"
          description={
            <>
              Hover over selectors to highlight corresponding elements. Follow{' '}
              <Anchor component="button" onClick={onStylesApiLink}>
                Styles API
              </Anchor>{' '}
              documentation to learn more.
            </>
          }
        >
          {React.cloneElement(children as JSX.Element, {
            classNames: selectors.reduce<Record<string, string>>((acc, item) => {
              acc[item] = item;
              return acc;
            }, {}),
          })}
        </DemoColumns>

        <DemoCode
          code={[
            { fileName: 'Demo.module.css', language: 'css', code: getCss(hovered) },
            { fileName: 'Demo.tsx', language: 'tsx', code },
          ]}
        />
      </DemoRoot>
    </>
  );
}
