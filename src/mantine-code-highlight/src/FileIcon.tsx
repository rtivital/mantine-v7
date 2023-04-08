import React from 'react';

interface FileIconProps {
  fileName: string | undefined;
  getFileIcon?: ((fileName: string) => React.ReactNode) | undefined;
  fileIcon: React.ReactNode | undefined;
}

export function FileIcon({ fileIcon, fileName, getFileIcon }: FileIconProps) {
  if (fileIcon) {
    return <>{fileIcon}</>;
  }

  if (getFileIcon && fileName) {
    return <>{getFileIcon(fileName)}</>;
  }

  return null;
}
