// import React from 'react';
// import {
//   Box,
//   BoxProps,
//   StylesApiProps,
//   factory,
//   ElementProps,
//   useProps,
//   useStyles,
//   useVars,
// } from '../../../core';
// import { InputWrapperStylesNames } from '../../Input';
// import classes from './SwitchGroup.module.css';

// export type SwitchGroupStylesNames = InputWrapperStylesNames;
// export type SwitchGroupVariant = string;

// export interface SwitchGroupProps
//   extends BoxProps,
//     StylesApiProps<SwitchGroupStylesNames, SwitchGroupVariant>,
//     Omit<ElementProps<'div'>, 'onChange'> {
//   /** <Switch /> components */
//   children: React.ReactNode;

//   /** Controlled component value */
//   value?: string[];

//   /** Default value for uncontrolled component */
//   defaultValue?: string[];

//   /** Called when value changes */
//   onChange?(value: string[]): void;

//   /** Props spread to InputWrapper */
//   wrapperProps?: Record<string, any>;
// }

// export interface SwitchGroupFactory {
//   props: SwitchGroupProps;
//   ref: HTMLDivElement;
//   stylesNames: SwitchGroupStylesNames;
// }

// const defaultProps: Partial<SwitchGroupProps> = {};

// export const SwitchGroup = factory<SwitchGroupFactory>((props, ref) => {
//   const { ...others } = useProps('SwitchGroup', defaultProps, props);

//   return (
//     <Box
//       ref={ref}
//       {...getStyles('root')}
//       vars={{
//         ..._vars,
//       }}
//       {...others}
//     />
//   );
// });

// SwitchGroup.displayName = '@mantine/core/SwitchGroup';
