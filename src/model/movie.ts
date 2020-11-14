import {immerable} from 'immer';

export default class Movie {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  [immerable] = true;

  constructor(
    id: string,
    title: string,
    category: string,
    likes: number,
    dislikes: number,
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.likes = likes;
    this.dislikes = dislikes;
  }
}
