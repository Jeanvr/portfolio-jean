import React from 'react';
import Image from 'next/image';
import ContactForm from '../../components/ContactForm';

const Page: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: "url(/email2.jpg)" }}
      className="min-h-screen flex flex-col items-center justify-center bg-center bg-cover p-4"
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg w-full mb-8 text-center px-8">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image src="/menorca.jpg" alt="Your Photo" layout="fill" objectFit="cover" className="rounded-full" />
        </div>
        <h1 className="text-2xl font-bold mb-2">About Me</h1>
        <p className="text-gray-700 mb-4">
          Hi, I'm Jean. I'm a passionate web developer with experience in creating dynamic and responsive web applications. I love working with modern web technologies and continuously improving my skills,for more about me give me a email!
        </p>
      </div>
      <div className="w-full flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
}

export default Page;
