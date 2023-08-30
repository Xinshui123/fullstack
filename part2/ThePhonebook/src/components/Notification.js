const Notification = ({ message, isShow }) => {
    const NotificationStyle = {
        color: "green",
        background: "lightgrey",
        fontSize: 20,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }

    return (
        <div>
            {isShow
                ? <div>{message}</div>
                : < div style={NotificationStyle} className="error">{message}is added</div>
            }
        </div>
    )
}

export default Notification