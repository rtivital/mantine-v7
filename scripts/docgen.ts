import path from 'path';
import fs from 'fs-extra';
import { DeclarationPath } from './docgen/get-declarations-list';
import { generateDeclarations } from './docgen/generate-declarations';

const EXTRA_FILES_PATHS = [
  // Input
  '../src/mantine-core/src/components/Input/InputLabel/InputLabel.tsx',
  '../src/mantine-core/src/components/Input/InputWrapper/InputWrapper.tsx',
  '../src/mantine-core/src/components/Input/InputDescription/InputDescription.tsx',
  '../src/mantine-core/src/components/Input/InputError/InputError.tsx',

  // Button
  '../src/mantine-core/src/components/Button/ButtonGroup/ButtonGroup.tsx',

  // ActionIcon
  '../src/mantine-core/src/components/ActionIcon/ActionIconGroup/ActionIconGroup.tsx',

  // Popover
  '../src/mantine-core/src/components/Popover/PopoverTarget/PopoverTarget.tsx',
  '../src/mantine-core/src/components/Popover/PopoverDropdown/PopoverDropdown.tsx',

  // Slider
  '../src/mantine-core/src/components/Slider/Slider/Slider.tsx',
  '../src/mantine-core/src/components/Slider/RangeSlider/RangeSlider.tsx',

  // Switch
  '../src/mantine-core/src/components/Switch/SwitchGroup/SwitchGroup.tsx',

  // Checkbox
  '../src/mantine-core/src/components/Checkbox/CheckboxGroup/CheckboxGroup.tsx',

  // Tabs
  '../src/mantine-core/src/components/Tabs/TabsTab/TabsTab.tsx',
  '../src/mantine-core/src/components/Tabs/TabsList/TabsList.tsx',
  '../src/mantine-core/src/components/Tabs/TabsPanel/TabsPanel.tsx',

  // Accordion
  '../src/mantine-core/src/components/Accordion/AccordionItem/AccordionItem.tsx',
  '../src/mantine-core/src/components/Accordion/AccordionControl/AccordionControl.tsx',

  // Pill
  '../src/mantine-core/src/components/Pill/PillGroup/PillGroup.tsx',

  // PillsInput
  '../src/mantine-core/src/components/PillsInput/PillsInputField/PillsInputField.tsx',

  // Combobox
  '../src/mantine-core/src/components/Combobox/ComboboxOption/ComboboxOption.tsx',
  '../src/mantine-core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
  '../src/mantine-core/src/components/Combobox/ComboboxTarget/ComboboxTarget.tsx',
  '../src/mantine-core/src/components/Combobox/ComboboxDropdownTarget/ComboboxDropdownTarget.tsx',
  '../src/mantine-core/src/components/Combobox/ComboboxEventsTarget/ComboboxEventsTarget.tsx',
  '../src/mantine-core/src/components/Combobox/ComboboxDropdown/ComboboxDropdown.tsx',
];

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../src/mantine-core/src/components') },
  // { type: 'package', path: path.join(__dirname, '../src/mantine-dates/src/components') },
  // { type: 'package', path: path.join(__dirname, '../src/mantine-dropzone/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
