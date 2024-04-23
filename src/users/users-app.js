import { renderButtons } from "./presentation/render-button/render-buttons";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UserApp = async(element) =>{

    element.innerHTML = 'Loading...'
    await usersStore.loadNextPage();
    element.innerHTML = ''
    
    renderTable(element);
    renderButtons(element);
} 