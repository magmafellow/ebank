import { crimson } from '@/app/lib/fonts'

export default function Page() {
  return (
    <main className="flex-grow">
      {/* Titles */}
      <section className="mb-4 md:mb-5 lg:mb-6 text-center">
        <p className='text-left text-lg pl-8 italic'>Titles:</p>
        <h1
          className={`${crimson.className} text-2xl md:text-3xl xl:text-4xl font-bold`}
        >
          The main Title
        </h1>
        <div className="h-[1px] bg-stone-300"></div>
        <h2 className={`${crimson.className} text-xl md:text-2xl font-bold`}>
          The second Title
        </h2>
        <div className="h-[1px] bg-stone-300"></div>
        <h3 className={`${crimson.className} text-lg md:text-xl font-bold`}>
          The third Title
        </h3>
        <div className="h-[1px] bg-stone-300"></div>
      </section>

      {/* Links */}
      <section className='mb-4 md:mb-5 lg:mb-6 text-center'>
        <p className='text-left text-lg pl-8 italic'>Links:</p>
        <div>
          <a className='text-base text-blue-700 hover:text-blue-600 hover:underline italic' href="#">primary link</a>
        </div>
        <div className="h-[1px] bg-stone-300"></div>
        <div>
          <a className='text-base text-teal-800 hover:text-teal-700 hover:underline' href="#">second link</a>
        </div>
        <div className="h-[1px] bg-stone-300"></div>
        <div>
          <a className='text-base text-neutral-700 hover:text-neutral-800 hover:underline' href="#">other side link</a>
        </div>
        <div className="h-[1px] bg-stone-300"></div>
      </section>

      {/* Buttons */}
      <section className='mb-4 md:mb-5 lg:mb-6 text-center'>
        <p className='text-left text-lg pl-8 italic'>Buttons:</p>
        <div className='mb-1'>
          <button className='py-0.5 lg:py-1 px-1 lg:px-2 inline-block bg-slate-700 hover:bg-slate-600 rounded text-slate-300 hover:text-slate-400' type="button">Submit</button>
        </div>
        <div className="h-[1px] bg-stone-300"></div>
        <div className='mb-1'>
          <button className='py-0.5 lg:py-1 px-1 lg:px-2 bg-amber-700 hover:bg-amber-600 rounded text-amber-300 hover:text-amber-400' type="button">send</button>
        </div>
        <div className="h-[1px] bg-stone-300"></div>
        <div className='mb-1'>
          <button className='py-0.5 lg:py-1 px-1 lg:px-2 bg-lime-700 hover:bg-lime-600 rounded text-lime-300 hover:text-lime-400' type="button">ok</button>
        </div>
        <div className="h-[1px] bg-stone-300"></div>
      </section>

      {/* Paragraphs */}
      <section className='mb-4 md:mb-5 lg:mb-6'>
        <p className='text-left text-lg pl-8 italic'>Paragraphs:</p>
        <p className='first-letter:pl-2 lg:first-letter:pl-3 xl:first-letter:pl-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur aut, ea harum exercitationem debitis molestiae tenetur provident incidunt quia animi minima placeat!</p>
        <div className="h-[1px] bg-stone-300"></div>
        <p className='first-letter:pl-2 lg:first-letter:pl-3 xl:first-letter:pl-4 tracking-wide italic text-stone-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum eligendi maxime ut molestias asperiores debitis consequuntur repudiandae ea nesciunt tempore.</p>
        <div className="h-[1px] bg-stone-300"></div>
        <p className='first-letter:pl-2 lg:first-letter:pl-3 xl:first-letter:pl-4 tracking-wide italic text-rose-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse praesentium quas maxime? Laborum eveniet nostrum rem autem?</p>
      </section>
      
    </main>
  )
}
