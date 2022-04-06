import Terminal, { ColorMode, LineType } from '../src/components/terminal/index.tsx';
import { useState } from 'react';
import './App.css'
import {Link} from 'react-router-dom';


function App() {
    const [terminalLineData, setTerminalLineData] = useState([
        { type: LineType.Output, value: 'Welcome to the FreezingKas terminal !' },
        { type: LineType.Output, value: 'Type \'help\' to display all commands' },
    ]);

    function onInput(string) {
        let ld = [...terminalLineData];
        ld.push({type: LineType.Input, value: string});
        if(string.toLocaleLowerCase() === 'help') {
            ld.push({type: LineType.Output, value: 'Available commands: '});
            ld.push({type: LineType.Output, value: 'help : Displays this help message'});
            ld.push({type: LineType.Output, value: 'whoami : Displays who is FreezingKas'});
            ld.push({type: LineType.Output, value: 'github : Displays my GitHub profile'});
            ld.push({type: LineType.Output, value: 'write-ups : Open my write-ups page'});
            ld.push({type: LineType.Output, value: 'projects : Open my projects page'});
            ld.push({type: LineType.Output, value: 'rootme : Open my root-me profile'});
            ld.push({type: LineType.Output, value: 'hackthebox : Open my HackTheBox profile'});
            ld.push({type: LineType.Output, value: 'tryhackme : Open my TryHackMe profile'})
            ld.push({type: LineType.Output, value: 'clear : Clears the terminal'});
        } else if(string.toLocaleLowerCase() === 'whoami') {
            ld.push({type: LineType.Output, value: 'FreezingKas : Software Cyber Security student at ENSIBS (Vannes)'});
        } else if(string.toLocaleLowerCase() === 'github') {
            ld.push({type: LineType.Output, value: 'Opening Github profile...'});
            window.open('https://github.com/FreezingKas', '_blank');
        } else if(string.toLocaleLowerCase() === 'write-ups') {
            ld.push({type: LineType.Output, value: 'Opening Write-Ups page...'});
            window.open(process.env.URL + 'write-ups/', '_blank');
        } else if (string.toLocaleLowerCase() === 'projects') {
            ld.push({type: LineType.Output, value: 'Opening Projects page...'});
            window.location.href = process.env.PUBLIC_URL + '/projects/';
        } else if (string.toLocaleLowerCase() === 'rootme') {
            ld.push({type: LineType.Output, value: 'Opening Root-Me profile...'});
            window.open('https://www.root-me.org/FreezingKas', '_blank');
        } else if (string.toLocaleLowerCase() === 'hackthebox') {
            ld.push({type: LineType.Output, value: 'Opening HackTheBox profile...'});
            window.open('https://app.hackthebox.com/users/472492', '_blank');
        } else if (string.toLocaleLowerCase() === 'tryhackme') {
            ld.push({type: LineType.Output, value: 'Opening TryHackMe profile...'});
            window.open('https://tryhackme.com/p/FreezingKas', '_blank');
        } else if (string.toLocaleLowerCase() === 'clear') {
            ld = []
        } else {
            ld.push({type: LineType.Output, value: 'Unknown command'});
        }
        setTerminalLineData(ld);
    }

    return (
        <>
            <div className='background'></div>
            <div className="App">
                <h1 className="title">FreezingKas</h1>
                <nav className='navigation'>
                    <Link className='link' to="/write-ups">Write-Ups</Link>
                    <p className='pipe'>|</p>
                    <Link className='link' to="/projects">Projects</Link>
                    <p className='pipe'>|</p>
                    <Link className='link' to="">CTF Team</Link>
                </nav>
                <div className='terminal'>
                    <Terminal name='max@freezingkas: ~'
                        colorMode={ColorMode.Dark}
                        lineData={terminalLineData}
                        onInput={onInput}
                        prompt='max@freezingkas ~ ' />
                </div>
            </div>
        </>
    );
}

export default App;