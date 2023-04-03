import { tests } from '@mantine/tests';
import { AlphaSlider, AlphaSliderProps } from './AlphaSlider';
import { ColorSliderStylesNames } from '../ColorSlider/ColorSlider';

const defaultProps: AlphaSliderProps = {
  color: '#fff',
  value: 0.45,
};

describe('@mantine/core/AlphaSlider', () => {
  tests.itSupportsSystemProps<AlphaSliderProps, ColorSliderStylesNames>({
    component: AlphaSlider,
    props: defaultProps,
    styleProps: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/AlphaSlider',
    stylesApiSelectors: ['slider'],
  });
});
