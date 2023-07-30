import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
} from '@mantine/core';
import { useCarouselContext } from '../Carousel.context';
import classes from '../Carousel.module.css';

export type CarouselSlideStylesNames = 'slide';

export interface CarouselSlideProps
  extends BoxProps,
    StylesApiProps<CarouselSlideFactory>,
    ElementProps<'div'> {}

export type CarouselSlideFactory = Factory<{
  props: CarouselSlideProps;
  ref: HTMLDivElement;
  stylesNames: CarouselSlideStylesNames;
  compound: true;
}>;

const defaultProps: Partial<CarouselSlideProps> = {};

export const CarouselSlide = factory<CarouselSlideFactory>((props, ref) => {
  const { classNames, className, style, styles, unstyled, vars, ...others } = useProps(
    'CarouselSlide',
    defaultProps,
    props
  );

  const ctx = useCarouselContext();

  return (
    <Box
      ref={ref}
      {...ctx.getStyles('slide', { className, style, classNames, styles })}
      {...others}
    />
  );
});

CarouselSlide.classes = classes;
CarouselSlide.displayName = '@mantine/core/CarouselSlide';
