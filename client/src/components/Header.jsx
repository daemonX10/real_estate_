// eslint-disable-next-line no-unused-vars
import {FaSearch} from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-sm'>
      <div className='flex justify-between item-center max-w-6xl mx-auto p-3 '>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>SOUL</span>
        <span className='text-slate-500'>ESTATE</span>
      </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center' >
          <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
          <FaSearch className='text-slate-500' />
        </form>
      </div>
    </header>
  )
}
