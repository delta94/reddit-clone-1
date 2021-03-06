import { Error } from '../baseTypes';
import { Post } from '../../entities/post';

export interface QueryGetPostArgs {
  postId: number;
}
export interface QueryGetPostsArgs {
  limit: number;
  cursor: string;
}
export interface MutationCreatePostArgs {
  title: string;
  text: string;
}
export interface MutationUpdatePostArgs {
  id: number;
  title: string;
  text: string;
}
export interface MutationDeletePostArgs {
  id: number;
}
export interface MutationUpvoteArgs {
  postId: number;
  point: number;
}

export type QueryGetPostsReturn = Promise<{
  posts: Post[];
  hasMore: boolean;
}>;
export type MutationCreatePostReturn = Promise<{
  error?: Error;
  post?: Post;
}>;
