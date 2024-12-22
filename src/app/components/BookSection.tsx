import React from 'react'
import Card from './Card';
import Link from 'next/link';

export default function BookSection() {

    interface Ipost {
        id: number;
        title: string;
        date: string;
        excerpt: string;
        image: string;
    }

    const posts:Ipost[] = [
        {
          id: 1,
          title: 'THE LORD OF KINGS',
          date: 'Nov 17, 2024',
          excerpt:
            "Dive into J.R.R. Tolkien's legendary trilogy,The Lord of the Rings a timeless tale of adventure.",
          image: '/book-1.png',
        },
        {
          id: 2,
          title: 'SIMPLE & MINIMALIST',
          date: 'Nov 18, 2024',
          excerpt:
            'A legendary tale by J.R.R. Tolkien about Frodo Baggins and his quest to destroy the powerful One Ring.',
          image: '/book-2.png',
        },
        {
          id: 3,
          title: 'MUTED POSTER',
          date: 'Nov 19, 2024',
          excerpt:
            'A subtle and understated design that speaks volumes through simplicity. Perfect for lovers of minimalism',
          image: '/book-3.png',
        },
        {
          id: 4,
          title: 'POURING DREAMS',
          date: 'Nov 20, 2024',
          excerpt:
            'A cascade of imagination and inspiration, "Pouring Dreams" represents the beauty of turning visions into reality.',
          image: '/book-4.png',
        },
        {
          id: 5,
          title: 'AUTUMN CLOTHES',
          date: 'Nov 21, 2024',
          excerpt:
            'A celebration of cozy comfort and warm hues, "Autumn Clothes" embodies the charm of the fall season.',
          image: '/book-5.png',
        },
        {
          id: 6,
          title: 'DESIGNED FOR WORK',
          date: 'Nov 22, 2024',
          excerpt:
            'Crafted with purpose and precision, "Designed for Work" blends functionality with style. Whether its about tools,',
          image: '/book-6.png',
        },
        {
          id: 7,
          title: 'PLANT TREE',
          date: 'Nov 22, 2024',
          excerpt:
            'A simple yet powerful act that nurtures the earth. Planting a tree symbolizes growth, hope',
          image: '/book-7.png',
        },
        {
          id: 8,
          title: 'ABSTRACT',
          date: 'Nov 22, 2024',
          excerpt:
            'A journey into the world of imagination, "Abstract" explores the boundaries of thought and creativity.',
          image: '/book-8.png',
        },
      ];

  return (
    <section>
        {/* Container */}
      <div id='sec' className='container bg-[#e9eff7] mx-auto '>
        <h1 className='text-center text-[30px] font-bold text-[#283b60] pt-3 pb-3 '>Populars Books</h1>
             {/* Cards*/}
         <div  className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 '>
               {
                posts.map((post,index)=>(
                    <Link href={`/posts/${post.id}`} key={index}>
                          <Card post={post}/>
                    </Link>
                ))
               }
         </div>{/*End Cards*/}
      </div>
    </section>
  )
}
