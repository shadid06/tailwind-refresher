
import './App.css'

function App() {
  

  return (
    <>
      
      <div className=' text-3xl font-bold underline'>
        <h1>Hello world!</h1>
      </div>
      <div>
        <p className=' text-left'>one</p>
        <p className=' text-center'>two</p>
        <p className=' text-right'>three</p>
      </div>

      <div className=' text-black bg-red-500 bg-opacity-50'>
        Tailwind css is great
      </div>
      <div className="bg-[url('https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?w=900&t=st=1707302390~exp=1707302990~hmac=70d6cadce8ec25b0a029b0e07c58536bf635168755c4096fb231bdab53ac6d79')] bg-center bg-no-repeat bg-cover h-screen">

      </div>
      <div className=' bg-gradient-to-r from-blue-300 via-purple-600 to-pink-600'>
         We are learning gradient
      </div>

      {/* need to read more about min-width min-height max-width max-height */}

      <div className='  flex'>
        <div className=' flex-1 border border-green-500'> div 1</div>
        <div className=' flex-2 border border-red-500'> div 2</div>
      </div>
      {/* need to read col span  */}
      <div className=' grid grid-cols-4 gap-4'>
        <div className=' col-span-2'>
          one
        </div>
        <div>
          two
        </div>
        <div>
          two
        </div>
        <div>
          two
        </div>
      </div>

      <div className=' bg-blue-400 sm:bg-red-300 md:green-400 lg:bg-yellow-300 xl:bg-purple-400'>
        we are testing responsiveness
      </div>

      <div className=' bg-primary text-customColor-500 font-custom'>
         i am testing custom color
      </div>
      <article>
        <p>owejfowejfowejfk iwh fiwhf iwr ir wfiwo r</p>
        <p>owejfowejfowejfk iwh fiwhf iwr ir wfiwo r wuefywef 8eyf 8ey f8oqe yfh</p>
      </article>

      {/* crtl+shift+p=chrome dark mode=show rendering =emulate css media feature prefers-color-scheme */}

      <div className=' bg-white dark:bg-slate-900 w-full h-32'>

      </div>
      
    </>
  )
}

export default App
