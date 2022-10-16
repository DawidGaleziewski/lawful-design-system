import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TextVariant = {
    MAIN_HEADER: "main-header",
    SECTION_HEADER: "section-header",
    SUB_HEADER: "sub-header",
    CARD_HEADER:"card-header",
    BUTTON_TEXT: 'button-text',
    MOBILE_MENU: "mobile-menu",
    PARAGRAPH: "paragraph",
    LIST: "list",
    LINK: "link"
} as const;

type TextVariantUnionType = typeof TextVariant[keyof typeof TextVariant]

export interface IText {
    variant?: TextVariantUnionType;
    as?: React.ElementType<any>;
    children?: React.ReactElement | string;
    align?: "right" | "left" | "center"
}

export const Text: React.VFC<IText> = (props = { variant: TextVariant.PARAGRAPH}) => <TextBase variant={props.variant} as={props.as ?? "p"} align={props.align}>
    {props.children}
</TextBase>;

const TextBase = styled.p<IText>`
    margin: 0;
    ${props => props.variant === TextVariant.MAIN_HEADER && css`
        font-size: ${props.theme.text.mainHeader.size};
        font-weight: ${props.theme.text.mainHeader.weight};
        font-family: ${props.theme.text.mainHeader.family};
    `};

    ${props => props.variant === TextVariant.SECTION_HEADER && css`
        font-size: ${props.theme.text.mainHeader.size};
        font-weight: ${props.theme.text.mainHeader.weight};
        font-family: ${props.theme.text.mainHeader.family};
    `};

    ${props => props.variant === TextVariant.SUB_HEADER && css`
        font-size: ${props.theme.text.subHeader1.size};
        font-weight: ${props.theme.text.subHeader1.weight};
        font-family: ${props.theme.text.subHeader1.family};
    `};

    ${props => props.variant === TextVariant.CARD_HEADER && css`
        font-size: ${props.theme.text.h5.size};
        font-weight: ${props.theme.text.h5.weight};
        font-family: ${props.theme.text.h5.family};
    `};

    ${props => props.variant === TextVariant.BUTTON_TEXT && css`
        font-size: ${props.theme.text.buttonDefault.size};
        font-weight: ${props.theme.text.buttonDefault.weight};
        font-family: ${props.theme.text.buttonDefault.family};
    `};

    ${props => props.variant === TextVariant.PARAGRAPH && css`
        font-size: ${props.theme.text.paragraph.size};
        font-weight: ${props.theme.text.paragraph.weight};
        font-family: ${props.theme.text.paragraph.family};
    `}

    ${props => props.align && css`
        text-align: ${props.align};
    `}
`;