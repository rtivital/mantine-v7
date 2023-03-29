import { tests } from '@mantine/tests';
import {
  InputPlaceholder,
  InputPlaceholderProps,
  InputPlaceholderStylesNames,
} from './InputPlaceholder';

const defaultProps: InputPlaceholderProps = {};

describe('@mantine/core/InputPlaceholder', () => {
  tests.itSupportsSystemProps<InputPlaceholderProps, InputPlaceholderStylesNames>({
    component: InputPlaceholder,
    props: defaultProps,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLSpanElement,
    displayName: '@mantine/core/InputPlaceholder',
    stylesApiSelectors: ['placeholder'],
  });
});
