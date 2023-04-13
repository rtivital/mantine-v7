import { createSafeContext, GetStylesApi } from '../../core';

export type SliderStylesNames =
  | 'root'
  | 'label'
  | 'thumb'
  | 'trackContainer'
  | 'track'
  | 'bar'
  | 'markWrapper'
  | 'mark'
  | 'markLabel';

export type SliderCssVariables =
  | '--slider-size'
  | '--slider-color'
  | '--slider-thumb-size'
  | '--slider-radius';

export type SliderVariant = string;

interface SliderContextValue {
  getStyles: GetStylesApi<{ props: any; stylesNames: SliderStylesNames }>;
}

export const [SliderProvider, useSliderContext] = createSafeContext<SliderContextValue>(
  'SliderProvider was not found in tree'
);
