import Frame1 from './components/Frame1'
import Frame10 from './components/Frame10'
import Frame11 from './components/Frame11'
import Frame12 from './components/Frame12'
import Frame2 from './components/Frame2'
import Frame3 from './components/Frame3'
import Frame4 from './components/Frame4'
import Frame5 from './components/Frame5'
import Frame6 from './components/Frame6'
import Frame7 from './components/Frame7'
import Frame8 from './components/Frame8'
import Frame9 from './components/Frame9'

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <div className='md:hidden'>
        <Frame5 />
        <Frame6 />
      </div>
      <div className='hidden md:flex'>
        <Frame6 />
        <Frame5 />
      </div>
      <Frame7 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <h1 className='text-red-600 underline text-sm'>NO THANKS, I DON'T WANT THIS.</h1>
      <Frame11 />
      <Frame12 />
    </main>
  )
}
