function isMultiLine(code: string) {
  const placeholderLine = code.split('\n').find((line) => line.includes('%%props%%'));
  return placeholderLine && placeholderLine.trim().startsWith('%%props%%');
}

/* eslint-disable no-restricted-syntax */
export function injectProps(props: any, code: string) {
  const propStrings: string[] = [];
  const multiline = isMultiLine(code);

  for (const [key, value] of Object.entries(props)) {
    if (typeof value === 'string') {
      propStrings.push(`${key}="${value}"`);
    } else if (typeof value === 'number') {
      propStrings.push(`${key}={${value}}`);
    } else if (typeof value === 'boolean') {
      if (value) {
        propStrings.push(key);
      } else {
        propStrings.push(`${key}={false}`);
      }
    }
  }

  if (!multiline) {
    return code.replace('%%props%%', propStrings.join(' '));
  }

  const placeholderRegex = /^(\s*)%%props%%(\s*)$/gm;

  const result = code.replace(placeholderRegex, (_, before, after) => {
    const propsWithWhitespace = propStrings
      .map((propString) => `${before}${propString}\n`)
      .join('');
    return `${propsWithWhitespace}${after}`;
  });

  return result.trim().replace('\n\n', '\n');
}
