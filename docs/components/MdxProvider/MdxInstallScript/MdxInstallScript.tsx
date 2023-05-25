import React from 'react';
import { MdxNpmScript } from '../MdxNpmScript/MdxNpmScript';

interface MdxInstallScriptProps {
  packages: string;
  dev?: boolean;
}

export function MdxInstallScript({ packages, dev }: MdxInstallScriptProps) {
  return (
    <MdxNpmScript
      yarnScript={`yarn add ${dev ? '--dev ' : ''}${packages}`}
      npmScript={`npm install ${dev ? '--save-dev ' : ''}${packages}`}
    />
  );
}
