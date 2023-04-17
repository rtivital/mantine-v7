import React from 'react';
import { Box, Title, Text } from '@mantine/core';
import { Frontmatter } from '@/types';
import classes from './MdxPageHeader.module.css';

const REPO_BASE = 'https://github.com/rtivital/mantine-v7/blob/master';
const DOCS_BASE = `${REPO_BASE}/docs/pages`;
const SOURCE_BASE = `${REPO_BASE}/src`;

interface MdxPageHeaderProps {
  meta: Frontmatter;
}

export function MdxPageHeader({ meta }: MdxPageHeaderProps) {
  const withTabs = Array.isArray(meta.props);
  const hasLinks = !!(meta.import || meta.source);

  if (!hasLinks && !withTabs && !meta.release) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <Box className={classes.header} mod={{ 'with-tabs': withTabs }}>
        <Title className={classes.title}>{meta.title}</Title>
        <Text className={classes.description}>{meta.description}</Text>
      </Box>
    </div>
  );
}
