export default () => {

    const forgettingThings = [
        "Appointment",
        "Emails",
        "Housework",
        "Reply to message",
        "Grocery Shopping",
        "Deadline",
        "Installing something"
    ]
    forgettingThings.random = ()=>{
        return forgettingThings[Math.floor(Math.random() * forgettingThings.length)]
    }
    return (<>
        {forgettingThings.random()}?
    </>)
}
