import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
export default function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // ref Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*{}[]`~+_()*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyFun = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,8)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  console.log(password);
  return (
    <div className="App">
      <h1>Password Genrator</h1>
      <div className="">
        <input
          type="text"
          value={password}
          placeholder="Password"
          id="inputBox"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyFun}>Copy</button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
          margin: "20px",
        }}
      >
        {/*  */}
        <div>
          <input
            type="range"
            min={6}
            max={40}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length : {length}</label>
        </div>
        {/*  */}
        <div>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        {/*  */}
        {/*  */}
        <div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
