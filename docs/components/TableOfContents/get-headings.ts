export interface Heading {
  depth: number;
  content: string;
  id: string;
  node: HTMLHeadingElement;
}

export function getHeadings(): Heading[] {
  const root = document.getElementById('mdx');

  if (!root) {
    return [];
  }

  const headings = root.querySelectorAll('[data-heading]');
  const headingsArray = Array.from(headings) as HTMLHeadingElement[];
  const headingsWithId = headingsArray.filter((heading) => heading.id);

  return headingsWithId.map((heading) => ({
    depth: parseInt(heading.getAttribute('data-order')!, 10),
    content: heading.getAttribute('data-heading') || '',
    id: heading.id,
    node: heading,
  }));
}
