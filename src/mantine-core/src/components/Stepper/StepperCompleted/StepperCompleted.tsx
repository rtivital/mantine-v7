import React from 'react';

export interface StepCompletedProps {
  /** Label content */
  children: React.ReactNode;
}

export const StepCompleted: React.FC<StepCompletedProps> = () => null;
StepCompleted.displayName = '@mantine/core/StepCompleted';
