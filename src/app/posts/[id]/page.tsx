"use client";
import { useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";


interface Post {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
}

export default function PostDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  const post: Post | null = getPostById(id);

  const [comments, setComments] = useState<{ name: string; comment: string }[]>(
    [
      { name: "Jackson", comment: "I love the layout of this website!!" },
      { name: "Harrison", comment: "This website is super user-friendly and appealing!" },
    ]
  );

  if (!post) {
    return notFound();
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const comment = (form.elements.namedItem("comment") as HTMLTextAreaElement)
      .value;
    setComments([...comments, { name, comment }]);
    form.reset();
  };

  return (
    <div className="container mx-auto p-6 relative bg-[#e9eff7] text-white">
      <article className=" relative bg-[#afbdd0] text-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-[#1d2d4d]">{post.title}</h2>
            <br />
            <p className="text-red-800 text-sm">{post.date}</p>
            <div className="mt-6 text-[#1d2d4d]">
              <p>{post.content}</p>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={500}
              height={500}
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md  "
            />
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-8 p-6">
          <h3 className="text-2xl font-semibold text-white">Comments</h3>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              className="w-full p-4 border-2 text-black border-[#1d2d4d] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-2"
              placeholder="Your Name"
              required
            />
            <textarea
              name="comment"
              className="w-full p-4 border-2 text-black border-[#1d2d4d] rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Add your comment here..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-[#283b60] text-white border-2  px-6 py-2 rounded-lg shadow-md hover:bg-[#1d2d4d] transition duration-300"
            >
              Submit Comment
            </button>
          </form>

          {/* Display Comments */}
          <div className="mt-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className=" bg-white  p-4 rounded-lg shadow-sm mb-4 border-2 border-[#1d2d4d]"
              >
                <p className="text-[#1d2d4d] font-semibold">{comment.name}</p>
                <p className="text-black">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

const getPostById = (id: string) => {
  const posts: Post[] = [
    {
      title: "BOOK 1 - THE LORD OF THE KINGS",
      date: "April 14, 1979",
      content: `

       The story begins in the peaceful Shire, home to Frodo Baggins, a young hobbit. He inherits a mysterious and powerful artifact, the One Ring, from his uncle Bilbo. The Ring was forged by the Dark Lord Sauron to control Middle-earth, and its discovery threatens the entire realm.
       Key Events
       The Ring’s Origin: Gandalf the wizard discovers the truth about the One Ring and warns Frodo of its danger.
       The Journey Begins: Frodo, along with Sam, Merry, and Pippin, sets out to escape the Shire as Sauron's servants (the Black Riders) hunt for the Ring.
       Rivendell and the Fellowship: At Rivendell, a council led by Elrond decides the Ring must be destroyed in the fires of Mount Doom. A fellowship is formed, including Aragorn, Legolas, Gimli, Boromir, Gandalf, and the hobbits.
       Perilous Travel: The group faces dangers in Moria, where they battle orcs and lose Gandalf in a confrontation with the Balrog.
       Lothlórien: The Fellowship finds refuge in the elven realm of Lothlórien, gaining gifts and wisdom from Lady Galadriel.
       Breaking of the Fellowship: The group is attacked by orcs, and Boromir succumbs to the Ring's temptation. Frodo decides to continue the quest alone, but Sam insists on joining him.
     `,
      imageUrl: "/book-1.png",
    },
    {
      title: "BOOK 2 - Simple & Minimalist",
      date: "Nov 17, 1986",
      content: `
    "Simple & Minimalist" is a guide to embracing simplicity in life, work, and surroundings. This book inspires readers to focus on what truly matters by eliminating unnecessary distractions and complexities.
    The Essence of Simplicit
    Understanding minimalism as a mindset rather than a trend.
    Benefits of simplicity in achieving clarity and purpose.
    Minimalism in Daily Life
    Streamlining your daily routine for efficiency and peace of mind.
    Practical tips for decluttering spaces, schedules, and thoughts.
    Design with Purpose
    Creating clean, functional, and aesthetically pleasing spaces.
    How to blend simplicity with beauty in interior and graphic design.
    Prioritizing What Matters
    Identifying and focusing on your true values and goals.
    Letting go of materialism and superficial pursuits.
    The Path to Contentment
    How simplicity fosters gratitude and happiness.
    Building deeper connections and meaningful experiences.Themes
    Clarity through Minimalism: Removing distractions to find your purpose.
    Sustainable Living: Choosing quality over quantity to reduce waste.
    Intentional Design: Using space and time effectively for a balanced life.` ,
      imageUrl: "/book-2.png",
    },
    {
      title: "BOOKS 3 - MUTED POSTER",
      date: "Dec 19, 1999",
      content: `
     Sure! Here's a sample paragraph inspired by the muted theme of "Books 3":
      In the gentle quiet of the library, three books sat stacked together, their muted covers reflecting a story of simplicity and elegance. Each book was a journey—a collection of whispers from the past, present, and dreams of the future. The beige volume spoke of history, its pages imbued with tales of lessons learned and forgotten civilizations. The gray one embraced the mysteries of the present, unraveling the complexities of human emotion and connection. And the pastel-covered book was a vision of hope, filled with poetry and aspirations, promising that even in stillness, there is beauty waiting to unfold. Together, they formed a harmonious narrative, reminding readers that life is a delicate balance of reflection, understanding, and ambition..`,
      imageUrl: "/book-3.png",
    },
    {
      title: "BOOK 4 - POURING DREAMS",
      date: "Nov 20, 2006",
      content: `Book 4: Pouring Dreams is a symphony of aspirations cascading like a stream into the vast ocean of possibilities. Each chapter flows with the raw essence of ambition, weaving tales of dreamers who dared to shape the extraordinary from the ordinary. The pages brim with vivid imagery—of midnight musings, quiet battles, and the relentless pursuit of purpose. As the ink spills across the paper, it paints a world where dreams are not just visions but living entities, molding destinies and inspiring change. This book is a call to action, a gentle nudge to embrace vulnerability and pour your heart into crafting the future you’ve always envisioned.`,
      imageUrl: "/book-4.png",
    },
    {
      title: "BOOK 5 - AUTUMN CLOTHES",
      date: "JAN 21, 2010",
      content: `Autumn Clothes unfolds like the season it’s named after—rich, vibrant, and filled with quiet transformation. Each page drapes the reader in the warm hues of fall, narrating tales of lives transitioning, just like leaves turning from green to gold. It explores the comfort of familiar sweaters, the bittersweet chill of change, and the threads of memories woven into scarves and jackets. Through vivid storytelling, it reminds Autumn Clothes unfolds like the season it’s named after—rich, vibrant, and filled with quiet transformation. Each page drapes the reader in the warm hues of fall, narrating tales of lives transitioning, just like leaves turning from green to gold. It explores the comfort of familiar sweaters, the bittersweet chill of change, and the threads of memories woven into scarves and jackets. Through vivid storytelling, it reminds us that, much like autumn clothes, our experiences layer us with resilience, warmth, and a deep appreciation for the beauty in endings that herald new beginnings. us that, much like autumn clothes, our experiences layer us with resilience, warmth, and a deep appreciation for the beauty in endings that herald new beginnings.`,
      imageUrl: "/book-5.png",
    },

    {
      title: "BOOKS 6 - DESIGNED FOR WORK",
      date: "Nov 22, 2015",
      content: `Designed for Work is a tribute to the art of purpose and productivity. Its pages are a blueprint for crafting a life that balances ambition with intention. Through stories of innovation, discipline, and resilience, the book explores how work shapes our identity and fuels our passions. It delves into the tools we use, the spaces we create, and the systems we build to turn dreams into reality. From quiet moments of planning to the hustle of execution, this book inspires readers to design their work—not just for results, but for meaning, growth, and fulfillment. Designed for Work delves into the intricate relationship between human creativity and purposeful action. It examines how the essence of work is far more than a daily grind—it’s a canvas on which we paint our ambitions, challenges, and triumphs. The book guides readers through the evolution of workspaces, from minimalist desks to bustling offices, each design reflecting the unique goals of those who inhabit them. It offers profound insights into the psychology of productivity, unveiling how routines, tools, and environments can be harmonized to spark innovation.

Through the stories of visionaries and everyday heroes alike, the book celebrates the resilience it takes to persevere and the brilliance that arises from collaboration. Each chapter encourages readers to rethink their approach to work—not merely as a task but as a journey of self-expression and growth. With actionable wisdom on balancing creativity and discipline, Designed for Work is both a roadmap and a source of inspiration for those eager to build a legacy through their efforts.

`,
      imageUrl: "/book-6.png",
    },
    {
      title: "Book 7 - Plant Tree For The Future",
      date: "Nov 22, 2024",
      content: `Plant Tree for the Future is a heartfelt call to action, intertwining the simplicity of planting a seed with the profound impact of nurturing hope for generations to come. Each page resonates with the idea that trees are more than just greenery—they are symbols of resilience, guardians of ecosystems, and living bridges between the past, present, and future. The book narrates stories of individuals and communities who planted not only trees but also dreams, creating legacies of shade, sustenance, and shelter. With each turn of the page, readers are reminded that the smallest act of care today can blossom into a forest of possibilities tomorrow. This book inspires us to cultivate both nature and humanity, planting seeds of kindness, growth, and change than just greenery—they are symbols of resilience, guardians of ecosystems, and living bridges between the past, present, and future. The book narrates stories of individuals and communities who planted not only trees but also dreams, creating legacies of shade, sustenance, and shelter. With each turn of the page, readers are reminded that the smallest act of care today can blossom into a forest of possibilities tomorrow. This book inspires us to cultivate both nature and humanity, planting seeds of kindness, growth, and change.`,
      imageUrl: "/book-7.png",
    },
    {
      title: "Book 8 - ABSTRACT POSTER",
      date: "AUG 22, 2019",
      content: `An abstract poster is a visual representation that communicates emotions, ideas, or concepts through non-representational forms and colors. Unlike traditional posters that focus on literal images, abstract posters rely on shapes, lines, and patterns to evoke feelings and provoke thought. The use of bold colors, dynamic compositions, and minimalist elements creates a unique aesthetic that can convey messages in a subtle yet powerful way. Abstract posters are often used in modern art, design, and advertising to break away from conventional visual storytelling, offering a more interpretive and imaginative approach to communication Abstract posters go beyond mere decoration; they serve as a medium for expressing complex ideas and emotions in a visually striking and unconventional manner. These posters typically avoid direct representation, allowing the viewer to interpret the design subjectively. The interplay of geometric shapes, fluid lines, and contrasting colors creates a dynamic tension, inviting viewers to engage in deeper contemplation. Artists and designers use abstract forms to challenge traditional norms and explore new ways of visual expression, often evoking a sense of mystery or intrigue. The beauty of abstract posters lies in their ability to convey powerful messages without relying on recognizable imagery, allowing for a broader, more universal appeal. Whether used in exhibitions, advertisements, or interior decor, abstract posters possess a timeless quality that appeals to those seeking more than just visual stimulation, but also a connection to the underlying emotions and concepts they represent..`,
      imageUrl: "/book-8.png",
    },
  ];

  return (
    posts.find((post) => post.title.toLowerCase().includes(id.toLowerCase())) ||
    null
  );
};
