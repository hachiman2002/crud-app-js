import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-button/render-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store"
import { saveUser } from "./use-cases/save-user";

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
    renderAddButton(element);
    renderModal(element, async(userLike) =>{
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        renderTable();
    });
} 