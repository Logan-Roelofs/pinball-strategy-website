import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "./mode-toggle"


export default function Component() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Image src="/static/noun-pinball-61489.svg" width={24} height={24} className="h-6 w-6" alt="Icon" style={{ filter: 'invert(32%) sepia(78%) saturate(366%) hue-rotate(85deg) brightness(92%) contrast(92%)' }} />
                </Link>
                <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                </nav>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div> 
            </div>
        </header>
    )
}