import Ajv from 'ajv';

import {
    expect
} from '@playwright/test';



export class SchemaAssertions {


    static validate(

        data: unknown,

        schema: object

    ){


        const ajv =
            new Ajv();



        const validate =
            ajv.compile(
                schema
            );



        const valid =
            validate(
                data
            );



        expect(
            valid
        )
        .toBeTruthy();



        if(!valid){


            console.error(
                validate.errors
            );


        }


    }


}