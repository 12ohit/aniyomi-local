export interface AniyomiEntry {
  title: string;
  author: string; //Don't change this to 'studio' becuase Aniyomi needs this object called as 'author' and not 'studio'
  description: string;
  genre: string;
  status: AniyomiStatus;
}

export type AniyomiStatus = '0' | '1' | '2' | '3' | '4' | '5'