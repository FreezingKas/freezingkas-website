import cat from './images/cat.gif'
import './WriteUps.css'

function WriteUps() {
    return (
        <>
            <div className='background'></div>
            <div className='container'>
                <img src={cat} alt="Chat" className='cat'></img>
                <h2 className='text'>Coming soon...</h2>
            </div>
        </>


    )
}

export default WriteUps;