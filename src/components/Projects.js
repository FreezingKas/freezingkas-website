import cat from './images/cat.gif'
import './Projects.css'

function Projects() {
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

export default Projects