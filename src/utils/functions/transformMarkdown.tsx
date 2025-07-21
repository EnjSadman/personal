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

export function transformMarkdown(input: string) {
  const regex = /<(\w+)>(.*?)<\/\1>/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(input)) !== null) {
    const [fullMatch, tag, content] = match;

    if (match.index > lastIndex) {
      const plainText = input.slice(lastIndex, match.index);
      result.push(<span key={key++}>{plainText}</span>);
    }

    if (tag in TAG_COLOR_MAP) {
      result.push(
        <span key={key++} style={{ color: TAG_COLOR_MAP[tag] }}>
          {content}
        </span>
      );
    } else {
      result.push(<span key={key++}>{content}</span>);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < input.length) {
    result.push(<span key={key++}>{input.slice(lastIndex)}</span>);
  }

  return result;
}
