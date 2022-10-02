import Terminal, { ColorMode, LineType } from '../src/components/terminal/index.tsx';
import { useState } from 'react';
import {Link} from 'react-router-dom'; 

import './App.css'


function App() {
    const [terminalLineData, setTerminalLineData] = useState([
        { type: LineType.Output, value: 'Welcome to the FreezingKas terminal !' },
        { type: LineType.Output, value: 'Type \'help\' to display all commands' },
        { type: LineType.Output, value: '' }
    ]);

    function onInput(string) {
        let ld = [...terminalLineData];
        ld.push({type: LineType.Input, value: string});

        switch(string.toLocaleLowerCase()) {
            case 'help':
                const line = ['Available commands :', 
                        'help : Displays this help message', 
                        'whoami : Displays who is FreezingKas', 
                        'github : Displays my GitHub profile', 
                        'write-ups : Open my write-ups page', 
                        'projects : Open my projects page', 
                        'rootme : Open my root-me profile', 
                        'hackthebox : Open my HackTheBox profile', 
                        'tryhackme : Open my TryHackMe profile', 
                        'clear : Clears the terminal'];

                for(let i = 0; i < line.length; i++) {
                    ld.push({type: LineType.Output, value: line[i]});
                }
                break;
            case 'whoami':
                ld.push({type: LineType.Output, value: 'FreezingKas : Software Cyber Security student at ENSIBS (Vannes)'});
                break;
            case 'github':
                ld.push({type: LineType.Output, value: 'Opening Github profile...'});
                window.open('https://github.com/FreezingKas', '_blank');
                break;
            case 'write-ups':
                ld.push({type: LineType.Output, value: 'Opening Write-Ups page...'});
                window.open(process.env.URL + 'write-ups/', '_blank');
                break;
            case 'projects':
                ld.push({type: LineType.Output, value: 'Opening Projects page...'});
                window.location.href = process.env.PUBLIC_URL + '/projects/';
                break;
            case 'rootme':
                ld.push({type: LineType.Output, value: 'Opening Root-Me profile...'});
                window.open('https://www.root-me.org/FreezingKas', '_blank');
                break;
            case 'hackthebox':
                ld.push({type: LineType.Output, value: 'Opening HackTheBox profile...'});
                window.open('https://app.hackthebox.com/users/472492', '_blank');
                break;
            case 'tryhackme':
                ld.push({type: LineType.Output, value: 'Opening TryHackMe profile...'});
                window.open('https://tryhackme.com/p/FreezingKas', '_blank');
                break;
            case 'clear':
                ld = []
                break;
            default:
                ld.push({type: LineType.Output, value: 'Unknown command'});
                break;
        }
        setTerminalLineData(ld);
    }

    const header = (window.innerWidth < 768 ? '~ ' : 'max@freezingkas: ~ ')

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
                    <Link className='link' to="/ctfteam">CTF Team</Link>
                </nav>
                <div className='terminal'>
                    <Terminal name={header}
                        colorMode={ColorMode.Dark}
                        lineData={terminalLineData}
                        onInput={onInput}
                        prompt='max@freezingkas:~$ ' />
                </div>
            </div>
        </>
    );
}

export default App;