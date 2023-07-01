(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7012],{92815:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/combobox",function(){return t(33239)}])},33239:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return en}});var n=t(85893),r=t(11151),s=t(34940),l=t(25263),c=t(67294),a=t(14437),i=t(79894),p=t(39213),d=t(18743);let m=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSelect={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,u=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],b={type:"code",component:function(){let e=(0,a.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(null),n=u.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{store:e,onOptionSelect:o=>{t(o),e.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(p.M,{component:"button",pointer:!0,rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||c.createElement(d.I.Placeholder,null,"Pick value"))),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:m};var h=t(31577);let x=`
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSelect={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,C=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],g={type:"code",component:function(){let e=(0,a.K)(),[o,t]=(0,c.useState)(""),n=!C.some(e=>e===o),r=n?C.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())):C,s=r.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{onOptionSelect:o=>{t(o),e.closeDropdown()},store:e},c.createElement(i.h.Target,null,c.createElement(h.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:o,onChange:o=>{t(o.currentTarget.value),e.openDropdown(),e.updateSelectedOptionIndex()},onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown()})),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,0===s.length?c.createElement(i.h.Empty,null,"Nothing found"):s)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:x};var w=t(94873),v=t(77048),f=t(43406);let O=`
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSelect={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`,S=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],E={type:"code",component:function(){let[e,o]=(0,c.useState)(null),t=(0,a.K)({onDropdownClose:()=>t.resetSelectedOption()}),n=S.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(c.Fragment,null,c.createElement(w.x,{mb:"xs"},c.createElement(v.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),c.createElement(v.x,{span:!0,size:"sm"},e||"Nothing selected")),c.createElement(i.h,{store:t,width:250,position:"bottom-start",withArrow:!0,onOptionSelect:e=>{o(e),t.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(f.z,{onClick:()=>t.toggleDropdown()},"Pick item")),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:O};var D=t(81957);let F=`
import { useState } from 'react';
import { InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const shouldFilterOptions = groceries.every((item) => item !== search);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSelect={(val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search value"
          value={search}
          onChange={(event) => {
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,j=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],y={type:"code",component:function(){let e=(0,a.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(null),[n,r]=(0,c.useState)(""),s=j.every(e=>e!==n),l=s?j.filter(e=>e.toLowerCase().includes(n.toLowerCase().trim())):j,d=l.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{store:e,onOptionSelect:o=>{t(o),r(o),e.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(p.M,{rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>{e.closeDropdown(),r(o||"")},placeholder:"Search value",value:n,onChange:o=>{e.updateSelectedOptionIndex(),r(o.currentTarget.value)}})),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,d.length>0?d:c.createElement(i.h.Empty,null,"Nothing found"))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:F},k=`
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSelect={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search groceries"
          />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`,T=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],B={type:"code",component:function(){let[e,o]=(0,c.useState)(""),[t,n]=(0,c.useState)(null),r=(0,a.K)({onDropdownClose:()=>{r.resetSelectedOption(),r.focusTarget(),o("")},onDropdownOpen:()=>{r.focusSearchInput()}}),s=T.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())).map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(c.Fragment,null,c.createElement(w.x,{mb:"xs"},c.createElement(v.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),c.createElement(v.x,{span:!0,size:"sm"},t||"Nothing selected")),c.createElement(i.h,{store:r,width:250,position:"bottom-start",withArrow:!0,onOptionSelect:e=>{n(e),r.closeDropdown()}},c.createElement(i.h.Target,{withAriaAttributes:!1},c.createElement(f.z,{onClick:()=>r.toggleDropdown()},"Pick item")),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Search,{value:e,onChange:e=>o(e.currentTarget.value),placeholder:"Search groceries"}),c.createElement(i.h.Options,null,s.length>0?s:c.createElement(i.h.Empty,null,"Nothing found")))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:k},I=`
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  useEffect(() => {
    // we need to wait for options to render before we can select first one
    combobox.selectFirstOption();
  }, [value]);

  return (
    <Combobox
      onOptionSelect={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,P=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],A={type:"code",component:function(){let e=(0,a.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(""),n=!P.some(e=>e===o),r=n?P.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())):P,s=r.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return(0,c.useEffect)(()=>{e.selectFirstOption()},[o]),c.createElement(i.h,{onOptionSelect:o=>{t(o),e.closeDropdown()},store:e},c.createElement(i.h.Target,null,c.createElement(h.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:o,onChange:o=>{t(o.currentTarget.value),e.openDropdown()},onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown()})),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,0===s.length?c.createElement(i.h.Empty,null,"Nothing found"):s)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:I};var L=t(74378),V=t(17723);let z=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, CheckIcon, Group } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: (eventSource) => {
      if (eventSource === 'keyboard') {
        combobox.selectActiveOption();
      } else {
        combobox.updateSelectedOptionIndex('active');
      }
    },
  });

  const [value, setValue] = useState<string | null>('\u{1F966} Broccoli');

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item} active={item === value}>
      <Group gap="xs">
        {item === value && <CheckIcon size={12} />}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      resetSelectionOnOptionHover
      onOptionSelect={(val) => {
        setValue(val);
        combobox.updateSelectedOptionIndex('active');
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,N=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],M={type:"code",component:function(){let e=(0,a.K)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:o=>{"keyboard"===o?e.selectActiveOption():e.updateSelectedOptionIndex("active")}}),[o,t]=(0,c.useState)("\uD83E\uDD66 Broccoli"),n=N.map(e=>c.createElement(i.h.Option,{value:e,key:e,active:e===o},c.createElement(L.Z,{gap:"xs"},e===o&&c.createElement(V.n,{size:12}),c.createElement("span",null,e))));return c.createElement(i.h,{store:e,resetSelectionOnOptionHover:!0,onOptionSelect:o=>{t(o),e.updateSelectedOptionIndex("active")}},c.createElement(i.h.Target,{targetType:"button"},c.createElement(p.M,{component:"button",pointer:!0,rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||c.createElement(d.I.Placeholder,null,"Pick value"))),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:z},K=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = [
  '\u{1F34E} Apples',
  '\u{1F34C} Bananas',
  '\u{1F966} Broccoli',
  '\u{1F955} Carrots',
  '\u{1F36B} Chocolate',
  '\u{1F347} Grapes',
  '\u{1F34B} Lemon',
  '\u{1F96C} Lettuce',
  '\u{1F344} Mushrooms',
  '\u{1F34A} Oranges',
  '\u{1F954} Potatoes',
  '\u{1F345} Tomatoes',
  '\u{1F95A} Eggs',
  '\u{1F95B} Milk',
  '\u{1F35E} Bread',
  '\u{1F357} Chicken',
  '\u{1F354} Hamburger',
  '\u{1F9C0} Cheese',
  '\u{1F969} Steak',
  '\u{1F35F} French Fries',
  '\u{1F355} Pizza',
  '\u{1F966} Cauliflower',
  '\u{1F95C} Peanuts',
  '\u{1F366} Ice Cream',
  '\u{1F36F} Honey',
  '\u{1F956} Baguette',
  '\u{1F363} Sushi',
  '\u{1F95D} Kiwi',
  '\u{1F353} Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSelect={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
          {options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,Y=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],H={type:"code",component:function(){let e=(0,a.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(null),n=Y.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{store:e,onOptionSelect:o=>{t(o),e.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(p.M,{component:"button",pointer:!0,rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||c.createElement(d.I.Placeholder,null,"Pick value"))),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,{mah:200,style:{overflowY:"auto"}},n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:K};var W=t(45906);let _=`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, ScrollArea } from '@mantine/core';

const groceries = [
  '\u{1F34E} Apples',
  '\u{1F34C} Bananas',
  '\u{1F966} Broccoli',
  '\u{1F955} Carrots',
  '\u{1F36B} Chocolate',
  '\u{1F347} Grapes',
  '\u{1F34B} Lemon',
  '\u{1F96C} Lettuce',
  '\u{1F344} Mushrooms',
  '\u{1F34A} Oranges',
  '\u{1F954} Potatoes',
  '\u{1F345} Tomatoes',
  '\u{1F95A} Eggs',
  '\u{1F95B} Milk',
  '\u{1F35E} Bread',
  '\u{1F357} Chicken',
  '\u{1F354} Hamburger',
  '\u{1F9C0} Cheese',
  '\u{1F969} Steak',
  '\u{1F35F} French Fries',
  '\u{1F355} Pizza',
  '\u{1F966} Cauliflower',
  '\u{1F95C} Peanuts',
  '\u{1F366} Ice Cream',
  '\u{1F36F} Honey',
  '\u{1F956} Baguette',
  '\u{1F363} Sushi',
  '\u{1F95D} Kiwi',
  '\u{1F353} Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSelect={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          pointer
          rightSection={<Combobox.Chevron />}
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" mah={200}>
            {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,R=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],U={type:"code",component:function(){let e=(0,a.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(null),n=R.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{store:e,onOptionSelect:o=>{t(o),e.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(p.M,{component:"button",pointer:!0,rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||c.createElement(d.I.Placeholder,null,"Pick value"))),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,c.createElement(W.x.Autosize,{type:"scroll",mah:200},n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:_},G=`
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSelect={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={options.length === 0}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,q=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],X={type:"code",component:function(){let e=(0,a.K)(),[o,t]=(0,c.useState)(""),n=!q.some(e=>e===o),r=n?q.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())):q,s=r.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{onOptionSelect:o=>{t(o),e.closeDropdown()},store:e},c.createElement(i.h.Target,null,c.createElement(h.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:o,onChange:o=>{t(o.currentTarget.value),e.openDropdown()},onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown()})),c.createElement(i.h.Dropdown,{hidden:0===s.length},c.createElement(i.h.Options,null,s)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:G},Z=`
import { useState } from 'react';
import { TextInput, Button, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [opened, setOpened] = useState(false);
  const combobox = useCombobox({ opened });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Button mb="md" onClick={() => setOpened((o) => !o)}>
        Toggle dropdown
      </Button>

      <Combobox store={combobox}>
        <Combobox.Target>
          <TextInput
            label="Autocomplete"
            description="Dropdown is opened/closed when button is clicked"
            placeholder="Click button to toggle dropdown"
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`,J=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],Q={type:"code",component:function(){let[e,o]=(0,c.useState)(!1),t=(0,a.K)({opened:e}),n=J.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(c.Fragment,null,c.createElement(f.z,{mb:"md",onClick:()=>o(e=>!e)},"Toggle dropdown"),c.createElement(i.h,{store:t},c.createElement(i.h.Target,null,c.createElement(h.o,{label:"Autocomplete",description:"Dropdown is opened/closed when button is clicked",placeholder:"Click button to toggle dropdown"})),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,n))))},code:Z,maxWidth:340,centered:!0,defaultExpanded:!1},$=`
import { useState } from 'react';
import { Combobox, TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <Combobox onOptionSelect={setValue}>
      <Combobox.EventsTarget>
        <TextInput
          placeholder="Pick value"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Combobox.EventsTarget>

      <Combobox.Options mt="sm">
        <Combobox.Option value="First">First</Combobox.Option>
        <Combobox.Option value="Second">Second</Combobox.Option>
        <Combobox.Option value="Third">Third</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  );
}
`,ee={type:"code",component:function(){let[e,o]=(0,c.useState)("");return c.createElement(i.h,{onOptionSelect:o},c.createElement(i.h.EventsTarget,null,c.createElement(h.o,{placeholder:"Pick value",value:e,onChange:e=>o(e.currentTarget.value)})),c.createElement(i.h.Options,{mt:"sm"},c.createElement(i.h.Option,{value:"First"},"First"),c.createElement(i.h.Option,{value:"Second"},"Second"),c.createElement(i.h.Option,{value:"Third"},"Third")))},code:$,centered:!0,maxWidth:340,defaultExpanded:!1},eo=(0,s.A)(l.us.Combobox);function et(e){let o=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),e.components),{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Combobox"})," provides a set of components and hooks to custom select, multiselect or autocomplete components.\nThe component is very flexible – you have full control the rendering and logic."]}),"\n",(0,n.jsx)(t,{data:b}),"\n",(0,n.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(o.p,{children:["This page contains only a small set of examples, as the full code of the demos is long.\nYou can find all 50+ examples on a ",(0,n.jsx)(o.a,{href:"/combobox?e=BasicSelect",children:"separate page"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"usecombobox-hook",children:"useCombobox hook"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"useCombobox"})," hook provides combobox store. The store contains current state of the component\nand handlers to update it. Created store must be passed to the ",(0,n.jsx)(o.code,{children:"store"})," prop of ",(0,n.jsx)(o.code,{children:"Combobox"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useCombobox, Combobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n  return <Combobox store={combobox}>{/* Your implementation */}</Combobox>;\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"usecombobox-options",children:"useCombobox options"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"useCombobox"})," hooks accepts an options object with the following properties:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface UseComboboxOptions {\n  /** Default value for `dropdownOpened`, `false` by default */\n  defaultOpened?: boolean;\n\n  /** Controlled `dropdownOpened` state */\n  opened?: boolean;\n\n  /** Called when `dropdownOpened` state changes */\n  onOpenedChange?(opened: boolean): void;\n\n  /** Called when dropdown closes with event source: keyboard, mouse or unknown */\n  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Called when dropdown opens with event source: keyboard, mouse or unknown */\n  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */\n  loop?: boolean;\n\n  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */\n  scrollBehavior?: ScrollBehavior;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can import ",(0,n.jsx)(o.code,{children:"UseComboboxOptions"})," type from ",(0,n.jsx)(o.code,{children:"@mantine/core"})," package:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import type { UseComboboxOptions } from '@mantine/core';\n"})}),"\n",(0,n.jsx)(o.h2,{id:"combobox-store",children:"Combobox store"}),"\n",(0,n.jsx)(o.p,{children:"Combobox store is an object with the following properties:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface ComboboxStore {\n  /** Current dropdown opened state */\n  dropdownOpened: boolean;\n\n  /** Opens dropdown */\n  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Closes dropdown */\n  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Toggles dropdown opened state */\n  toggleDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Selected option index */\n  selectedOptionIndex: number;\n\n  /** Selects `Combobox.Option` by index */\n  selectOption(index: number): void;\n\n  /** Selects first `Combobox.Option` with `active` prop.\n   *  If there are no such options, the function does nothing.\n   */\n  selectActiveOption(): string | null;\n\n  /** Selects first `Combobox.Option` that is not disabled.\n   *  If there are no such options, the function does nothing.\n   * */\n  selectFirstOption(): string | null;\n\n  /** Selects next `Combobox.Option` that is not disabled.\n   *  If the current option is the last one, the function selects first option, if `loop` is true.\n   */\n  selectNextOption(): string | null;\n\n  /** Selects previous `Combobox.Option` that is not disabled.\n   *  If the current option is the first one, the function selects last option, if `loop` is true.\n   * */\n  selectPreviousOption(): string | null;\n\n  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */\n  resetSelectedOption(): void;\n\n  /** Triggers `onClick` event of selected option.\n   *  If there is no selected option, the function does nothing.\n   */\n  clickSelectedOption(): void;\n\n  /** Updates selected option index to currently selected or active option.\n   *  The function is required to be used with searchable components to update selected option index\n   *  when options list changes based on search query.\n   */\n  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;\n\n  /** List id, used for `aria-*` attributes */\n  listId: string | null;\n\n  /** Sets list id */\n  setListId(id: string): void;\n\n  /** Ref of `Combobox.Search` input */\n  searchRef: React.MutableRefObject<HTMLInputElement | null>;\n\n  /** Moves focus to `Combobox.Search` input */\n  focusSearchInput(): void;\n\n  /** Ref of the target element */\n  targetRef: React.MutableRefObject<HTMLElement | null>;\n\n  /** Moves focus to the target element */\n  focusTarget(): void;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can import ",(0,n.jsx)(o.code,{children:"ComboboxStore"})," type from ",(0,n.jsx)(o.code,{children:"@mantine/core"})," package:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import type { ComboboxStore } from '@mantine/core';\n"})}),"\n",(0,n.jsx)(o.h2,{id:"usecombobox-handlers",children:"useCombobox handlers"}),"\n",(0,n.jsxs)(o.p,{children:["Combobox store handlers can be used to control ",(0,n.jsx)(o.code,{children:"Combobox"})," state.\nFor example, to open dropdown, call ",(0,n.jsx)(o.code,{children:"openDropdown"})," handler:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useCombobox, Combobox, Button } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n\n  return (\n    <Combobox>\n      <Combobox.Target>\n        <Button onClick={() => combobox.openDropdown()}>Open dropdown</Button>\n      </Combobox.Target>\n\n      {/* Your implementation */}\n    </Combobox>\n  );\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can use store handlers in ",(0,n.jsx)(o.code,{children:"useCombobox"})," options. For example, you can\ncall ",(0,n.jsx)(o.code,{children:"selectFirstOption"})," when the dropdown is opened and ",(0,n.jsx)(o.code,{children:"resetSelectedOption"}),"\nwhen it is closed:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useCombobox, Combobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox({\n    onDropdownOpen: () => combobox.selectFirstOption(),\n    onDropdownClose: () => combobox.resetSelectedOption(),\n  });\n\n  return <Combobox store={combobox}>{/* Your implementation */}</Combobox>;\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"comboboxtarget",children:"Combobox.Target"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Combobox.Target"})," should be used as a wrapper for the target element or component.\n",(0,n.jsx)(o.code,{children:"Combobox.Target"})," marks its child as a target for dropdown and sets ",(0,n.jsx)(o.code,{children:"aria-*"})," attributes\nand adds keyboard event listeners to it."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Combobox.Target"})," requires a single child element or component. The child component\nmust accept ",(0,n.jsx)(o.code,{children:"ref"})," and ",(0,n.jsx)(o.code,{children:"...others"})," props. You can use any Mantine component as a target without\nany additional configuration, for example, ",(0,n.jsx)(o.a,{href:"/components/button/",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/text-input/",children:"TextInput"}),"\nor ",(0,n.jsx)(o.a,{href:"/core/input/#inputbase-component",children:"InputBase"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Example of using ",(0,n.jsx)(o.code,{children:"Combobox.Target"})," with ",(0,n.jsx)(o.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,n.jsx)(t,{data:g}),"\n",(0,n.jsxs)(o.p,{children:["Example of using ",(0,n.jsx)(o.code,{children:"Combobox.Target"})," with ",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,n.jsx)(t,{data:E}),"\n",(0,n.jsx)(o.h2,{id:"split-events-and-dropdown-targets",children:"Split events and dropdown targets"}),"\n",(0,n.jsxs)(o.p,{children:["In some cases, you might need to use different elements as an events target and as a dropdown.\nUse ",(0,n.jsx)(o.code,{children:"Combobox.EventsTarget"})," to add ",(0,n.jsx)(o.code,{children:"aria-*"})," attributes and keyboard event handlers, and\n",(0,n.jsx)(o.code,{children:"Combobox.DropdownTarget"})," to position dropdown relative to the target."]}),"\n",(0,n.jsxs)(o.p,{children:["You can have as many ",(0,n.jsx)(o.code,{children:"Combobox.EventsTarget"})," as you need, but only one ",(0,n.jsx)(o.code,{children:"Combobox.DropdownTarget"}),"\nper ",(0,n.jsx)(o.code,{children:"Combobox"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Example of using ",(0,n.jsx)(o.code,{children:"Combobox.EventsTarget"})," and ",(0,n.jsx)(o.code,{children:"Combobox.DropdownTarget"})," with ",(0,n.jsx)(o.a,{href:"/core/pills-input",children:"PillsInput"})," component\nto create searchable multiselect component:"]}),"\n",(0,n.jsx)(t,{data:D.R}),"\n",(0,n.jsx)(o.h2,{id:"update-selected-option-index",children:"Update selected option index"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"updateSelectedOptionIndex"})," handler is required to be called when options list changes.\nUsually, the options list changes when options are filtered based on the search query. In this case,\nyou need to call ",(0,n.jsx)(o.code,{children:"updateSelectedOptionIndex"})," in ",(0,n.jsx)(o.code,{children:"onChange"})," handler of the search input."]}),"\n",(0,n.jsxs)(o.p,{children:["Example of using ",(0,n.jsx)(o.code,{children:"updateSelectedOptionIndex"})," handler in searchable select component:"]}),"\n",(0,n.jsx)(t,{data:y}),"\n",(0,n.jsx)(o.h2,{id:"search-input",children:"Search input"}),"\n",(0,n.jsxs)(o.p,{children:["If you prefer to have search input inside the dropdown, use ",(0,n.jsx)(o.code,{children:"Combobox.Search"})," component.\nTo focus the search input, call ",(0,n.jsx)(o.code,{children:"combobox.focusSearchInput"}),", usually it is done\nwhen the dropdown is opened. To prevent focus loss after the dropdown is closed,\ncall ",(0,n.jsx)(o.code,{children:"combobox.focusTarget"}),":"]}),"\n",(0,n.jsx)(t,{data:B}),"\n",(0,n.jsx)(o.h2,{id:"select-first-option",children:"Select first option"}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"combobox.selectFirstOption"})," function to select first option. It is useful\nif you want to select first option when user searching for options in the list.\nIf there are not options available, it will do nothing."]}),"\n",(0,n.jsx)(t,{data:A}),"\n",(0,n.jsx)(o.h2,{id:"active-option",children:"Active option"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"active"})," prop on ",(0,n.jsx)(o.code,{children:"Combobox.Option"})," component to mark it as active.\nBy default, active option does not have any styles, you can use ",(0,n.jsx)(o.code,{children:"data-combobox-active"}),"\n",(0,n.jsx)(o.a,{href:"/styles/data-attributes",children:"data attribute"})," to style it."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"combobox.selectActiveOption"})," function selects active option. Usually, it is called\nwhen the dropdown is opened:"]}),"\n",(0,n.jsx)(t,{data:M}),"\n",(0,n.jsx)(o.h2,{id:"scrollable-list",children:"Scrollable list"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"max-height"})," style on either ",(0,n.jsx)(o.code,{children:"Combobox.Dropdown"})," or ",(0,n.jsx)(o.code,{children:"Combobox.Options"})," to make\noptions list scrollable. You can use ",(0,n.jsx)(o.code,{children:"mah"})," ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style prop"})," to set\n",(0,n.jsx)(o.code,{children:"max-height"}),"."]}),"\n",(0,n.jsx)(t,{data:H}),"\n",(0,n.jsx)(o.h2,{id:"scrollable-list-with-scrollarea",children:"Scrollable list with ScrollArea"}),"\n",(0,n.jsxs)(o.p,{children:["You can also use ",(0,n.jsx)(o.a,{href:"/core/scroll-area",children:"ScrollArea or ScrollArea.Autosize"})," components\ninstead of native scrollbars:"]}),"\n",(0,n.jsx)(t,{data:U}),"\n",(0,n.jsx)(o.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"hidden"})," prop on ",(0,n.jsx)(o.code,{children:"Combobox.Dropdown"})," to hide the dropdown. For example,\nit can be useful when you want to show the dropdown only when there is at least\none option available:"]}),"\n",(0,n.jsx)(t,{data:X}),"\n",(0,n.jsx)(o.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,n.jsxs)(o.p,{children:["To control dropdown opened state, pass ",(0,n.jsx)(o.code,{children:"opened"})," to ",(0,n.jsx)(o.code,{children:"useCombobox"})," hook:"]}),"\n",(0,n.jsx)(t,{data:Q}),"\n",(0,n.jsx)(o.h2,{id:"without-dropdown",children:"Without dropdown"}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.code,{children:"Combobox"})," without dropdown. To do so, use ",(0,n.jsx)(o.code,{children:"Combobox.EventsTarget"})," instead\nof ",(0,n.jsx)(o.code,{children:"Combobox.Target"}),":"]}),"\n",(0,n.jsx)(t,{data:ee})]})}var en=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(eo,Object.assign({},e,{children:(0,n.jsx)(et,e)}))}}},function(e){e.O(0,[2411,7437,9734,3692,9774,2888,179],function(){return e(e.s=92815)}),_N_E=e.O()}]);