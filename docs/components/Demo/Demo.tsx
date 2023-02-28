import React from 'react';

export function Demo({ data: { component: Component, code } }: any) {
  return (
    <div>
      <div>
        <Component />
      </div>
      <div>
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
