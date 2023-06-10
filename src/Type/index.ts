


export interface IPopular {
    poster_path: string,
    title:string,
    id: number,
}
export interface IRated {
    poster_path: string,
    title:string,
    id: number,
}
export interface IFilm {
    poster_path: string,
    title:string,
    id: number,
}

export interface IDetail {
    poster_path: string,
    title: string,
    overview: string,
    runtime: number,
    vote_average: number,
    backdrop_path: string,
    id:number,
    key: number,
}

export interface IDetailId {
    id: number,
}

export interface IActors {
    profile_path: string,
    name: string,
    id: number,
}

export interface ITrailers {
    id: number,
    key: number,
}

export interface IActorsMovie {
    id: number,
    poster_path:string,
    name: string,
}

export interface IDetailActors {
    birthday: number,
    profile_path: string,
    name: string
    biography: string
}