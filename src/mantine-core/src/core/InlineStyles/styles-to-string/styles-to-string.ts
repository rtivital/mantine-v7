import { cssObjectToString } from '../css-object-to-string/css-object-to-string';

function padLines(string: string, count: number) {
  const whitespace = ' '.repeat(count);
  return `${whitespace}${string.replace(/(?:\r\n|\r|\n)/g, `\n${whitespace}`)}`;
}

export interface InlineStylesMediaQuery {
  query: string;
  styles: React.CSSProperties;
}

export interface InlineStylesInput {
  selector: string;
  styles?: React.CSSProperties;
  media?: InlineStylesMediaQuery[];
}

export function stylesToString({ selector, styles, media }: InlineStylesInput) {
  const baseStyles = styles ? padLines(cssObjectToString(styles), 2) : '';
  const mediaQueryStyles = !Array.isArray(media)
    ? []
    : media.map(
        (item) =>
          `@media ${item.query} {\n  ${selector} {\n${padLines(
            cssObjectToString(item.styles),
            4
          )}\n  }\n}`
      );

  return `${baseStyles ? `${selector} {\n${baseStyles}\n}\n\n` : ''}${mediaQueryStyles.join(
    '\n\n'
  )}`.trim();
}
