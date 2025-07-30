import Link from "next/link"
import { ReactNode } from "react"

interface Props {
    title: string;
    href: string;
    icon: ReactNode;
    // icon: string
}

export default function NavMenu({title, href, icon}: Props) {
    return (
        <ol className="block">
            <li>
                <Link href={href} className="flex items-center gap-1 hover:underline active:text-zinc-500">
                    <i>{icon}</i>
                    <p>{title}</p>
                </Link>
            </li>
        </ol>
    )
}