import React from 'react';
import styled, { StyledComponentBase } from 'styled-components';
import {
    background,
    BackgroundProps,
    color,
    ColorProps,
    compose,
    flexbox,
    FlexboxProps,
    grid,
    GridProps,
    layout,
    LayoutProps,
    position,
    PositionProps,
    space,
    SpaceProps,
    textAlign,
    TextAlignProps
} from 'styled-system';
import { theme } from '../../essentials/theme';

interface BoxProps
    extends SpaceProps,
        LayoutProps,
        PositionProps,
        ColorProps,
        FlexboxProps,
        GridProps,
        BackgroundProps,
        TextAlignProps {}

const Box: React.FC<BoxProps> & StyledComponentBase<'div', any, {}, 'theme'> = styled.div.attrs({ theme })`
    ${compose(space, layout, position, color, flexbox, grid, background, textAlign)}
`;

export { Box, BoxProps };
