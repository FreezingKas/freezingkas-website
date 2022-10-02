import ape from './images/makhack.gif'
import './CTFTeam.css'

function CTFTeam() {
    return (
        <>
            <div className='background'></div>
            <div className='container'>
                <h1 className='title'>CTF Team</h1>
                <img src={ape} alt="logo" className='ape'></img>
                <h1 className='text'>MAK'HACK</h1>
                <p className='names'><bold>M58 - Francis - FreezingKas - J'Hack Chir'Hack - NoNames - Naylh - couttcoutt - Fabien - PauvreTimo</bold></p>
                <p className='text'>MAK'HACK is a CTF team created by 5 students from the University of South Brittany, France.</p>
            </div>
        </>


    )
}

export default CTFTeam;