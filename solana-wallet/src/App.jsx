import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './SolanaWallet'; 

function App() {
  const [count, setCount] = useState(0)
  const [mnemonic, setMnemonic] = useState("");

  return (
    <div>
            <input type="text" value={mnemonic}></input>

      <button onClick={async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn)
      }}>
        Create Seed Phrase
      </button>

          {/* Add the SolanaWallet component and pass mnemonic as a prop */}
          {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
    </div>
  )
}



export default App
