```tsx
import { Spotlight } from '@mantine/spotlight';

function Demo() {
  return (
    <Spotlight>
      <Spotlight.Search value="" onChange={onQueryChange} />

      <Spotlight.ActionsList>
        <Spotlight.ActionsGroup>
          <Spotlight.Action>1</Spotlight.Action>
          <Spotlight.Action>2</Spotlight.Action>
          <Spotlight.Action>3</Spotlight.Action>
        </Spotlight.ActionsGroup>
      </Spotlight.ActionsList>

      <Spotlight.Footer>Footer</Spotlight.Footer>
    </Spotlight>
  );
}
```
