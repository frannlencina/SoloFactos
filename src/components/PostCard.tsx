'use client'

interface Props {
    username: string,
    nickname: string,
    post: string,
    avatar: string,
}

export default function PostCard({ username, nickname, avatar, post}: Props) {

    return (
        <div className="flex flex-col items-start justify-start border-b border-stone-200 rounded">
            <div className="flex gap-2">
                <div>
                    <img className="rounded-full w-10" src="https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png" alt="Avatar del usuario" />
                </div>
                <div className="flex flex-col">
                    <span className="text-xs opacity-50 relative top-1">{username}</span>
                    <span className="text-md font-medium">{nickname}</span>
                </div>
            </div>
            <div className="px-2 py-4">
                {post}
            </div>
        </div>
    )
}