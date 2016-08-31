import axios from 'axios';

export const dogs = [
    {
        id: 1,
        name: 'Braccobaldo'
    },
    {
        id: 2,
        name: 'Scooby Doo'
    },
    {
        id: 3,
        name: 'Pongo'
    },
    {
        id: 4,
        name: 'Bolt'
    },
    {
        id: 5,
        name: 'Peggy'
    },
    {
        id: 6,
        name: 'Rex'
    },
    {
        id: 7,
        name: 'Lassie'
    },
    {
        id: 8,
        name: 'Marley'
    },
    {
        id: 9,
        name: 'Snoopy'
    },
    {
        id: 10,
        name: 'Santa\'s Little helper'
    },
    {
        id: 11,
        name: 'Pluto'
    },
    {
        id: 12,
        name: 'Lilly'
    },
    {
        id: 13,
        name: 'Vagabondo'
    },
    {
        id: 14,
        name: 'Beethoven'
    },
    {
        id: 15,
        name: 'Rin Tin Tin'
    },
    {
        id: 16,
        name: 'Raudi'
    }
];

export function loadPosts(q) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&q=${q}`)
        .then(res => {
            // const options = res.data.map(post => ({ value: post.id, label: post.title }));

            return { options: res.data };
        });
}