import Button from './Button'

// 'btnText' is boolean to change 'Add Task' Button text
const Header = ({title, onClickAddTask,btnText}) => {

    return (
        <header className='header'>
            <h2 className="">{title}</h2>
            <Button color={btnText?'red':'green'} text={btnText?'Close':'Add Task'} onClick={onClickAddTask}/>
        </header>
    )
}

export default Header
