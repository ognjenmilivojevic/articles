import { GoogleArticle } from './google-article.class';

export class Response {
    status: string;
    totalResults: number;
    articles: Array<GoogleArticle>;
}
