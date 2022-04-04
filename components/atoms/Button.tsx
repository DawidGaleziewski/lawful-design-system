import React from 'react';
import {css} from '@emotion/react';
import styled from '@emotion/styled';

enum ButtonVariants {
    PRIMARY = "primary",
    GHOST = "secondary"
}

interface IButtonProps {
    variant: ButtonVariants
}

export const Button = styled.button<IButtonProps>`
    cursor: pointer;
    border-radius: 3.7rem;
    padding: 1.6rem 3.7rem;
    border: none;
    font-size: ${props => props.theme.typography.buttonDefault.size};
    font-weight: ${props => props.theme.typography.buttonDefault.weight};
    font-family: ${props => props.theme.typography.buttonDefault.family};


    ${props => props.variant === ButtonVariants.PRIMARY && css`
        background-color: ${props.theme.color.primary};
        color: ${props.theme.color.textInverted};
        opacity: 1;
        transition: 0.3s linear opacity;
        outline: 0;

        &:focus {
            outline: 1px solid ${props.theme.color.status.active};
            outline-offset: 2px;
        }

        &:hover, &:active {
            opacity: 0.8;
            outline: none;
        }

        &:disabled {
            background-color: ${props.theme.color.status.disabled};
            cursor: not-allowed;
            opacity: 1;
        }
    `}
`;


