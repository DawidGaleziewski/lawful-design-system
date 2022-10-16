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
`;

const DesignTableRow = styled.div<{}>`
    display: flex;
    justify-content: stretch;
    width: 100%;
`;

DesignTable.Row = DesignTableRow;

const DesignTableCell = styled.div<{}>`
  padding: 1.6rem 2.8rem;
  width: 100%;
`;

DesignTable.Cell = DesignTableCell

