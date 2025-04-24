'use client';

import ReactMarkdown from 'react-markdown';

interface LegalContentProps {
  content: string;
}

export default function LegalContent({ content }: LegalContentProps) {
  return (
    <div className="prose prose-sm md:prose-base max-w-none prose-headings:font-montserrat prose-headings:text-foreground prose-p:text-foreground/90">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}