import axios from 'axios';

export const dogs = [
    {
        value: 1,
        label: 'Braccobaldo'
    },
    {
        value: 2,
        label: 'Scooby Doo'
    },
    {
        value: 3,
        label: 'Pongo'
    },
    {
        value: 4,
        label: 'Bolt'
    },
    {
        value: 5,
        label: 'Peggy'
    },
    {
        value: 6,
        label: 'Rex'
    },
    {
        value: 7,
        label: 'Lassie'
    },
    {
        value: 8,
        label: 'Marley'
    },
    {
        value: 9,
        label: 'Snoopy'
    },
    {
        value: 10,
        label: 'Santa\'s Little helper'
    },
    {
        value: 11,
        label: 'Pluto'
    },
    {
        value: 12,
        label: 'Lilly'
    },
    {
        value: 13,
        label: 'Vagabondo'
    },
    {
        value: 14,
        label: 'Beethoven'
    },
    {
        value: 15,
        label: 'Rin Tin Tin'
    },
    {
        value: 16,
        label: 'Raudi'
    }
];

export const colors = [
    {
        value: 'yellow',
        label: 'Giallo'
    }, {
        value: 'blu',
        label: 'Blu'
    }, {
        value: 'red',
        label: 'Rosso'
    }, {
        value: 'purple',
        label: 'Viola',
        disabled: true
    }
];

export function loadPosts(q) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&q=${q}`)
    // return axios.get(`https://ingruz-api-aqvckpkjre.now.sh/api/hotels?_limit=10&q=${q}`)
        .then(res => {
            const options = res.data.map(post => ({ value: post.id, label: post.title }));

            return { options };
        });
}