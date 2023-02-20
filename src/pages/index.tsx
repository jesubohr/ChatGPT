import { MainLayout } from '@/layouts'
import { Header } from '@/components/Header'
import { Aside } from '@/components/Aside'
import { Chat } from '@/components/Chat'

export default function Home() {
  return (
    <MainLayout>
      <Aside />
      <div className='flex:1 flex flex:col h:full'>
        <Header />
        <Chat />
      </div>
    </MainLayout>
  )
}
