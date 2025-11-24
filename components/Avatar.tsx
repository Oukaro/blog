import Image from 'next/image';

interface AvatarProps {
    size?: number;
}

export default function Avatar({ size = 32 }: AvatarProps) {
    return (
        <div
            className="avatar"
            style={{
                width: size,
                height: size,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid var(--accents-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--geist-background)'
            }}
        >
            <Image
                src="https://avatars.githubusercontent.com/u/107784230?v=4"
                alt="OukaroMF Avatar"
                width={size}
                height={size}
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
}
