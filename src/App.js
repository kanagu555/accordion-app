import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
    {
        title: 'Whats is React?',
        content: 'React is Front-end javascript library'
    },
    {
        title: 'Why use React?',
        content: 'React is popular JS library amount engineers '
    },
    {
        title: 'How do you use React?',
        content: 'By use the creating React components'
    }
]


const App = () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    )
}

export default App