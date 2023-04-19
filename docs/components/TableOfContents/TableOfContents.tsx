import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Slugger from 'github-slugger';
import { Text, ScrollArea, useMantineTheme, rem, Box } from '@mantine/core';
import { IconList } from '@tabler/icons-react';
import classes from './TableOfContents.module.css';

interface Heading {
  depth: number;
  value: string;
}

interface TableOfContentsProps {
  headings: Heading[];
  withTabs: boolean;
}

function getActiveElement(rects: DOMRect[]) {
  if (rects.length === 0) {
    return -1;
  }

  const closest = rects.reduce(
    (acc, item, index) => {
      if (Math.abs(acc.position) < Math.abs(item.y)) {
        return acc;
      }

      return {
        index,
        position: item.y,
      };
    },
    { index: 0, position: rects[0].y }
  );

  return closest.index;
}

export function TableOfContents({ headings, withTabs }: TableOfContentsProps) {
  const theme = useMantineTheme();
  const slugger = new Slugger();
  const [active, setActive] = useState(0);
  const router = useRouter();

  const slugs = useRef<HTMLDivElement[]>([]);
  const filteredHeadings = headings.filter((heading) => heading.depth > 1);

  useEffect(() => {
    slugger.reset();
    slugs.current = filteredHeadings.map(
      (heading) => document.getElementById(slugger.slug(heading.value)) as HTMLDivElement
    );
  }, [headings]);

  const handleScroll = () => {
    setActive(getActiveElement(slugs.current.map((d) => d.getBoundingClientRect())));
  };

  useEffect(() => {
    setActive(getActiveElement(slugs.current.map((d) => d.getBoundingClientRect())));
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (filteredHeadings.length === 0) {
    return null;
  }

  const items = filteredHeadings.map((heading, index) => {
    const slug = slugger.slug(heading.value);
    return (
      <Text<'a'>
        key={slug}
        component="a"
        fz="sm"
        className={classes.link}
        mod={{ active: active === index }}
        href={`#${slug}`}
        style={{ paddingLeft: `calc(${heading.depth - 1} * ${theme.spacing.lg})` }}
        onClick={(event) => {
          event.preventDefault();
          router.replace(`${router.pathname}#${slug}`);
        }}
      >
        {heading.value}
      </Text>
    );
  });

  return (
    <Box component="nav" mod={{ 'with-tabs': withTabs }} className={classes.wrapper}>
      <div className={classes.inner}>
        <div>
          <div className={classes.header}>
            <IconList size={20} stroke={1.5} />
            <Text className={classes.title}>Table of contents</Text>
          </div>
          <ScrollArea.Autosize mah={`calc(100vh - ${rem(140)})`} type="scroll" offsetScrollbars>
            <div className={classes.items}>{items}</div>
          </ScrollArea.Autosize>
        </div>
      </div>
    </Box>
  );
}
