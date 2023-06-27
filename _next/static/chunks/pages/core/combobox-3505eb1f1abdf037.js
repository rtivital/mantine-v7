(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7012],{33507:function(e,o,t){"use strict";t.d(o,{Z:function(){return n}});var n=(0,t(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,o,t){"use strict";t.d(o,{Z:function(){return n}});var n=(0,t(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,o,t){"use strict";t.d(o,{Z:function(){return n}});var n=(0,t(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,o,t){"use strict";t.d(o,{Z:function(){return n}});var n=(0,t(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,o,t){"use strict";t.d(o,{Z:function(){return n}});var n=(0,t(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,o,t){"use strict";t.d(o,{Z:function(){return n}});var n=(0,t(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,o,t){"use strict";t.d(o,{Z:function(){return n}});var n=(0,t(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},92815:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/combobox",function(){return t(9666)}])},9666:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return ee}});var n=t(85893),r=t(11151),l=t(34940),a=t(25263),c=t(67294),s=t(14437),i=t(24431),p=t(39213),u=t(51499);let m=`
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
`,b=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,s.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(null),n=b.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{store:e,onOptionSelect:o=>{t(o),e.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(p.M,{component:"button",pointer:!0,rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||c.createElement(u.I.Placeholder,null,"Pick value"))),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:m};var h=t(31577);let x=`
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
`,C=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],g={type:"code",component:function(){let e=(0,s.K)(),[o,t]=(0,c.useState)(""),n=!C.some(e=>e===o),r=n?C.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())):C,l=r.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{onOptionSelect:o=>{t(o),e.closeDropdown()},store:e},c.createElement(i.h.Target,null,c.createElement(h.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:o,onChange:o=>{t(o.currentTarget.value),e.openDropdown(),e.updateSelectedOptionIndex()},onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown()})),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,0===l.length?c.createElement(i.h.Empty,null,"Nothing found"):l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:x},w=`
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
          onChange={(event) => setSearch(event.currentTarget.value)}
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
`,v=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],f={type:"code",component:function(){let e=(0,s.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(null),[n,r]=(0,c.useState)(""),l=v.every(e=>e!==n),a=l?v.filter(e=>e.toLowerCase().includes(n.toLowerCase().trim())):v,u=a.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{store:e,onOptionSelect:o=>{t(o),r(o),e.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(p.M,{rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>{e.closeDropdown(),r(o||"")},placeholder:"Search value",value:n,onChange:e=>r(e.currentTarget.value)})),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,u.length>0?u:c.createElement(i.h.Empty,null,"Nothing found"))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:w};var O=t(94873),S=t(77048),E=t(43406);let F=`
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
`,y=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],D={type:"code",component:function(){let[e,o]=(0,c.useState)(null),t=(0,s.K)({onDropdownClose:()=>t.resetSelectedOption()}),n=y.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(c.Fragment,null,c.createElement(O.x,{mb:"xs"},c.createElement(S.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),c.createElement(S.x,{span:!0,size:"sm"},e||"Nothing selected")),c.createElement(i.h,{store:t,width:250,position:"bottom-start",withArrow:!0,onOptionSelect:e=>{o(e),t.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(E.z,{onClick:()=>t.toggleDropdown()},"Pick item")),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:F},k=`
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
`,B=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],T={type:"code",component:function(){let[e,o]=(0,c.useState)(""),[t,n]=(0,c.useState)(null),r=(0,s.K)({onDropdownClose:()=>{r.resetSelectedOption(),r.focusTarget(),o("")},onDropdownOpen:()=>{r.focusSearchInput()}}),l=B.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())).map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(c.Fragment,null,c.createElement(O.x,{mb:"xs"},c.createElement(S.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),c.createElement(S.x,{span:!0,size:"sm"},t||"Nothing selected")),c.createElement(i.h,{store:r,width:250,position:"bottom-start",withArrow:!0,onOptionSelect:e=>{n(e),r.closeDropdown()}},c.createElement(i.h.Target,{withAriaAttributes:!1},c.createElement(E.z,{onClick:()=>r.toggleDropdown()},"Pick item")),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Search,{value:e,onChange:e=>o(e.currentTarget.value),placeholder:"Search groceries"}),c.createElement(i.h.Options,null,l.length>0?l:c.createElement(i.h.Empty,null,"Nothing found")))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:k},I=`
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
`,j=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],A={type:"code",component:function(){let e=(0,s.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(""),n=!j.some(e=>e===o),r=n?j.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())):j,l=r.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return(0,c.useEffect)(()=>{e.selectFirstOption()},[o]),c.createElement(i.h,{onOptionSelect:o=>{t(o),e.closeDropdown()},store:e},c.createElement(i.h.Target,null,c.createElement(h.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:o,onChange:o=>{t(o.currentTarget.value),e.openDropdown()},onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown()})),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,0===l.length?c.createElement(i.h.Empty,null,"Nothing found"):l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:I};var P=t(74378),M=t(17723);let L=`
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
`,z=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],V={type:"code",component:function(){let e=(0,s.K)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:o=>{"keyboard"===o?e.selectActiveOption():e.updateSelectedOptionIndex("active")}}),[o,t]=(0,c.useState)("\uD83E\uDD66 Broccoli"),n=z.map(e=>c.createElement(i.h.Option,{value:e,key:e,active:e===o},c.createElement(P.Z,{gap:"xs"},e===o&&c.createElement(M.n,{size:12}),c.createElement("span",null,e))));return c.createElement(i.h,{store:e,resetSelectionOnOptionHover:!0,onOptionSelect:o=>{t(o),e.updateSelectedOptionIndex("active")}},c.createElement(i.h.Target,{targetType:"button"},c.createElement(p.M,{component:"button",pointer:!0,rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||c.createElement(u.I.Placeholder,null,"Pick value"))),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:L},N=`
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
`,K=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],Z={type:"code",component:function(){let e=(0,s.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(null),n=K.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{store:e,onOptionSelect:o=>{t(o),e.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(p.M,{component:"button",pointer:!0,rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||c.createElement(u.I.Placeholder,null,"Pick value"))),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,{mah:200,style:{overflowY:"auto"}},n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:N};var _=t(45906);let H=`
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
`,W=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],G={type:"code",component:function(){let e=(0,s.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,c.useState)(null),n=W.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{store:e,onOptionSelect:o=>{t(o),e.closeDropdown()}},c.createElement(i.h.Target,null,c.createElement(p.M,{component:"button",pointer:!0,rightSection:c.createElement(i.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||c.createElement(u.I.Placeholder,null,"Pick value"))),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,c.createElement(_.x.Autosize,{type:"scroll",mah:200},n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:H},Y=`
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
`,q=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],U={type:"code",component:function(){let e=(0,s.K)(),[o,t]=(0,c.useState)(""),n=!q.some(e=>e===o),r=n?q.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())):q,l=r.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(i.h,{onOptionSelect:o=>{t(o),e.closeDropdown()},store:e},c.createElement(i.h.Target,null,c.createElement(h.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:o,onChange:o=>{t(o.currentTarget.value),e.openDropdown()},onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown()})),c.createElement(i.h.Dropdown,{hidden:0===l.length},c.createElement(i.h.Options,null,l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:Y},X=`
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
`,R=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],J={type:"code",component:function(){let[e,o]=(0,c.useState)(!1),t=(0,s.K)({opened:e}),n=R.map(e=>c.createElement(i.h.Option,{value:e,key:e},e));return c.createElement(c.Fragment,null,c.createElement(E.z,{mb:"md",onClick:()=>o(e=>!e)},"Toggle dropdown"),c.createElement(i.h,{store:t},c.createElement(i.h.Target,null,c.createElement(h.o,{label:"Autocomplete",description:"Dropdown is opened/closed when button is clicked",placeholder:"Click button to toggle dropdown"})),c.createElement(i.h.Dropdown,null,c.createElement(i.h.Options,null,n))))},code:X,maxWidth:340,centered:!0,defaultExpanded:!1},Q=(0,l.A)(a.us.Combobox);function $(e){let o=Object.assign({h2:"h2",blockquote:"blockquote",p:"p",strong:"strong",code:"code",a:"a"},(0,r.ah)(),e.components),{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"select-example",children:"Select example"}),"\n",(0,n.jsx)(t,{data:d}),"\n",(0,n.jsx)(o.h2,{id:"autocomplete-example",children:"Autocomplete example"}),"\n",(0,n.jsx)(t,{data:g}),"\n",(0,n.jsx)(o.h2,{id:"searchable-select-example",children:"Searchable select example"}),"\n",(0,n.jsx)(t,{data:f}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.strong,{children:"Different between searchable select and autocomplete"})}),"\n",(0,n.jsx)(o.p,{children:"Autocomplete suggests options based on the user input, but does not enforce\nany of of options to be picked – user can type anything and submit it.\nSearchable select only allows to pick one of the options, it does not allow\nto submit any other value – if the value is not in the list, it will be automatically\nreplaced with the previously selected option."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"target-element",children:"Target element"}),"\n",(0,n.jsxs)(o.p,{children:["You can use any element as target for combobox, it will be used to position\nthe dropdown. To make component accessible, use focusable element as target:\n",(0,n.jsx)(o.code,{children:"input"}),", ",(0,n.jsx)(o.code,{children:"textarea"})," or ",(0,n.jsx)(o.code,{children:"button"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Example of using ",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"})," as a target:"]}),"\n",(0,n.jsx)(t,{data:D}),"\n",(0,n.jsx)(o.h2,{id:"search-input",children:"Search input"}),"\n",(0,n.jsxs)(o.p,{children:["If you prefer to have search input inside the dropdown, use ",(0,n.jsx)(o.code,{children:"Combobox.Search"})," component.\nTo focus the search input, call ",(0,n.jsx)(o.code,{children:"combobox.focusSearchInput"}),", usually it is done\nwhen the dropdown is opened. To prevent focus loss after the dropdown is closed,\ncall ",(0,n.jsx)(o.code,{children:"combobox.focusTarget"}),":"]}),"\n",(0,n.jsx)(t,{data:T}),"\n",(0,n.jsx)(o.h2,{id:"select-first-option",children:"Select first option"}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"combobox.selectFirstOption"})," function to select first option. It is useful\nif you want to select first option when user searching for options in the list.\nIf there are not options available, it will do nothing."]}),"\n",(0,n.jsx)(t,{data:A}),"\n",(0,n.jsx)(o.h2,{id:"active-option",children:"Active option"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"active"})," prop on ",(0,n.jsx)(o.code,{children:"Combobox.Option"})," component to mark it as active.\nBy default, active option does not have any styles, you can use ",(0,n.jsx)(o.code,{children:"data-combobox-active"}),"\n",(0,n.jsx)(o.a,{href:"/styles/data-attributes",children:"data attribute"})," to style it."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"combobox.selectActiveOption"})," function selects active option. Usually, it is called\nwhen the dropdown is opened:"]}),"\n",(0,n.jsx)(t,{data:V}),"\n",(0,n.jsx)(o.h2,{id:"scrollable-list",children:"Scrollable list"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"max-height"})," style on either ",(0,n.jsx)(o.code,{children:"Combobox.Dropdown"})," or ",(0,n.jsx)(o.code,{children:"Combobox.Options"})," to make\noptions list scrollable. You can use ",(0,n.jsx)(o.code,{children:"mah"})," ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style prop"})," to set\n",(0,n.jsx)(o.code,{children:"max-height"}),"."]}),"\n",(0,n.jsx)(t,{data:Z}),"\n",(0,n.jsx)(o.h2,{id:"scrollable-list-with-scrollarea",children:"Scrollable list with ScrollArea"}),"\n",(0,n.jsxs)(o.p,{children:["You can also use ",(0,n.jsx)(o.a,{href:"/core/scroll-area",children:"ScrollArea or ScrollArea.Autosize"})," components\ninstead of native scrollbars:"]}),"\n",(0,n.jsx)(t,{data:G}),"\n",(0,n.jsx)(o.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"hidden"})," prop on ",(0,n.jsx)(o.code,{children:"Combobox.Dropdown"})," to hide the dropdown. For example,\nit can be useful when you want to show the dropdown only when there is at least\none option available:"]}),"\n",(0,n.jsx)(t,{data:U}),"\n",(0,n.jsx)(o.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,n.jsxs)(o.p,{children:["To control dropdown opened state, pass ",(0,n.jsx)(o.code,{children:"opened"})," to ",(0,n.jsx)(o.code,{children:"useCombobox"})," hook:"]}),"\n",(0,n.jsx)(t,{data:J})]})}var ee=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(Q,Object.assign({},e,{children:(0,n.jsx)($,e)}))}}},function(e){e.O(0,[2411,7437,8749,9774,2888,179],function(){return e(e.s=92815)}),_N_E=e.O()}]);