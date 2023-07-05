/* eslint-disable no-param-reassign */
import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import {
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  Factory,
  extractStyleProps,
  useStyles,
  useResolvedStylesApi,
} from '../../core';
import { __BaseInputProps, __InputStylesNames } from '../Input';
import { PillsInput } from '../PillsInput';
import { Pill } from '../Pill';

export type TagsInputStylesNames = __InputStylesNames | 'pill' | 'pillsList' | 'inputField';

export interface TagsInputProps
  extends BoxProps,
    __BaseInputProps,
    StylesApiProps<TagsInputFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called whe value changes */
  onChange?(value: string[]): void;

  /** Maximum number of tags, `Infinity` by default */
  maxTags?: number;

  /** Determines whether duplicate tags are allowed, `false` by default */
  allowDuplicates?: boolean;

  /** Called when user tries to submit a duplicated tag */
  onDuplicate?(value: string): void;
}

export type TagsInputFactory = Factory<{
  props: TagsInputProps;
  ref: HTMLInputElement;
  stylesNames: TagsInputStylesNames;
}>;

const defaultProps: Partial<TagsInputProps> = {
  maxTags: Infinity,
  allowDuplicates: false,
};

export const TagsInput = factory<TagsInputFactory>((_props, ref) => {
  const props = useProps('TagsInput', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    value,
    defaultValue,
    onChange,
    onKeyDown,
    maxTags,
    allowDuplicates,
    onDuplicate,
    variant,
    ...others
  } = props;

  const {
    styleProps,
    rest: { type, ...rest },
  } = extractStyleProps(others);

  const [_value, setValue] = useUncontrolled({
    value,
    defaultValue,
    finalValue: [],
    onChange,
  });

  const getStyles = useStyles<TagsInputFactory>({
    name: 'TagsInput',
    classes: {} as any,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<TagsInputFactory>({
    props,
    styles,
    classNames,
  });

  const handleInputKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(event);

    const { length } = event.currentTarget.value.trim();
    const inputValue = event.currentTarget.value.trim();

    if (event.key === 'Enter' && length > 0) {
      event.preventDefault();
      const isDuplicate = _value.some((tag) => tag.toLowerCase() === inputValue.toLowerCase());

      if (isDuplicate) {
        onDuplicate?.(inputValue);
      }

      if ((!isDuplicate || (isDuplicate && allowDuplicates)) && _value.length < maxTags!) {
        event.currentTarget.value = '';

        if (inputValue.length > 0) {
          setValue([..._value, inputValue]);
        }
      }
    }

    if (event.key === 'Backspace' && length === 0 && _value.length > 0) {
      setValue(_value.slice(0, _value.length - 1));
    }
  };

  const values = _value.map((item, index) => (
    <Pill
      key={`${item}-${index}`}
      withRemoveButton
      onRemove={() => setValue(_value.filter((i) => item !== i))}
      {...getStyles('pill')}
    >
      {item}
    </Pill>
  ));

  return (
    <PillsInput
      {...styleProps}
      __staticSelector="TagsInput"
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      size={size}
      className={className}
      style={style}
      variant={variant}
    >
      <Pill.Group {...getStyles('pillsList')}>
        {values}
        <PillsInput.Field
          {...rest}
          ref={ref}
          {...getStyles('inputField')}
          unstyled={unstyled}
          onKeyDown={handleInputKeydown}
        />
      </Pill.Group>
    </PillsInput>
  );
});

TagsInput.displayName = '@mantine/core/TagsInput';
