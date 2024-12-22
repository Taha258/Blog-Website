import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Github } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#a3b1cf] text-[#283b60] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div>
           <Link href={'/'}><Image src={'/girls blog.png'} alt='logo' width={150} height={150}/></Link>
            <p className="mt-2">Exploring ideas, one post at a time.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-gray-800">About</Link></li>
              <li><Link href="/contact" className="hover:text-gray-800">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-800">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-800">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" ><Facebook size={24} /></a>
              <a href="#" ><Twitter size={24} /></a>
              <a href="#" ><Instagram size={24} /></a>
              <a href="#" ><Github size={24} /></a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white"
              />
              <Button type="submit" className="w-full bg-[#283b60]">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p>&copy; {new Date().getFullYear()} BlogName. All rights reserved, Created Website Taha Hussain</p>
        </div>
      </div>
    </footer>
  )
}

