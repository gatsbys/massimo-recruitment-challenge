import { Starship } from '../common/models/starship.model'
import { Film } from '../common/models/film.model';
import { StarshipListContainer } from '../common/models/starship-list-container.model';

export const MOCKED_CONTAINER : StarshipListContainer = {
    count: 1,
    next: "TestNext",
    previous: "TestPrev",
    results: [
        {
            id: 1,
            name: "TestName",
            model: "TestModel",
            manufacturer: "TestManufacturer",
            cost_in_credits: "TestCredits",
            length: "TestLen",
            max_atmosphering_speed: "TestSpeed",
            crew: "TestCrew",
            passengers: "TestPaxes",
            cargo_capacity: "TestsCargo",
            consumables: "TestConsu",
            hyperdrive_rating: "TestRating",
            MGLT: "TestMGLT",
            image: "https://starwars-visualguide.com/assets/img/starships/5.jpg",
            starship_class: "TestClass",
            films: [{
                id: 1,
                characters: null,
                created: "TestCreated",
                director: "TestDirector",
                edited: null,
                episode_id: null,
                image: "https://starwars-visualguide.com/assets/img/starships/5.jpg",
                opening_crawl: null,
                planets: null,
                producer: null,
                release_date: null,
                species: null,
                starships: null,
                title: "TestTitle",
                url: "http://swapi.dev/api/films/1/",
                vehicles: null,
            }],
            pilots: [],
            created: "TestCreated",
            edited: "TestEdited",
            url: "http://swapi.dev/api/starships/1/",
        }
    ]
}

export const MOCKED_STARSHIP: Starship =
{
    id: 1,
    name: "TestName",
    model: "TestModel",
    manufacturer: "TestManufacturer",
    cost_in_credits: "TestCredits",
    length: "TestLen",
    max_atmosphering_speed: "TestSpeed",
    crew: "TestCrew",
    passengers: "TestPaxes",
    cargo_capacity: "TestsCargo",
    consumables: "TestConsu",
    hyperdrive_rating: "TestRating",
    MGLT: "TestMGLT",
    image: "https://starwars-visualguide.com/assets/img/starships/5.jpg",
    starship_class: "TestClass",
    films: [{
        id: 1,
        characters: null,
        created: "TestCreated",
        director: "TestDirector",
        edited: null,
        episode_id: null,
        image: "https://starwars-visualguide.com/assets/img/starships/5.jpg",
        opening_crawl: null,
        planets: null,
        producer: null,
        release_date: null,
        species: null,
        starships: null,
        title: "TestTitle",
        url: "http://swapi.dev/api/films/1/",
        vehicles: null,
    }],
    pilots: [],
    created: "TestCreated",
    edited: "TestEdited",
    url: "http://swapi.dev/api/starships/1/",
};

export const MOCKED_FILM: Film = {
    id: 1,
    characters: null,
    created: "TestCreated",
    director: "TestDirector",
    edited: null,
    episode_id: null,
    image: "https://starwars-visualguide.com/assets/img/starships/5.jpg",
    opening_crawl: null,
    planets: null,
    producer: null,
    release_date: null,
    species: null,
    starships: null,
    title: "TestTitle",
    url: "http://swapi.dev/api/films/1/",
    vehicles: null,
}

export const MOCKED_URL = "http://swapi.dev/api/films/1/";

