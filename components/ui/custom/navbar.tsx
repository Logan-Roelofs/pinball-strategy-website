import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { MdOutlineBookmarkBorder } from "react-icons/md";


export default function Component() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <MdOutlineBookmarkBorder className="h-6 w-6 text-[#0070f3]" />
                </Link>
                <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
                </nav>
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    {/*<Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="">
                            <div className="grid gap-4 p-4">
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    prefetch={false}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#"
                                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                    prefetch={false}
                                >
                                    About
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>*/}
                </div> 
            </div>
        </header>
    )
}