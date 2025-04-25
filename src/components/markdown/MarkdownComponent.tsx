'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './markdown.css';

import React from 'react';

export default function MarkdownComponent({ markdownText }: { markdownText: string }) {
    return (
        <div className="markdownContainer">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownText}</ReactMarkdown>
        </div>
    );
}
