import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{ backgroundImage: "url(/main-bg.webp)" }}>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
          <h1 className='text-[80px] text-white font-semibold'>
            Haz todo posible con la
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500'>
              {" "}
              Programación!
            </span>
          </h1>
          <h2 className='text-gray-200 hidden md:block'>
            Codex te liberabit
          </h2>
          <div className='flex-col md:flex-row hidden md:flex gap-5'>
            <Link href="/my-skills" legacyBehavior>
              <a className='relative group rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black'>
                Saber más
              </a>
            </Link>
            <Link href="/my-projects" legacyBehavior>
              <a className='relative group rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black'>
                Mis proyectos
              </a>
            </Link>
            <Link href="/contact-me" legacyBehavior>
              <a className='relative group rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black'>
                Contáctame
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className='absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
        <Link href="/my-skills" legacyBehavior>
          <a className='relative group rounded-[20px] bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px] transition-all duration-300 ease-in-out transform hover:bg-blue-700'>
            Saber más
          </a>
        </Link>
        <Link href="/my-projects" legacyBehavior>
          <a className='relative group rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black'>
            Mis proyectos
          </a>
        </Link>
        <Link href="/contact-me" legacyBehavior>
          <a className='relative group rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px] transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black'>
            Contáctame
          </a>
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
          unoptimized
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-full">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        width={2000}
        height={2000}
        className="absolute top-10 left-0 z-[10]"
        unoptimized
      />
    </main>
  );
}

