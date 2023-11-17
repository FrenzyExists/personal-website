import { Octokit } from "octokit";

export type ID = string

export interface Column {
    id: ID;
    title: string;
    tasks: Tasks[];
}

export interface Tag {
    id: ID;
    tagName: string;
    color: number;
}

export interface Tasks {
    id: ID;
    title: string;
    createdAt: Date;
}

export interface Article extends Tasks {
    description: string;
    tags: Tag[];
    link?: string
}

export interface Skill {
    name: string;
    iconify: string;
    category: Array<string>;
}

// Create a personal access token at https://github.com/settings/tokens/new?scopes=repo
// todo: figure out where should i put this in nuxt. This should only executes once btw
export const octokit = new Octokit({ // create a new Octokit instance
    auth: process.env.GITHUB_FUNNY_KEY
});
