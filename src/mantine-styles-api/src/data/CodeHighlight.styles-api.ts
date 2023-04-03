import type { CodeHighlightFactory } from '@mantine/code-highlight';
import type { StylesApiData } from '../types';

export const CodeHighlightStylesApi: StylesApiData<CodeHighlightFactory> = {
  selectors: {
    root: 'Root element',
    pre: 'Pre element, contains code element',
    code: 'Code element, contains highlighted code',
    header: 'Header element, contains copy button and files names',
    copy: 'Copy button',
    files: 'Files names list',
    file: 'File name',
  },
};
