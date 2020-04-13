import React from "react";
import "./styles/App.scss";
import Collapsible from "./components/collapsible";
import datas from "./data.json";

function App() {
  return (
    <section className="App">
      <h1>Collapsible</h1>
      {datas.map(data => {
        return <Collapsible data={data} key={data.id} />;
      })}
    </section>
  );
}

export default App;
