import React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

interface IBackground {
    variant: "light" | "dark"
}

export const Background = styled.div<IBackground>`
    ${props => props.variant === "dark" && css`
       padding: 2rem;
       background-color: ${props.theme.color.backgroundDark}; 
    `};
`;