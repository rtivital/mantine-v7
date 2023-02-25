import { cssObjectToString } from './css-object-to-string';

const result = `
padding: 1rem;
font-size: 2.2rem;
border-top-right-radius: 10px;
`.trim();

const undefinedResult = `
padding: 1rem;
border-top-right-radius: 10px;
`.trim();

describe('@mantine/core/css-object-to-string', () => {
  it('correctly transforms css object into string', () => {
    expect(
      cssObjectToString({
        padding: '1rem',
        fontSize: '2.2rem',
        borderTopRightRadius: '10px',
      })
    ).toBe(result);
  });

  it('filters out undefined values', () => {
    expect(
      cssObjectToString({
        padding: '1rem',
        fontSize: undefined,
        borderTopRightRadius: '10px',
      })
    ).toBe(undefinedResult);
  });
});
