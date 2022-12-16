import { IPOST } from "../interfaces/i-post";

export class Post implements IPOST {
    id: number;
    title: string;
    body: string;
    isPublished: boolean;
    url: string;

    constructor(id: number,
        title: string,
        body: string,
        isPublished: boolean
        ){
            this.id = id;
            this.title = title;
            this.body = body;
            this.isPublished = isPublished;
            this.url = "https://picsum.photos/200/150?random=2";
        }
}
