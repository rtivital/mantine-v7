import React from 'react';
import { MdxPagesGroup, MdxPagesCategory, Frontmatter } from '@/types';
import { CATEGORY_ICONS } from './category-icons';
import classes from './NavbarLinksGroup.module.css';

interface NavbarLinksGroupProps {
  data: MdxPagesGroup;
  onNavbarClose(): void;
}

function NavbarLink({ data, onNavbarClose }: { data: Frontmatter; onNavbarClose(): void }) {
  return <div>Navbar link</div>;
}

function hasCategory(page: Frontmatter | MdxPagesCategory): page is MdxPagesCategory {
  return 'category' in page;
}

export function NavbarLinksGroup({ data, onNavbarClose }: NavbarLinksGroupProps) {
  const pages = data.pages.map((page) => {
    if (hasCategory(page)) {
      const nested = page.pages.map((nestedPage) => (
        <NavbarLink key={nestedPage.slug} data={nestedPage} onNavbarClose={onNavbarClose} />
      ));

      return (
        <div key={page.category}>
          <div>{page.category}</div>
          {nested}
        </div>
      );
    }

    return <NavbarLink key={page.slug} data={page} onNavbarClose={onNavbarClose} />;
  });

  return (
    <div>
      <div>{data.group}</div>
      {pages}
    </div>
  );
}
