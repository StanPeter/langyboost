import { gql } from "@apollo/client";
//writing of queries before generating them through another library

//DEPRECATED

export const RANDOM = gql`
    {
        tryingOut {
            id
            email
        }
    }
`;
