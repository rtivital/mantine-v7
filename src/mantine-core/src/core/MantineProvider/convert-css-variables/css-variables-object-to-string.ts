export type CSSVariables = Record<`--${string}`, string>;

export function cssVariablesObjectToString(variables: CSSVariables) {
  return Object.entries(variables)
    .map(([name, value]) => `${name}: ${value};`)
    .join('');
}
