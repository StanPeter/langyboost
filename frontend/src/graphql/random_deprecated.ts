import { gql } from "@apollo/client";

export const RANDOM = gql`
    {
        tryingOut {
            id
            email
        }
    }
`;
