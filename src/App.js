import React from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
    return (
        <div className="App">
            <Header />
            <Profile />
            <Skills />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
}

export default App;
