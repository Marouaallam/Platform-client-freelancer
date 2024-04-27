import {Link} from 'react-router-dom';

export const Navbar =()=>{
    return (
        <div>
            <Link to="/Home">Home</Link>
            <Link to="/Auth">Log in</Link>
        </div>
    )
}