import React from 'react';
import footerimage from '../../assets/images/footer.jpg';

const Footer = () => {
  return (
    <footer className="relative h-96">
      <div className="absolute inset-0">
        <img
          src={footerimage}
          alt="Footer Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-70"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white p-8 rounded-full ">
            <h1 className="font-bold text-4xl text-red-500 text-center">AnimeHub</h1>
          <div className='flex my-5'>
            <ul className='md:flex w-full text-center gap-5'>
                <li className='bg-gray-900 rounded-full my-1 py-2 px-4'><a href='/'>Home</a></li>
                <li className='bg-gray-900 rounded-full my-1 py-2 px-4'><a href='#'>Feedback</a></li>
                <li className='bg-gray-900 rounded-full my-1 py-2 px-4'><a href='#'>Privacy Policy</a></li>
                <li className='bg-gray-900 rounded-full my-1 py-2 px-4'><a href='#'>Terms of Services</a></li>
                <li className='bg-gray-900 rounded-full my-1 py-2 px-4'><a href='#'>Copyright</a></li>
            </ul>
          </div>
          <p className="text-center rounded-2xl bg-gray-900 py-2 px-4">&copy; 2023 Anime Website. All rights reserved.</p>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div> */}
    </footer>
  );
};

export default Footer;
