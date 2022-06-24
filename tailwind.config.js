module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    content: ['./src/*.njk', './src/**/*.njk', './src/**/**/*.njk'],
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        'li::marker': {
                            color: theme('colors.gray.900'),
                        },

                        a: {
                            color: theme('colors.purple.800'),
                            textDecoration: 'underline',
                            textDecorationColor: theme('colors.gray.800'),
                            textDecorationThickness: '2px',

                            '&:hover': {
                                color: theme('colors.purple.900'),
                                textDecoration: 'underline',
                                textDecorationColor: theme('colors.gray.800'),
                                textDecorationThickness: '3px',
                            },
                            '&:visited': {
                                color: theme('colors.purple.700'),
                                textDecoration: 'underline',
                                textDecorationColor: theme('colors.gray.800'),
                                textDecorationThickness: '2px',
                            },
                        },
                        code: {
                            backgroundColor: '#27212e',
                            color: '#ffffff',
                            fontWeight: '400',
                            'border-radius': '0.25rem',
                        },
                        'code::before': {
                            content: '""',
                            'padding-left': '0.25rem',
                        },
                        'code::after': {
                            content: '""',
                            'padding-left': '0.25rem',
                        },
                        '.highlight-line-isdir': {
                            color: '#b0b0b0',
                            'background-color': '#222',
                        },
                        //TODO: line highlights not very nice
                        '.highlight-line-active': {
                            'background-color': 'hsla(60, 100%, 60%, .2)',
                        },
                        //TODO: git diffs could be more clear
                        '.inserted': {
                            // 'background-color': '#45844b',
                        },
                        '.deleted': {
                            // 'background-color': '#902f2f',
                        },
                        'blockquote p:first-of-type::before': false,
                        'blockquote p:last-of-type::after': false,

                        blockquote: {
                            'border-left': '3px dotted #4527a0',
                            background: theme('colors.gray.100'),
                            color: theme('colors.gray.800'),
                        },

                        '.frac-line': {
                            'border-color': 'black !important',
                        },

                        '.direct-link': {
                            'text-decoration': 'none !important',
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
