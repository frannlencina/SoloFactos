'use client'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Props {
    username: string,
    nickname: string,
    post: string,
    avatar: string,
}

export default function PostCard({ username, nickname, avatar, post }: Props) {

    return (
        <div className="flex flex-col items-start justify-start border-b border-stone-200 rounded">

            <HoverCard>
                <HoverCardTrigger>
                    <div className="flex gap-2 cursor-pointer">
                        <div>
                            <img className="rounded-full w-10" src="https://res.cloudinary.com/dctldwa03/image/upload/v1714420331/t3aw607pugwj6ynp5lzd.png" alt="Avatar del usuario" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs opacity-50 relative top-1">{username}</span>
                            <span className="text-md font-medium">{nickname}</span>
                        </div>
                    </div></HoverCardTrigger>
                <HoverCardContent>
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <div className="max-w-12">
                            <img className="rounded-full" src={avatar} alt="" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs opacity-50 relative top-1">{username}</span>
                            <span className="text-md font-medium">{nickname}</span>
                            <div className="text-sm">
                                Suelo tirar factos de vez en cuando
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="text-xs opacity-60"><i className="ri-calendar-2-line"></i> Desde 10/06/2024 </span>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <div className="px-2 py-4">
                {post}
            </div>
        </div>
    )
}