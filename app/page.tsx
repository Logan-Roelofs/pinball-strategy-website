"use client"
import * as React from "react"
import { PinballCard } from '../components/ui/custom/pinballcard'
import Link from 'next/link'

const books = [
  {
    link: '/pinball/sinbad',
    title: "SinBad",
    description: "Gottlieb's 1978 Solid state pinball machine, featuring some big dead bounces and a lot of drop targets."
  },
  {
    link: '/pinball/blackhole',
    title: "Black Hole",
    description: "Gottlieb's 1981 Wide body Solid state pinball machine, featuring a unique two-level playfield, the first of its kind!."
  },
  {
    link: '/pinball/whitewater',
    title: "White Water",
    description: "Williams' 1993 Solid state pinball machine, featuring a unique two-level playfield."
  },
  {
    link: '/pinball/congo',
    title: "Congo",
    description: "Williams' 1995 Solid state pinball machine, featuring a gorilla infested mini playfield."
  },
]

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2 className="text-4xl font-bold text-center mt-4 sm:mt-0">
          {" "}
          <span className="text-green-700">Pinball Strategies by Logan</span>
        </h2>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <Link key={index} href={book.link}>
                <PinballCard {...book} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}