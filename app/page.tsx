import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage:"url(/main-bg.webp"}}>
          <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>
            <h1 className='text-[50px] text-white font-semibold'>
              Haz todo posible con la
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500'> 
              {" "}
              Programacion!
              </span>
            </h1>
               <h2 className='text-gray-200 hidden md:block'>
               Codex te liberabit
               </h2>
               <div className='flex-col md:flex-row hidden md:flex gap-5'>
                <Link href="/mis-hablidades"className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white mas-w-[200px]'
                >
                  Saber más
                </Link>
                <Link href="/mis-hablidades"className='rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white mas-w-[200px]'
                >
                  <div className='absolute rounded-[20px]z-[1] bg-white insert-0 opacity-0 group-hver:opacity-20' />
                  Mis proyectos
                </Link>
                <Link href="/mis-hablidades"className='rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white mas-w-[200px]'
                >
                  <div className='absolute rounded-[20px]z-[1] bg-white insert-0 opacity-0 group-hver:opacity-20' />
                  Contactame
                </Link>
              
              

               </div>
          </div>
      
      </div>
   
      <div className='absolute flex  bottom-10 z-[20] right-5 flex-col md:hidden gap-5'>
                <Link href="/mis-hablidades"className='rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white mas-w-[200px]'>
                  Saber más
                </Link>
                <Link href="/mis-hablidades"className='rounded-[20px] group bg-transparent border border-white  px-5 py-3 text-lg text-white mas-w-[200px]'>
                  
                  Mis proyectos
                </Link>
                <Link href="/mis-hablidades"className='rounded-[20px] group bg-transparent border border-white  px-5 py-3 text-lg text-white mas-w-[200px]'>
                  
                  Contactame
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
           

              <Image src="/cliff.webp" alt="cliff" width={480} height={480}/>
              </div>

              <div className="absolute bottom-0 z-[5] w-full h_full">
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
