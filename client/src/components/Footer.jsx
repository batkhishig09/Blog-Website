import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {BsInstagram, BsGithub, BsLinkedin} from 'react-icons/bs'
const FooterComp = () => {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7x1 mx-auto'>
            <div className='w-full grid justify-between sm:flex md:grid-col-1'>
            <div className='mt-5'>
            <Link to='/' className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white '>Batkhishig's Blog</span>
            </Link>
            </div>
            <div className='grid grid-cols-2 gap-6 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                    <Footer.Link href='https://batkhishig.tech' target='_blank' rel='noopener noreferrer'>
                        Portfolio Website
                    </Footer.Link>
                    <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                        About blog
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>

                <div>
                <Footer.Title title="Follow me" />
                <Footer.LinkGroup col>
                    <Footer.Link href='https://batkhishig.tech' target='_blank' rel='noopener noreferrer'>
                        Linkedin
                    </Footer.Link>
                    <Footer.Link href='/about' target='_blank' rel='noopener noreferrer'>
                        Discord
                    </Footer.Link>
                </Footer.LinkGroup>
                </div>
            </div>
        </div>
        <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright href='#' by='Batkhishig blog' year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='#' icon={BsInstagram}/>
                    <Footer.Icon href='#' icon={BsGithub}/>
                    <Footer.Icon href='#' icon={BsLinkedin}/>
                </div>
            </div>
        </div>
    </Footer>
  )
}

export default FooterComp
