// erstat App med dette, hvis du vil beskytte med adgangskode
import { useState } from 'react';

export default function App() {
  const [access, setAccess] = useState(false);
  const [input, setInput] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    if (input === '1234') {
      setAccess(true);
    }
  }

  if (!access) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow">
          <label className="block mb-2">Adgangskode:</label>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 mb-4 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Log ind
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6" >Velkommen til mit private CV!
       <h1 class="text-3xl font-bold underline"> Hello world!</h1>
    </div>
    
  );
}

