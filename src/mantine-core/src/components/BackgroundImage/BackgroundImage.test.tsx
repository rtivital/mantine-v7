import { tests } from '@mantine/tests';
import {
  BackgroundImage,
  BackgroundImageProps,
  BackgroundImageStylesNames,
} from './BackgroundImage';

const defaultProps: BackgroundImageProps = {
  src: 'test.png',
};

describe('@mantine/core/BackgroundImage', () => {
  tests.itSupportsSystemProps<BackgroundImageProps, BackgroundImageStylesNames>({
    component: BackgroundImage,
    props: defaultProps,
    polymorphic: true,
    styleProps: true,
    children: true,
    extend: true,
    refType: HTMLDivElement,
    displayName: '@mantine/core/BackgroundImage',
    stylesApiSelectors: ['root'],
  });
});
