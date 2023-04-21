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
