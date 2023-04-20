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

  const headings = root.querySelectorAll('h2, h3, h4, h5, h6');
  const headingsArray = Array.from(headings) as HTMLHeadingElement[];
  const headingsWithId = headingsArray.filter((heading) => heading.id);

  return headingsWithId.map((heading) => ({
    depth: parseInt(heading.tagName[1], 10),
    content: heading.textContent || '',
    id: heading.id,
    node: heading,
  }));
}
