import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconChevronDown } from '@tabler/icons-react';
import { UnstyledButton, Text } from '@mantine/core';
import { MdxPagesGroup, MdxPagesCategory, Frontmatter } from '@/types';
import { CATEGORY_ICONS } from './category-icons';
import classes from './NavbarLinksGroup.module.css';

interface NavbarLinksGroupProps {
  data: MdxPagesGroup;
  onNavbarClose(): void;
}

function NavbarLink({ data, onNavbarClose }: { data: Frontmatter; onNavbarClose(): void }) {
  const router = useRouter();
  return (
    <UnstyledButton
      component={Link}
      href={data.slug}
      mod={{ active: data.slug === router.pathname }}
      className={classes.link}
      onClick={onNavbarClose}
    >
      {data.title}
    </UnstyledButton>
  );
}

function hasCategory(page: Frontmatter | MdxPagesCategory): page is MdxPagesCategory {
  return 'category' in page;
}

export function NavbarLinksGroup({ data, onNavbarClose }: NavbarLinksGroupProps) {
  const [opened, setOpened] = useState(true);

  const pages = data.pages.map((page) => {
    if (hasCategory(page)) {
      const nested = page.pages.map((nestedPage) => (
        <NavbarLink key={nestedPage.slug} data={nestedPage} onNavbarClose={onNavbarClose} />
      ));

      const Icon = CATEGORY_ICONS[page.category];

      return (
        <div className={classes.category} key={page.category}>
          <Text className={classes.categoryTitle}>
            <Icon className={classes.categoryIcon} />
            {page.category}
          </Text>

          {nested}
        </div>
      );
    }

    return <NavbarLink key={page.slug} data={page} onNavbarClose={onNavbarClose} />;
  });

  return (
    <div className={classes.group}>
      <UnstyledButton className={classes.header} onClick={() => setOpened((o) => !o)}>
        <IconChevronDown className={classes.chevron} data-collapsed={!opened || undefined} />
        <Text className={classes.title}>{data.group.replace('-', ' ')}</Text>
      </UnstyledButton>
      {opened && pages}
    </div>
  );
}
