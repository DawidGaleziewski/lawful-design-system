import React from 'react';
import styled from '@emotion/styled';

enum TypographyVariant {
    MAIN_HEADER = "main-header",
    SECTION_HEADER = "section-header",
    SUB_HEADER = "sub-header",
    BUTTON_TEXT = 'button-text',
    MOBILE_MENU = "mobile-menu",
    PARAGRAPH = "paragraph",
    LIST ='list',
    LINK ="link"
}

interface ITypography {
    variant: TypographyVariant;
}

export const Typography = styled.p<TypographyVariant>`

`;