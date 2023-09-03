import React from 'react';

const globalCSS = ` 
/* ----- CSS reset ----- */
html,
body {
    height: 100%;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

input,
button,
textarea,
select {
    font: inherit;
}

button,
select {
    text-transform: none;
}

/* ----- Global styles ----- */
body {
    margin: 0;
    font-family: var(--mantine-font-family);
    font-size: var(--mantine-font-size-md);
    line-height: var(--mantine-line-height);
    background-color: var(--mantine-color-body);
    color: var(--mantine-color-text);

    -webkit-font-smoothing: var(--mantine-webkit-font-smoothing);
    -moz-osx-font-smoothing: var(--mantine-moz-font-smoothing);

    @media screen and (max-device-width: 500px) {
        -webkit-text-size-adjust: 100%;
    }
}
`;

export function MantineGlobalStyles() {
    return (
      <style
        data-mantine-styles
        dangerouslySetInnerHTML={{
          __html: `${globalCSS}`,
        }}
      />
    );
}
