import Frame1 from './components/Frame1'
import Frame2 from './components/Frame2'
import Frame3 from './components/Frame3'

export default function Home() {
  return (
    <main className="flex w-screen flex-col">
      <Frame1 />
      <Frame2 />
      <Frame3 />
    </main>
  )
}
