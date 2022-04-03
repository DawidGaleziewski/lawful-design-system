import React from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

enum ButtonVariants {
    PRIMARY,
    GHOST
}

interface IButtonProps {
    variant: ButtonVariants
}

export const Button = styled.button<IButtonProps>`
    background-color: ${props => {
        console.log('props on styled', props)
         return props.theme.color.primary
    }}
`;
