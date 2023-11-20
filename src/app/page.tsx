import Frame1 from './components/Frame1'
import Frame12 from './components/Frame12'
import Frame2 from './components/Frame2'
import Frame3 from './components/Frame3'
import Frame4 from './components/Frame4'
import Frame5 from './components/Frame5'

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame12 />
    </main>
  )
}
