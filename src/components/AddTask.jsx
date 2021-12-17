import {useState} from 'react'

const AddTask = ({onAddTask}) => {

    const [text,setText] = useState('')
    const [dateTime,setDateTime] = useState('')
    const [reminder, setReminder] = useState(false)
    
// Form Validation
    const onSubmit = (e) => {
        e.preventDefault();

        if (!text) {
            alert('Kindly add text')
            return
        }

        onAddTask({ text, dateTime, reminder })
        
        // Clear Form After Submit
        setText('')
        setDateTime('')
        setReminder(false)
    }

    return (
        <form className="add-task-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Enter Your Task..." value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" placeholder="Add Date & Time" value={dateTime} onChange={(e)=>setDateTime(e.target.value)}/>
            </div>
            <div className="form-control form-control-checkbox">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} placeholder="Enter Task Title Here..." value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value='Save Task' className="btn btn-block"/>
        </form>
    )
}

export default AddTask
