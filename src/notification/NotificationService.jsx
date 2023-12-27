import {createContext, useContext, useState} from "react";

export const Notification = () => {
    const notificationStyles = {
        position: 'absolute',
        top: 100,
        right: 30,
        backgroundColor: 'green',
        padding: 29,
        borderRadius: 15,
        fontsize: 20
    }
    return (
        <div style={notificationStyles}>
            <h4>
                Success
            </h4>
            <p>
                Guardado
            </p>
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [notificationData, setNotificationData] = useState({
        text: '',
        type: 'Success',
        })

    const showNotification = (type, text) => {
        setNotificationData({
            text, type
        })
        setTimeout(() => {
            setNotificationData(
                {
                    text: '',
                    type: 'success'
                }
            )
        })
    }

    return (
            <NotificationContext.Provider value={{showNotification}}>
                { notificationData.text && <Notification  notificationData={notificationData} />}
                {children}
            </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}