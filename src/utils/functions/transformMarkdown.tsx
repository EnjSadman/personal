import React from "react";

type TagColorMap = {
  [tag: string]: string;
};

const TAG_COLOR_MAP: TagColorMap = {
  blue: "#0080FE",
  red: "#B80F0A",
  green: "#0B6623",
  yellow: "#FFD300",
  orange: "#E34A27",
  purple: "#7852A9",
};

function splitByNewlines(
  text: string,
  keyStart: number,
  style?: React.CSSProperties
) {
  const lines = text.split("\n");
  const result: React.ReactNode[] = [];

  lines.forEach((line, index) => {
    result.push(
      <span key={keyStart++} style={style}>
        {line}
      </span>
    );
    if (index < lines.length - 1) {
      result.push(<br key={keyStart++} />);
    }
  });

  return { nodes: result, nextKey: keyStart };
}

export function transformMarkdown(input: string) {
  const regex = /<(\w+)>(.*?)<\/\1>/gs;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(input)) !== null) {
    const [fullMatch, tag, content] = match;

    if (match.index > lastIndex) {
      const plainText = input.slice(lastIndex, match.index);
      const { nodes, nextKey } = splitByNewlines(plainText, key);
      result.push(...nodes);
      key = nextKey;
    }

    const color = TAG_COLOR_MAP[tag];
    const { nodes, nextKey } = splitByNewlines(
      content,
      key,
      color ? { color } : undefined
    );
    result.push(...nodes);
    key = nextKey;

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    const remainingText = input.slice(lastIndex);
    const { nodes } = splitByNewlines(remainingText, key);
    result.push(...nodes);
  }

  return result;
}
