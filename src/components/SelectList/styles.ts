import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';

export const disabledStyles = {
    control: ({ inverted }: any) => ({
        color: inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200,
        borderColor: inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200,
        boxShadow: 'none'
    }),
    placeholder: ({ inverted }: any) => ({
        color: inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200
    }),
    label: ({ inverted }: any) => ({
        color: inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200
    }),
    icons: ({ inverted }: any) => ({
        color: inverted ? Colors.AUTHENTIC_BLUE_550 : Colors.AUTHENTIC_BLUE_200
    })
};

export const errorStyles = {
    control: ({ variant }: any) => ({
        borderColor: Colors.NEGATIVE_ORANGE_900,
        boxShadow:
            variant === 'boxed'
                ? `inset 0 0 0 0.0625rem ${Colors.NEGATIVE_ORANGE_900}`
                : variant === 'bottom-lined' && `inset 0 -0.0625rem 0 0 ${Colors.NEGATIVE_ORANGE_900}`
    }),
    label: () => ({
        color: Colors.NEGATIVE_ORANGE_900
    })
};

export const variantStyles = {
    control: (props: any) => {
        switch (props.variant) {
            case 'boxed':
                const bSize = {
                    small: {
                        fontSize: get('fontSizes.1')(props),
                        minHeight: '2rem'
                    },
                    medium: {
                        fontSize: get('fontSizes.2')(props),
                        minHeight: '3rem'
                    }
                };

                const isBFocused = props.isFocused && {
                    borderColor: Colors.ACTION_BLUE_900,
                    boxShadow: `inset 0 0 0 0.0625rem ${Colors.ACTION_BLUE_900}`
                };

                return {
                    borderRadius: get('radii.2')(props),
                    border: `0.0625rem solid ${Colors.AUTHENTIC_BLUE_200}`,
                    ...isBFocused,
                    ...bSize[props.size]
                };

            case 'bottom-lined':
                const btSize = {
                    small: {
                        fontSize: get('fontSizes.1')(props),
                        minHeight: '2.5rem'
                    },
                    medium: {
                        fontSize: get('fontSizes.2')(props),
                        minHeight: '3.5rem'
                    }
                };
                const isBLFocused = props.isFocused && {
                    borderColor: Colors.ACTION_BLUE_900,
                    boxShadow: `inset 0 -0.0625rem 0 0 ${Colors.ACTION_BLUE_900}`
                };

                return {
                    border: 'none',
                    borderTopLeftRadius: get('radii.1')(props),
                    borderTopRightRadius: get('radii.1')(props),
                    borderBottom: `0.0625rem solid ${Colors.AUTHENTIC_BLUE_200}`,
                    ...isBLFocused,
                    ...btSize[props.size]
                };
        }
    },
    label: (props: any) => {
        switch (props.variant) {
            case 'boxed':
                const bSize = {
                    small: {
                        top: '-0.3125rem',
                        left: '0.4375rem',
                        padding: '0 0.125rem',
                        fontSize: '0.625rem'
                    },
                    medium: {
                        top: '-0.3125rem',
                        left: '0.5625rem',
                        padding: '0 0.25rem',
                        fontSize: get('fontSizes.0')(props)
                    }
                };

                return bSize[props.size];

            case 'bottom-lined':
                const btSize = {
                    small: {
                        top: '0.125rem',
                        left: '0',
                        padding: '0 0.125rem',
                        fontSize: '0.625rem'
                    },
                    medium: {
                        top: '0.375rem',
                        left: '0',
                        padding: '0 0.25rem',
                        fontSize: get('fontSizes.0')(props)
                    }
                };

                return btSize[props.size];
        }
    }
};
