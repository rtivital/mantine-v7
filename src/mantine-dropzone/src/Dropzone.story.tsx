/* eslint-disable no-console */
import React from 'react';
import { Dropzone } from './Dropzone';

export default { title: 'Dropzone' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']}>
        <div>Drag and drop files</div>
      </Dropzone>
    </div>
  );
}

export function Loading() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']} loading>
        <div>Drag and drop files</div>
      </Dropzone>
    </div>
  );
}

export function NoClick() {
  return (
    <div style={{ padding: 40 }}>
      <Dropzone onDrop={console.log} accept={['image/jpeg', 'image/png']} activateOnClick={false}>
        <div>Drag and drop files</div>
      </Dropzone>
    </div>
  );
}
