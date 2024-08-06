import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum ModelAttributeTypes {
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet",
  NULL = "_null"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

type EagerBlog = {
  readonly id: string;
  readonly name: string;
  readonly posts?: ModelPostConnection | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly _version: number;
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
}

type LazyBlog = {
  readonly id: string;
  readonly name: string;
  readonly posts?: ModelPostConnection | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly _version: number;
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
}

export declare type Blog = LazyLoading extends LazyLoadingDisabled ? EagerBlog : LazyBlog

export declare const Blog: (new (init: ModelInit<Blog>) => Blog)

type EagerPost = {
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog | null;
  readonly comments?: ModelCommentConnection | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly _version: number;
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
  readonly blogPostsId?: string | null;
}

type LazyPost = {
  readonly id: string;
  readonly title: string;
  readonly blog?: Blog | null;
  readonly comments?: ModelCommentConnection | null;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly _version: number;
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
  readonly blogPostsId?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post)

type EagerComment = {
  readonly id: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly _version: number;
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
  readonly postCommentsId?: string | null;
}

type LazyComment = {
  readonly id: string;
  readonly post?: Post | null;
  readonly content: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly _version: number;
  readonly _deleted?: boolean | null;
  readonly _lastChangedAt: number;
  readonly postCommentsId?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment)

type EagerModelBlogConnection = {
  readonly items: (Blog | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

type LazyModelBlogConnection = {
  readonly items: (Blog | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

export declare type ModelBlogConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelBlogConnection : LazyModelBlogConnection

export declare const ModelBlogConnection: (new (init: ModelInit<ModelBlogConnection>) => ModelBlogConnection)

type EagerModelPostConnection = {
  readonly items: (Post | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

type LazyModelPostConnection = {
  readonly items: (Post | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

export declare type ModelPostConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelPostConnection : LazyModelPostConnection

export declare const ModelPostConnection: (new (init: ModelInit<ModelPostConnection>) => ModelPostConnection)

type EagerModelCommentConnection = {
  readonly items: (Comment | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

type LazyModelCommentConnection = {
  readonly items: (Comment | null)[];
  readonly nextToken?: string | null;
  readonly startedAt?: number | null;
}

export declare type ModelCommentConnection = LazyLoading extends LazyLoadingDisabled ? EagerModelCommentConnection : LazyModelCommentConnection

export declare const ModelCommentConnection: (new (init: ModelInit<ModelCommentConnection>) => ModelCommentConnection)

