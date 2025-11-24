import { getAllPostIds, getPostData } from '../../../lib/posts';
import { format } from 'date-fns';
import Link from 'next/link';
import PostToolbar from '../../../components/PostToolbar';
import Avatar from '../../../components/Avatar';

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths.map((path) => ({
        id: path.params.id,
    }));
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const postData = await getPostData(id);

    return (
        <article>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '0.5rem',
                    letterSpacing: '-0.05em',
                    fontWeight: 800
                }}>
                    {postData.title}
                </h1>
                <div className="post-meta">
                    <Avatar size={24} />
                    <span style={{ fontWeight: 500, color: 'var(--geist-foreground)' }}>OukaroMF</span>
                    <span style={{ color: 'var(--accents-3)' }}>/</span>
                    <time dateTime={postData.date} style={{ color: 'var(--accents-5)' }}>
                        {format(new Date(postData.date), 'MMMM d, yyyy')}
                    </time>
                </div>
            </header>

            <PostToolbar prevPost={postData.prevPost} nextPost={postData.nextPost} />

            <div
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }}
            />

            <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--accents-2)' }}>
                <Link href="/" className="btn">
                    ← Back to Home
                </Link>
            </div>
        </article>
    );
}
