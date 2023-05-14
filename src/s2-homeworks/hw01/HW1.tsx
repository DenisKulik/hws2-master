import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar from './avatar.png';

export type MessageType = {
    id: number
    user: {
        avatar: string
        name: string
    }
    message: {
        text: string
        time: string
    }
}

export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar,
        name: 'Ethan Mitchell',
    },
    message: {
        text: 'Which programming languages and frameworks should I learn for frontend development?',
        time: '22:00',
    },
};
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar,
        name: 'Daniel Green',
    },
    message: {
        text: 'HTML, CSS, JavaScript, React, Angular, Vue. Also, algorithms and data structures are important. Good luck!',
        time: '22:01',
    },
};

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>
                <MessageSender M={Message} />
            </div>
        </div>
    );
};

export default HW1;
