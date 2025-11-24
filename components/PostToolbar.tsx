'use client';

import { ArrowLeft, ArrowRight, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface PostToolbarProps {
    prevPost?: { id: string; title: string } | null;
    nextPost?: { id: string; title: string } | null;
}

export default function PostToolbar({ prevPost, nextPost }: PostToolbarProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="post-toolbar">
            <button onClick={handleCopy} className="btn" style={{ gap: '8px' }}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied' : 'Copy Page'}
            </button>

            <div style={{ display: 'flex', gap: '8px' }}>
                {prevPost ? (
                    <Link href={`/posts/${prevPost.id}`} className="btn btn-icon" title={`Previous: ${prevPost.title}`}>
                        <ArrowLeft size={16} />
                    </Link>
                ) : (
                    <button className="btn btn-icon" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                        <ArrowLeft size={16} />
                    </button>
                )}

                {nextPost ? (
                    <Link href={`/posts/${nextPost.id}`} className="btn btn-icon" title={`Next: ${nextPost.title}`}>
                        <ArrowRight size={16} />
                    </Link>
                ) : (
                    <button className="btn btn-icon" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                        <ArrowRight size={16} />
                    </button>
                )}
            </div>

            <style jsx>{`
        .post-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          margin-bottom: 2rem;
          border-bottom: 1px solid var(--accents-2);
        }
        
        @media (max-width: 600px) {
          .post-toolbar {
            position: sticky;
            top: 64px; /* Below header */
            background: var(--geist-background);
            z-index: 90;
            padding: 1rem;
            margin: 0 -1rem 2rem -1rem;
            border-bottom: 1px solid var(--accents-2);
          }
        }
      `}</style>
        </div>
    );
}
