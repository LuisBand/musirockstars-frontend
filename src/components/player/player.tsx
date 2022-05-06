import { FC, useState } from "react";
import { PlayerProps } from "./types";
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import PauseRounded from '@mui/icons-material/PauseRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';

const Container = styled.div`
    width: 550px;
    height: 42%;
    background-color: #FDFDFD;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    border-radius: 20px;
    place-content: center;
`

const Card = styled.div`
    width: 60%;
    height: 350px;
    background-color: #FFFFFF;
    border-radius: 20px;
    box-shadow: 8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
`

const Controllers = styled.div`
    display: flex;
    justifyContent:center;
    alignItems: center;
`

const Image = styled.img`
    height: 140px;
    border-radius: 50%;
`

const Info = styled.div`
    height: 100px
    display: fex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
`

const TinyText = styled(Typography)({
    fontSize: '0.75rem',
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

const Player: FC<PlayerProps> = ({ image, name, artist, duration}) => {

    const theme = useTheme();
    const time = 200;
    const [position, setPosition] = useState(32);
    const [paused, setPaused] = useState(false);

    function formatDuration(value: number) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 9 ? `0${secondLeft}` : secondLeft}`;
    }

    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    return(
        <Container>
            <Card>
                <Image src={image}>
                    
                </Image>
                <Info>
                    <Typography sx={{fontSize: '14px', fontWeight: 'bold', textAlign: 'center'}}>{name}</Typography>
                    <Typography sx={{fontSize: '10px', color: 'gray', textAlign: 'center'}}>{artist}</Typography>
                </Info>
                <Box sx={{width: '90%'}}>
                    <Slider
                        aria-label="time-indicator"
                        size="small"
                        value={position}
                        min={0}
                        step={1}
                        max={duration}
                        onChange={(_, value) => setPosition(value as number)}
                        sx={{
                            color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
                            height: 4,
                            '& .MuiSlider-thumb': {
                            width: 8,
                            height: 8,
                            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                            '&:before': {
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: `0px 0px 0px 8px ${
                                theme.palette.mode === 'dark'
                                    ? 'rgb(255 255 255 / 16%)'
                                    : 'rgb(0 0 0 / 16%)'
                                }`,
                            },
                            '&.Mui-active': {
                                width: 20,
                                height: 20,
                            },
                            },
                            '& .MuiSlider-rail': {
                            opacity: 0.28,
                            },
                        }}
                    />
                    <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mt: -2,
                    }}
                    >
                        <TinyText>{formatDuration(position)}</TinyText>
                        <TinyText>-{formatDuration(duration - position)}</TinyText>
                    </Box>
                </Box>

            </Card>
            <Controllers>
                    <IconButton aria-label="previous song">
                        <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
                    <IconButton
                        aria-label={paused ? 'play' : 'pause'}
                        onClick={() => setPaused(!paused)}
                    >
                    {paused ? (
                        <PlayArrowRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor}/>
                    ) : (
                        <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
                    )}
                    </IconButton>
                    <IconButton aria-label="next song">
                        <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
                    </IconButton>
            </Controllers>
        </Container>
    )
}

export default Player;

