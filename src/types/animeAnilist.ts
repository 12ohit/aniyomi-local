export interface AnilistResponse<ResponseType> {
  data: ResponseType;
}

export interface AnilistPaginated<KeyValue extends string, Type> {
  Page: {
    [key in KeyValue]: Type[];
  };
}

export type AnilistPaginatedMedia = AnilistResponse<AnilistPaginated<'media', AnilistMedia>>

export type AnilistStatus = 'RELEASING' | 'FINISHED' | 'NOT_YET_RELEASED' | 'CANCELLED'

export type AnilistFormat = 'TV' | 'MOVIE' | 'TV_SHORT' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC'

export interface AnilistMedia {
  coverImage: {
    extraLarge: string;
  };
  description?: string;
  format: AnilistFormat;
  genres: string[];
  id: number;
  studios: AnilistStudios;
  status: AnilistStatus;
  title: {
    english?: string;
    romaji: string;
  };
}

export interface AnilistStudios {
  edges: AnilistStudio[];
}

export interface AnilistStudio {
  node: AnilistStudioName;
}

export interface AnilistStudioName {
  id: number;
  name: string;
}