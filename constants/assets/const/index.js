import headshot1 from '../images/headshot1.jpg'
import headshot2 from '../images/headshot2.jpg'
import headshot3 from '../images/headshot3.jpg'
import headshot4 from '../images/headshot4.jpg'
import headshot5 from '../images/headshot5.jpg'
import twitter from '../images/twitter.png'
import spotify from '../images/spotify.png'
import netflix from '../images/Netflix.png';

export const headshotItems = [
    {
        id: 1,
        src: headshot1,
    },
    {
        id: 2,
        src: headshot2,
    },
    {
        id: 3,
        src: headshot3,
    },
    {
        id: 4,
        src: headshot4,
    },
    {
        id: 5,
        src: headshot5,
    },
]

export const containers = [
    {
        id: 1,
        color: 'bg-rose-400',
        upperText: '$14.99/mo',
        icon: netflix,
        lowerText: 'Netflix',
    },
    {
        id: 2,
        color: 'bg-teal-400/80 ',
        upperText: '$7.99/mo',
        icon: spotify,
        lowerText: 'Spotify',
    },
    {
        id: 3,
        color: 'bg-black',
        upperText: '$8.00/mo',
        icon: twitter,
        lowerText: 'Twitter',
    },
]