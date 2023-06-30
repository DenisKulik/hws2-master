import React, {
    DetailedHTMLProps, InputHTMLAttributes, ReactNode, useState
} from 'react';
import SuperInputText
    from '../../../hw04/common/c1-SuperInputText/SuperInputText';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

export type SuperDebouncedInputPropsType = Omit<DefaultInputPropsType, 'type'>
    & {
    onChangeText?: (value: string) => void
    onEnter?: () => void
    error?: ReactNode
    spanClassName?: string
} & {
    onDebouncedChange?: (value: string) => void
}

const SuperDebouncedInput: React.FC<SuperDebouncedInputPropsType> = (
    {
        onChangeText,
        onDebouncedChange,
        ...restProps
    }
) => {
    const [ timerId, setTimerId ] = useState<NodeJS.Timeout | number | undefined>(
        undefined);

    const onChangeTextCallback = (value: string) => {
        onChangeText?.(value);

        if (onDebouncedChange) {
            clearTimeout(timerId);
            setTimerId(setTimeout(() => onDebouncedChange(value), 1500));
        }
    };

    return (
        <SuperInputText onChangeText={onChangeTextCallback} {...restProps} />
    );
};

export default SuperDebouncedInput;
