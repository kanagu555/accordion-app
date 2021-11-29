import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "Whats is React?",
    content: "React is Front-end javascript library",
  },
  {
    title: "Why use React?",
    content: "React is popular JS library amount engineers ",
  },
  {
    title: "How do you use React?",
    content: "By use the creating React components",
  },
];

const options = [
  {
    label: "Red color",
    value: "red",
  },
  {
    label: "Green color",
    value: "green",
  },
  {
    label: "Blue color",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
