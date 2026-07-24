import { User } from './User';


export interface UserListResponse {

    page:number;

    per_page:number;

    total:number;

    total_pages:number;

    data:User[];

}