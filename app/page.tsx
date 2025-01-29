"use client"
import * as React from "react"
import { BookCard } from '../components/ui/custom/bookcard'
import Link from 'next/link'

const books = [
  {
    link: '/books/dopaminenation',
    title: "Dopamine Nation",
    author: "Anna Lembke, MD",
    description: "A groundbreaking exploration of the connection between addiction, depression, and the brain's ability to find pleasure in everyday life."
  },
  {
    link: '/books/hiddenpotential',
    title: "Hidden Potential",
    author: "Adam Grant",
    description: "A guide to unlocking the potential of introverts, showing how they can thrive in a world that often favors extroverts."
  },
  {
    link: '/books/thecouragetobedisliked',
    title: "The Courage to be Disliked",
    author: "Ichiro Kishimi and Fumitake Koga",
    description: "A Japanese philosophy book that offers a new perspective on life and relationships, based on the teachings of Alfred Adler."
  },
  {
    link: '/books/thelegacyjourney',
    title: "The Legacy Journey",
    author: "Dave Ramsey",
    description: "A guide to building wealth and leaving a legacy, offering practical advice on investing, saving, and giving."
  },
]

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2 className="text-4xl font-bold text-center mt-4 sm:mt-0">
          Logans{" "}
          <span className="text-[#0070f3]">KB</span>
        </h2>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <Link key={index} href={book.link}>
                <BookCard {...book} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
