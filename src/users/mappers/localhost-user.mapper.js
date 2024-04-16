import { User } from "../models/user";
/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) =>{
    
    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isAtive,
        last_name,
    } = localhostUser;

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isAtive,
        lastName: last_name,
    });
}