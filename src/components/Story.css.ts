import { style } from '@vanilla-extract/css'

export const story = style({
    color: '#374171',
    marginBottom: '8px'
})

export const storyTitle = style({
    fontSize: '16px',
    color: '#111',
    textDecoration: 'none',
})
export const storyHeader = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '2px',
    lineHeight: "24px"
})

export const storyFooter = style({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    lineHeight: "24px",
    fontSize: '12px'
})

export const smallLink = style({
    color: '#888',
    textDecoration: 'none',
    ':hover': {
        textDecoration: 'underline'
    }

})