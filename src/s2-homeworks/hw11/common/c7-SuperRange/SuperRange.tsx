import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 147,
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
                '& .MuiSlider-thumb': {
                    width: '18px',
                    height: '18px',
                    '&::before': {
                        content: '\'\'',
                        display: 'block',
                        width: '14px',
                        height: '14px',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        margin: 'auto',
                        borderRadius: '50%',
                        backgroundColor: '#fff',
                        position: 'absolute',
                        zIndex: 1,
                    },
                    '&::after': {
                        content: '\'\'',
                        display: 'block',
                        width: '6px',
                        height: '6px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2,
                    },
                },
            }}
            {...props}
        />
    );
};

export default SuperRange;
