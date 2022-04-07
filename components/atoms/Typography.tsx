import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export enum TypographyVariant {
    MAIN_HEADER = "main-header",
    SECTION_HEADER = "section-header",
    SUB_HEADER = "sub-header",
    BUTTON_TEXT = 'button-text',
    MOBILE_MENU = "mobile-menu",
    PARAGRAPH = "paragraph",
    LIST = "list",
    LINK = "link"
}

const VariantDefaultHTMLTag = {
    [TypographyVariant.MAIN_HEADER]: 'h1',
    [TypographyVariant.SECTION_HEADER]: 'h2',
    [TypographyVariant.SUB_HEADER]: 'h3',
    [TypographyVariant.BUTTON_TEXT]: 'span',
    [TypographyVariant.MOBILE_MENU]: 'span',
    [TypographyVariant.PARAGRAPH]: 'p',
    [TypographyVariant.LIST]: 'li',
    [TypographyVariant.LINK]: 'span'
}

interface ITypography {
    variant?: TypographyVariant;
    as?: React.ElementType<any>;
}

export const Typography: React.FC<ITypography> = (props = { variant: TypographyVariant.PARAGRAPH}) => <TypographyBase variant={props.variant} as={props.as ?? VariantDefaultHTMLTag[props.variant ?? TypographyVariant.PARAGRAPH] }>
    {props.children}
</TypographyBase>;


const TypographyBase = styled.p<ITypography>`
    margin: 0;
    ${props => props.variant === TypographyVariant.MAIN_HEADER && css`
        font-size: ${props.theme.typography.mainHeader.size};
        font-weight: ${props.theme.typography.mainHeader.weight};
        font-family: ${props.theme.typography.mainHeader.family};
    `};

    ${props => props.variant === TypographyVariant.SECTION_HEADER && css`
        font-size: ${props.theme.typography.mainHeader.size};
        font-weight: ${props.theme.typography.mainHeader.weight};
        font-family: ${props.theme.typography.mainHeader.family};
    `};

    ${props => props.variant === TypographyVariant.SUB_HEADER && css`
        font-size: ${props.theme.typography.subHeader1.size};
        font-weight: ${props.theme.typography.subHeader1.weight};
        font-family: ${props.theme.typography.subHeader1.family};
    `};

    ${props => props.variant === TypographyVariant.BUTTON_TEXT && css`
        font-size: ${props.theme.typography.buttonDefault.size};
        font-weight: ${props.theme.typography.buttonDefault.weight};
        font-family: ${props.theme.typography.buttonDefault.family};
    `};

    ${props => props.variant === TypographyVariant.PARAGRAPH && css`
        font-size: ${props.theme.typography.paragraph.size};
        font-weight: ${props.theme.typography.paragraph.weight};
        font-family: ${props.theme.typography.paragraph.family};
    `}
`;