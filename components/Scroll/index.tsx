import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import { Button, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(Button)(({ theme }) => ({
    position: 'fixed',
    right: '40px',
    bottom: '40px',
    cursor: 'pointer',
    fontSize: '50px',
}))

const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginLeft: '5px',
    borderRadius: '50%',
}))

const ScrollComponent = () => {
    const isBrowser = () => typeof window !== 'undefined';

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    if (isBrowser()) {
        window.addEventListener('scroll', toggleVisible)
    }

    return (
        <StyledButton>
            <StyledBox component="span" sx={{ backgroundColor: 'light.main' }}>
                <ArrowUpwardIcon
                    onClick={scrollToTop}
                    sx={{
                        display: visible ? 'inline' : 'none',
                        stroke: '#204B8E',
                        strokeWidth: 2,
                        fontSize: 50
                    }}
                />
            </StyledBox>
        </StyledButton>
    )
}

export default ScrollComponent
