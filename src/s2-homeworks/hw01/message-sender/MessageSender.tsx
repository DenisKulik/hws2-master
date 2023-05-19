import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { message0 } from '../HW1';
import s from './MessageSender.module.css';
import { MessagePropsType } from '../message/Message';

type MessageSenderPropsType = {
    Message: (props: MessagePropsType) => JSX.Element
}

const MessageSender = ({ Message }: MessageSenderPropsType) => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);
    const [ messages, setMessages ] = useState<any[]>([]);
    const [ text, setText ] = useState<any>('');

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value);
    };

    useEffect(() => {
        if (textareaRef?.current) {
            textareaRef.current.style.height = '0px';
            textareaRef.current.style.height
                = textareaRef.current.scrollHeight + 'px';
        }
    }, [ text ]);

    const addMessage = () => {
        if (!text) return;

        setMessages([
            ...messages,
            {
                id: messages.length ? messages.length + 1 : 1,
                user: message0.user,
                message: {
                    text,
                    time: new Date().toTimeString().slice(0, 5),
                },
            },
        ]);
        setTimeout(() => setText(''), 4);
    };

    const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        e.key === 'Enter' && e.shiftKey && addMessage();
    };

    return (
        <>
            {messages.map((m) => (
                <Message key={'message' + m.id} message={m} />
            ))}

            <div id={'hw1-send-message-form'} className={s.sendForm}>
                <textarea
                    id={'hw1-textarea'}
                    className={s.textarea}
                    ref={textareaRef}
                    title={'Shift+Enter for send'}
                    placeholder={'Type your message'}
                    value={text}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <button
                    id={'hw1-button'}
                    className={s.button}
                    onClick={addMessage}
                >
                    Send
                </button>
            </div>
        </>
    );
};

export default MessageSender;
