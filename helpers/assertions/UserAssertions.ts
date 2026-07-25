import {
    expect
} from '@playwright/test';


import {
    User
} from '../../models/User';




export class UserAssertions {




    static expectUser(
        actual: User,
        expected: User
    ){


        this.expectUserProperties(
            actual,
            expected
        );


    }







    static expectUserProperties(
        actual: User,
        expected: Partial<User>
    ){



        if(expected.id !== undefined){

            expect(
                actual.id
            )
            .toBe(
                expected.id
            );

        }




        if(expected.name !== undefined){

            expect(
                actual.name
            )
            .toBe(
                expected.name
            );

        }




        if(expected.email !== undefined){

            expect(
                actual.email
            )
            .toBe(
                expected.email
            );

        }



    }








    static expectUserFields(
        user: User
    ){


        expect(
            user.id
        )
        .toBeDefined();



        expect(
            user.name
        )
        .toBeDefined();



        expect(
            user.email
        )
        .toBeDefined();



    }



}