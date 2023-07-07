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
import {
  Combobox,
  OptionsDropdown,
  useCombobox,
  getParsedComboboxData,
  getOptionsLockup,
  ComboboxLikeProps,
  ComboboxLikeStylesNames,
} from '../Combobox';
import { __BaseInputProps, __InputStylesNames } from '../Input';
import { PillsInput } from '../PillsInput';
import { Pill } from '../Pill';
import { InputBase } from '../InputBase';
import { filterPickedValues } from './filter-picked-values';

export type MultiSelectStylesNames =
  | __InputStylesNames
  | ComboboxLikeStylesNames
  | 'pill'
  | 'pillsList'
  | 'inputField';

export interface MultiSelectProps
  extends BoxProps,
    __BaseInputProps,
    ComboboxLikeProps,
    StylesApiProps<MultiSelectFactory>,
    ElementProps<'input', 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Controlled component value */
  value?: string[];

  /** Default value for uncontrolled component */
  defaultValue?: string[];

  /** Called whe value changes */
  onChange?(value: string[]): void;

  /** Controlled search value */
  searchValue?: string;

  /** Default search value */
  defaultSearchValue?: string;

  /** Called when search changes */
  onSearchChange?(value: string): void;

  /** Maximum number of values, `Infinity` by default */
  maxValues?: number;

  /** Determines whether the select should be searchable, `false` by default */
  searchable?: boolean;

  /** Message displayed when no option matched current search query, only applicable when `searchable` prop is set */
  nothingFoundMessage?: React.ReactNode;

  /** Determines whether check icon should be displayed near the selected option label, `true` by default */
  withCheckIcon?: boolean;

  /** Position of the check icon relative to the option label, `'left'` by default */
  checkIconPosition?: 'left' | 'right';

  /** Determines whether picked options should be removed from the options list, `false` by default */
  hidePickedOptions?: boolean;
}

export type MultiSelectFactory = Factory<{
  props: MultiSelectProps;
  ref: HTMLInputElement;
  stylesNames: MultiSelectStylesNames;
}>;

const defaultProps: Partial<MultiSelectProps> = {
  maxValues: Infinity,
  size: 'sm',
};

export const MultiSelect = factory<MultiSelectFactory>((_props, ref) => {
  const props = useProps('MultiSelect', defaultProps, _props);
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
    variant,
    data,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    readOnly,
    disabled,
    onFocus,
    onBlur,
    onPaste,
    radius,
    rightSection,
    rightSectionWidth,
    rightSectionPointerEvents,
    rightSectionProps,
    leftSection,
    leftSectionWidth,
    leftSectionPointerEvents,
    leftSectionProps,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    labelProps,
    descriptionProps,
    errorProps,
    wrapperProps,
    description,
    label,
    error,
    maxValues,
    searchable,
    nothingFoundMessage,
    withCheckIcon,
    checkIconPosition,
    hidePickedOptions,
    ...others
  } = props;

  const parsedData = getParsedComboboxData(data);
  const optionsLockup = getOptionsLockup(parsedData);

  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen,
    onDropdownClose: () => {
      onDropdownClose?.();
      combobox.resetSelectedOption();
    },
  });

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

  const [_searchValue, setSearchValue] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: '',
    onChange: onSearchChange,
  });

  const getStyles = useStyles<MultiSelectFactory>({
    name: 'MultiSelect',
    classes: {} as any,
    props,
    classNames,
    styles,
    unstyled,
  });

  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi<MultiSelectFactory>({
    props,
    styles,
    classNames,
  });

  // const selectedOption = _value ? optionsLockup[_value] : undefined;

  const values = _value.map((item, index) => (
    <Pill
      key={`${item}-${index}`}
      withRemoveButton={!readOnly}
      onRemove={() => setValue(_value.filter((i) => item !== i))}
      {...getStyles('pill')}
    >
      {item}
    </Pill>
  ));

  return (
    <Combobox
      store={combobox}
      classNames={resolvedClassNames}
      styles={resolvedStyles}
      unstyled={unstyled}
      size={size}
      __staticSelector="MultiSelect"
      onOptionSubmit={(val) => {
        onOptionSubmit?.(val);
        setSearchValue('');
        _value.length < maxValues! && setValue([..._value, optionsLockup[val].value]);
      }}
      {...comboboxProps}
    >
      <Combobox.DropdownTarget>
        <PillsInput
          {...styleProps}
          __staticSelector="MultiSelect"
          classNames={resolvedClassNames}
          styles={resolvedStyles}
          unstyled={unstyled}
          size={size}
          className={className}
          style={style}
          variant={variant}
          disabled={disabled}
          radius={radius}
          rightSection={rightSection}
          rightSectionWidth={rightSectionWidth}
          rightSectionPointerEvents={rightSectionPointerEvents}
          rightSectionProps={rightSectionProps}
          leftSection={leftSection}
          leftSectionWidth={leftSectionWidth}
          leftSectionPointerEvents={leftSectionPointerEvents}
          leftSectionProps={leftSectionProps}
          inputContainer={inputContainer}
          inputWrapperOrder={inputWrapperOrder}
          withAsterisk={withAsterisk}
          labelProps={labelProps}
          descriptionProps={descriptionProps}
          errorProps={errorProps}
          wrapperProps={wrapperProps}
          description={description}
          label={label}
          error={error}
          multiline
          __stylesApiProps={{ ...props, multiline: true }}
          pointer={!searchable}
        >
          <Pill.Group disabled={disabled} {...getStyles('pillsList')}>
            {values}
            <Combobox.EventsTarget>
              <PillsInput.Field
                {...rest}
                ref={ref}
                {...getStyles('inputField')}
                unstyled={unstyled}
                onFocus={(event) => {
                  onFocus?.(event);
                  combobox.openDropdown();
                }}
                onBlur={(event) => {
                  onBlur?.(event);
                  combobox.closeDropdown();
                }}
                value={_searchValue}
                onChange={(event) => setSearchValue(event.currentTarget.value)}
                disabled={disabled}
                readOnly={readOnly || !searchable}
                pointer={!searchable}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <OptionsDropdown
        data={
          hidePickedOptions ? filterPickedValues({ data: parsedData, value: _value }) : parsedData
        }
        hidden={readOnly || disabled}
        filter={filter}
        search={_searchValue}
        limit={limit}
        hiddenWhenEmpty={
          hidePickedOptions ||
          (!searchable && !!nothingFoundMessage && _searchValue.trim().length !== 0)
        }
        withScrollArea={withScrollArea}
        maxDropdownHeight={maxDropdownHeight}
        filterOptions={searchable}
        value={_value}
        checkIconPosition={checkIconPosition}
        withCheckIcon={withCheckIcon}
        nothingFoundMessage={nothingFoundMessage}
      />
    </Combobox>
  );
});

MultiSelect.classes = { ...InputBase.classes, ...Combobox.classes };
MultiSelect.displayName = '@mantine/core/MultiSelect';
