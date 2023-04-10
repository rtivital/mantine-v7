import type { CodeHighlightFactory } from '@mantine/code-highlight';
import type { StylesApiData } from '../types';

export const CodeHighlightStylesApi: StylesApiData<CodeHighlightFactory> = {
  selectors: {
    root: 'Root element',
    pre: 'Pre element, contains code element',
    codeWrapper: 'Wrapper around code element, used for expand/collapse logic',
    code: 'Code element, contains highlighted code',
    header: 'Header element, contains copy button and files names',
    controls: 'Controls container, contains control buttons (copy/collapse, etc.)',
    control: 'Control button, copy/collapse, etc.',
    files: 'Files names list',
    file: 'File name',
    showCodeButton: 'Button that reveals full code when it is collapsed',
  },
};
