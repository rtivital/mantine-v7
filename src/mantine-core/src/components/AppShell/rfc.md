AppShell props:

- layout – default, alt

Features:

- Reveal header on scroll up
- Collapse Navbar/Aside
- Partially collapse Navbar/Aside
- Navbar/Aside are always fixed
- Header/Footer can be either fixed or static
- Hide Navbar/Aside at given breakpoint
- `disabled` prop to hide all components
- option to configure z-index for every component on app shell and individually

Navbar cases:

- collapsed on desktop – no main offset
- visible on desktop – main offset
- collapse on mobile – no main offset
- visible on mobile – no main offset

```tsx
<AppShell>
  <AppShell.Header>Header</AppShell.Header>
  <AppShell.Navbar>Navbar</AppShell.Navbar>
  <AppShell.Main>Body</AppShell.Main>
  <AppShell.Aside>Aside</AppShell.Aside>
  <AppShell.Footer>Footer</AppShell.Footer>
</AppShell>
```
