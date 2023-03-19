import { tests, createContextContainer, patchConsoleError } from '@mantine/tests';
import {
  TableTh,
  TableThProps,
  TableCaption,
  TableCaptionProps,
  TableTbody,
  TableTbodyProps,
  TableTd,
  TableTdProps,
  TableTfoot,
  TableTfootProps,
  TableTr,
  TableTrProps,
  TableThead,
  TableTheadProps,
} from './Table.components';
import { Table } from './Table';

describe('@mantine/core/Table', () => {
  beforeAll(patchConsoleError);
  afterAll(patchConsoleError.release);

  describe('TableTh', () => {
    const TestContainer = createContextContainer(TableTh, Table);
    tests.itSupportsSystemProps<TableThProps, 'th'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableCellElement,
      displayName: '@mantine/core/TableTh',
      stylesApiName: 'Table',
      selector: 'th',
      stylesApiSelectors: ['th'],
    });
  });

  describe('TableTd', () => {
    const TestContainer = createContextContainer(TableTd, Table);
    tests.itSupportsSystemProps<TableTdProps, 'td'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableCellElement,
      displayName: '@mantine/core/TableTd',
      stylesApiName: 'Table',
      selector: 'td',
      stylesApiSelectors: ['td'],
    });
  });

  describe('TableTr', () => {
    const TestContainer = createContextContainer(TableTr, Table);
    tests.itSupportsSystemProps<TableTrProps, 'tr'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableRowElement,
      displayName: '@mantine/core/TableTr',
      stylesApiName: 'Table',
      selector: 'tr',
      stylesApiSelectors: ['tr'],
    });
  });

  describe('TableThead', () => {
    const TestContainer = createContextContainer(TableThead, Table);
    tests.itSupportsSystemProps<TableTheadProps, 'thead'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableSectionElement,
      displayName: '@mantine/core/TableThead',
      stylesApiName: 'Table',
      selector: 'thead',
      stylesApiSelectors: ['thead'],
    });
  });

  describe('TableTbody', () => {
    const TestContainer = createContextContainer(TableTbody, Table);
    tests.itSupportsSystemProps<TableTbodyProps, 'tbody'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableSectionElement,
      displayName: '@mantine/core/TableTbody',
      stylesApiName: 'Table',
      selector: 'tbody',
      stylesApiSelectors: ['tbody'],
    });
  });

  describe('TableTfoot', () => {
    const TestContainer = createContextContainer(TableTfoot, Table);
    tests.itSupportsSystemProps<TableTfootProps, 'tfoot'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableSectionElement,
      displayName: '@mantine/core/TableTfoot',
      stylesApiName: 'Table',
      selector: 'tfoot',
      stylesApiSelectors: ['tfoot'],
    });
  });

  describe('TableCaption', () => {
    const TestContainer = createContextContainer(TableCaption, Table);
    tests.itSupportsSystemProps<TableCaptionProps, 'caption'>({
      component: TestContainer,
      props: {},
      styleProps: true,
      children: true,
      extend: true,
      refType: HTMLTableCaptionElement,
      displayName: '@mantine/core/TableCaption',
      stylesApiName: 'Table',
      selector: 'caption',
      stylesApiSelectors: ['caption'],
    });
  });
});
