import React from 'react';
import { PillsInput } from './PillsInput';
import { Pill } from '../Pill';

export default { title: 'PillsInput' };

const getPills = (props: any) => (
  <>
    <Pill withRemoveButton {...props}>
      First
    </Pill>
    <Pill withRemoveButton {...props}>
      Second
    </Pill>
    <Pill withRemoveButton {...props}>
      Third
    </Pill>
    <Pill withRemoveButton {...props}>
      Fourth
    </Pill>
    <Pill withRemoveButton {...props}>
      Fifth
    </Pill>
    <Pill withRemoveButton {...props}>
      Sixth
    </Pill>
    <Pill withRemoveButton {...props}>
      Seventh
    </Pill>
    <Pill withRemoveButton {...props}>
      Eighth
    </Pill>
    {/* <Pill withRemoveButton>Ninth</Pill> */}
  </>
);

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <PillsInput>
        <Pill.Group>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function Sizes() {
  const items = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <PillsInput size={size} key={size} mt="xl">
      <Pill.Group size={size}>
        {getPills({})}
        <PillsInput.Field placeholder="Pills input" />
      </Pill.Group>
    </PillsInput>
  ));

  return <div style={{ padding: 40, maxWidth: 600 }}>{items}</div>;
}

export function AutoType() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <PillsInput>
        <Pill.Group>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" type="auto" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, maxWidth: 460 }}>
      <PillsInput disabled>
        <Pill.Group disabled>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function WithinDisabledFieldset() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <fieldset disabled>
        <PillsInput>
          <Pill.Group>
            {getPills({})}
            <PillsInput.Field placeholder="Pills input" />
          </Pill.Group>
        </PillsInput>
      </fieldset>
    </div>
  );
}

export function WithLabel() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <PillsInput label="Pills input label" description="Pills input description">
        <Pill.Group>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}

export function WithError() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <PillsInput label="Pills input label" error="test-error">
        <Pill.Group>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}
