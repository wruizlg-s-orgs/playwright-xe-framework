export const ErrorSchema = {


    type: 'object',


    properties: {


        message: {

            type: 'string'

        }


    },


    required: [

        'message'

    ],


    additionalProperties: true


};