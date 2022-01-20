import Button from './Button'
import Tasks from './Tasks'
import AddTask from './AddTask'
const Header = () => {
    return (
            <header className="headerBody">
                <h1 >To Do List  <Button /></h1>
                <AddTask />
                <Tasks />
            </header >
    )
}
export default Header; 