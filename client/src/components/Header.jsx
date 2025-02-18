import {Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation} from "react-router-dom"; // ✅ Import Link
import React from 'react';
import {FaMoon} from 'react-icons/fa';

import {AiOutlineSearch} from 'react-icons/ai';


export default function() {
  const path = useLocation().pathname;
  return (
   <Navbar className = 'border-b-2'>
    

<Link to = "/" className='self-center whitespace-normal text-sm sm:text-xl font-serif dark:text-white'>
      <span className = 'px-2 py-1 bg-gradient-to-r  from-red-500 via-orange-400 to-red-600 rounded-lg text-white'> YoursBlog</span>
    </Link>
    <form>
      <TextInput
      type = 'text'
      placeholder = 'Search...'
      rightIcon = {AiOutlineSearch}
      className='hidden lg:inline' 
      />
    </form>
    <Button className = 'w-12 h-10' color='gray' pill>
      <AiOutlineSearch/>
    </Button>

    <div className="flex gap-2 md:order-2">
    <Button className="w-12 h-10" color="gray" pill>
          <FaMoon />
      </Button>
      <Link to="/SignIn">
        <Button className="bg-gradient-to-r from-red-500 to-orange-500 text-white" outline>Sign In</Button>
      </Link>
     <Navbar.Toggle>

     </Navbar.Toggle>

    </div>
    
   
    <Navbar.Collapse>
        <div className="lg:hidden flex flex-col gap-2 p-4">
          <Navbar.Link>
            <Link to="/" className="px-4 py-2">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/About" className="px-4 py-2">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/Projects" className="px-4 py-2">
              Projects
            </Link>
          </Navbar.Link>
        </div>
        <div className="hidden lg:flex lg:gap-4">
          <Navbar.Link active ={path === '/'} as = {'div'}>
            <Link to="/" className="px-4 py-2">
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active = {path === '/About'}  as = {'div'}>
            <Link to="/About" className="px-4 py-2">
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active ={path === '/Projects'} as = {'div'}>
            <Link to="/Projects" className="px-4 py-2">
              Projects
            </Link>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>


   </Navbar>
    
   
    
  );
}

