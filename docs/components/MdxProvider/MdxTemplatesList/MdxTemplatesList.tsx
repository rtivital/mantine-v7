import React from 'react';
import { Table, Button, Text } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';
import { NextIcon, ViteIcon, GatsbyIcon, RemixIcon, RedwoodIcon } from '@/components/icons';
import { TEMPLATES_DATA, Template } from './data';
import classes from './MdxTemplatesList.module.css';

interface MdxTemplatesListProps {
  type?: Template['type'];
}

const ICONS: Record<Template['type'], typeof NextIcon> = {
  next: NextIcon,
  vite: ViteIcon,
  gatsby: GatsbyIcon,
  redwood: RedwoodIcon,
  remix: RemixIcon,
};

export function MdxTemplatesList({ type }: MdxTemplatesListProps) {
  const data = type ? TEMPLATES_DATA.filter((template) => template.type === type) : TEMPLATES_DATA;

  const rows = data.map((template) => {
    const Icon = ICONS[template.type];
    return (
      <Table.Tr key={template.name}>
        <Table.Td className={classes.iconCell}>
          <div className={classes.icon} data-type={template.type}>
            <Icon />
          </div>
        </Table.Td>
        <Table.Td>
          <Text fz="sm" fw={500}>
            {template.name}
          </Text>
          <Text fz="xs">{template.description}</Text>
        </Table.Td>
        <Table.Td>
          <Button
            component="a"
            href={template.link}
            target="_blank"
            size="xs"
            variant="default"
            rightSection={<IconExternalLink stroke={1.5} className={classes.externalLinkIcon} />}
          >
            Use template
          </Button>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table highlightOnHover verticalSpacing="sm">
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
