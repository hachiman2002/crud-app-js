import usersStore from "./store/users-store"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async(element) =>{

    element.innerHTML = 'Loading...'
    await usersStore.loadNextPage();
} 