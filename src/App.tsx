import { Suspense, useState } from "react";
import "./App.css";
import RRouter from "./router";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>loading. . .</div>}>
        <RRouter />
      </Suspense>
    </div>
  );
}

export default App;
