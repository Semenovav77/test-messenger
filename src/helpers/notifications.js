import { notification } from 'antd';

export const openNotification = ({ text, type, title, duration = 3 }) =>
    notification[type]({
        message: title,
        description: text,
        duration,
    });