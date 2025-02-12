import { useState, useCallback, useEffect, useRef } from 'react';
// import './App.css'

function App() {
  const [len, setLen] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pass, setPass] = useState("");

  const passRef = useRef(null);
  
  const passGen = useCallback(() => {
    let p = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYzabcdefghijklmnopqrstvuwxyz";

    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*~`{}[]";

    for (let i = 1; i <= len; i++) {
      let ch = Math.floor(Math.random() * str.length);
      p += str.charAt(ch);
    }
    setPass(p);
  }, [len, num, char, setPass]);

  const copyPass = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(pass);
  }, [pass]);

  useEffect(() => {
    passGen();
  }, [len, num, char, passGen]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPass}>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={len}
              className='cursor-pointer'
              onChange={(e) => {
                setLen(e.target.value);
              }} />
            <label>Length: {len}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={num}
              id="numberInput"
              onChange={() => {
                setNum((prev) => !prev);
              }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              checked={char}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev);
              }} />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
