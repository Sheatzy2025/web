interface Film {
    title : string,
    director : string,
    duree : number,
    urlImage ?: string,
    description ?: string,
    budget ?: number
}

interface CinemaContext {
    films : Film[];
    addFilm : (film : Film) => void;
}

export type {Film, CinemaContext};