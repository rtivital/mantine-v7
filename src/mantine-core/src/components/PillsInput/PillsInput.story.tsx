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

export function AutoType() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <PillsInput>
        <Pill.Group>
          {getPills({})}
          <PillsInput.Field placeholder="Pills input" type="auto" />
        </Pill.Group>
      </PillsInput>
    </div>
  );
}
