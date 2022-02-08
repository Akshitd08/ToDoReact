import Button from './Button'
import { useLocation } from 'react-router-dom';
const Header = ({ addShow, showAdd }) => {

    const location = useLocation()
    return (
        <header>
            <h1 className='head'>To Do List
                {location.pathname === '/' && <Button
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'} onClick={addShow}
                />}
            </h1>
        </header >
    )
}
export default Header; 