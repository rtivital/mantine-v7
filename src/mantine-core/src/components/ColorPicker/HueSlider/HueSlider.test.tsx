import { tests } from '@mantine/tests';
import { HueSlider, HueSliderProps } from './HueSlider';
import { ColorSliderStylesNames } from '../ColorSlider/ColorSlider';

const defaultProps: HueSliderProps = {
  color: '#fff',
  value: 0.45,
};

describe('@mantine/core/HueSlider', () => {
  tests.itSupportsSystemProps<HueSliderProps, ColorSliderStylesNames>({
    component: HueSlider,
    props: defaultProps,
    styleProps: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/HueSlider',
    stylesApiSelectors: ['slider'],
  });
});
