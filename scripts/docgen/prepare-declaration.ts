import { ComponentDoc } from 'react-docgen-typescript';

function replaceBackticks(str: string): string {
  return str.replace(/`([^`]+)`/g, '<code>$1</code>');
}

const replace = {
  MantineSize: '"xs" | "sm" | "md" | "lg" | "xl"',
  GroupPosition: '"right" | "center" | "left" | "apart"',
  DefaultMantineColor: 'MantineColor',
  ReactText: 'string | number',
  'ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)>':
    'ReactElement',
  'string | number | boolean | {} | ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)> | ReactNodeArray | ReactPortal | ((value: number) => ReactNode)':
    'ReactNode | (value: number) => ReactNode',
};

export function prepareDeclaration(declaration: ComponentDoc) {
  const data: any = { ...declaration };
  delete data.tags;
  delete data.methods;

  Object.keys(data.props).forEach((prop) => {
    delete data.props[prop].parent;
    delete data.props[prop].declarations;
    delete data.description;

    data.props[prop].type.name = data.props[prop].type.name.replace(' | undefined', '');

    if (data.props[prop].type.name in replace) {
      data.props[prop].type.name = (replace as any)[data.props[prop].type.name];
    }

    if (data.props[prop].type.name === 'enum') {
      data.props[prop].type.name = data.props[prop].type.value
        .map((val: { value: string }) => val.value)
        .join(' | ');
    }
  });

  // This sorts the props object in ascending order
  const ordered = Object.keys(data.props)
    .sort()
    .reduce<Record<string, any>>((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key] = data.props[key];
      data.props[key].description = replaceBackticks(data.props[key].description);
      return obj;
    }, {});

  data.props = ordered;

  return data;
}
