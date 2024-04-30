import Link from 'next/link'
import './pickgame.css'


export default function pickgame(){
    return(<>
    <div className='goback-link' > 
        <Link className='goback-link-child' href="/project" >Go Back</Link>
    </div>
    <div className="pickgame-con" >
        <h1 className="pickgame-message" >{`Failed to import! Please contact to Ly Sochetra for more info 
            or wait until meeting face to face to show exactly how it work.
            sorry for inconvenience :^(`}
        </h1>
    </div>
    </>)
}