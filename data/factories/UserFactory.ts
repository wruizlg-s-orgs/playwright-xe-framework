import { USERS } from '../users.data';
import { LoginUser } from '../../models/LoginUser';

export class UserFactory {

    static admin(): LoginUser {

        return {

            ...USERS.ADMIN

        };

    }

    static invalid(): LoginUser {

        return {

            ...USERS.INVALID

        };

    }

}