import React, { FC } from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

interface IBackground {
    variant: "light" | "dark"
}

export const DesignTable = (props:{children: any}) => {
    return <DesignTableBase>
        {props.children}
    </DesignTableBase>
};

const DesignTableBase = styled.div`
   background-color: ${props => props.theme.color.backgroundLight};
   width: 100%;
   border: 1px solid ${props => props.theme.color.backgroundDark};
   color: ${props => props.theme.color.text};
`;

const DesignTableRow = styled.div<{}>`
    display: flex;
    justify-content: stretch;
    width: 100%;
    &:not(:last-of-type) {
        border-bottom: 1px solid ${props => props.theme.color.backgroundDark};
    } 
`;

DesignTable.Row = DesignTableRow;

const DesignTableCell = styled.div<{}>`
  padding: 1.6rem 2.8rem;
  width: 100%;
  &:not(:last-of-type) {
        border-right: 0.5px solid ${props => props.theme.color.backgroundDark};
    } 
`;

DesignTable.Cell = DesignTableCell

