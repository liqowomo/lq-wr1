import Image from 'next/image'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { mainnet, optimism } from 'wagmi/chains'


const connector = new InjectedConnector({
  chains: [mainnet, optimism],
})
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Wagmi Connector
        
      </h1>
    </main>
  )
}
