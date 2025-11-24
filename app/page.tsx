import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import { format } from 'date-fns';

export default function Home() {
    const allPostsData = getSortedPostsData();

    return (
        <section>
            <div style={{ marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.05em' }}>
                    Blog
                </h1>
                <p style={{ fontSize: '1.125rem', color: 'var(--accents-5)' }}>
                    Thoughts, stories, and ideas.
                </p>
            </div>

            <div className="posts-list">
                {allPostsData.map(({ id, date, title, excerpt }) => (
                    <article className="post-card" key={id}>
                        <Link href={`/posts/${id}`} style={{ display: 'block', textDecoration: 'none' }}>
                            <h2 className="post-title" style={{ marginTop: 0 }}>{title}</h2>
                            <div className="post-meta" style={{ marginBottom: '0.5rem' }}>
                                <time dateTime={date}>{format(new Date(date), 'MMMM d, yyyy')}</time>
                            </div>
                            <p style={{ color: 'var(--accents-5)', fontSize: '1rem', lineHeight: '1.6' }}>
                                {excerpt}
                            </p>
                            <span style={{
                                color: 'var(--geist-success)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                display: 'inline-flex',
                                alignItems: 'center',
                                marginTop: '0.5rem'
                            }}>
                                Read more →
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
}
