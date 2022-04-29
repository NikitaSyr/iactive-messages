import s from './Messages.module.css';
import {useDispatch} from "react-redux";



const Messages = () => {
    const dispatch = useDispatch();

    return (
        <div className={s.messages}>
            <div className={s.messages__row}>
                Messages
            </div>
        </div>
    )
}

export default Messages;