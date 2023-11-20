import Image from 'next/image'
import Frame1 from './components/Frame1'
import Frame2 from './components/Frame2'

export default function Home() {
  return (
    <main className="flex w-screen flex-col">
      <Frame1 />
      <Frame2 />
    </main>
  )
}
