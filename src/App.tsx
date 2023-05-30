// import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { Counter } from "./components/Counter";
// import { Calculator } from "./components/Calculator";
import { RecoilRoot } from "recoil";
import { ChakraProvider } from "@chakra-ui/react";
import { TodoList } from "./components/TodoList";

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <RecoilRoot>
      <ChakraProvider>
        <div className="App">
          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
          <main>
            {/* <Counter value={count} onChange={(value) => setCount(value)} /> */}
            {/* <Calculator /> */}
            <TodoList />
          </main>
        </div>
      </ChakraProvider>
    </RecoilRoot>
  );
}

export default App;
