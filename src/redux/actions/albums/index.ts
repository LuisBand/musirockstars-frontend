import * as types from './types'

interface _album {
        id: number,
        name: string,
        image: string,
        price_virtual: number,
        price_physical: number,
        stock: number,
        release: string,
}

interface _albums{
    albums: _album[];
}

export const getAlbums = (payload: _albums) => {
    return {
        type: types.GET_ALBUMS,
        payload: payload
    }
}