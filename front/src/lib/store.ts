import { get, writable } from 'svelte/store';
export const modal = writable(false);
export const loginModal = writable(false);
import PocketBase from 'pocketbase';
import {PUBLIC_POCKETBASE_URL} from '$env/static/public'

export const pb = new PocketBase(PUBLIC_POCKETBASE_URL);

export const currentUser = writable(pb.authStore.model);
export const currentInstances = writable([]);
export const currentInstanceTypes = writable([]);
export const currentNotes = writable([]);
export const currentTasks = writable([]);
export const currentFood = writable([]);

pb.authStore.onChange((user) => {
    currentUser.set(pb.authStore.model);
});


export async function watchUserChange() {
    const getUser = await pb.collection("users").getOne(get(currentUser).id, {});
    currentUser.set(getUser);
    // subscribe to the user data
    pb.collection("users").subscribe('*', async ({action,  record}) => {
        if (action === "update") {
            currentUser.set(record);
        }
    });   
}

export async function watchNoteChange() {
    const initialNotes = await pb.collection("notes").getFullList({});
    currentNotes.set(initialNotes);
    
    // subscribe to the note data
    pb.collection("notes").subscribe('*', async ({action,  record}) => {
        if (action === "update") {
            currentNotes.set(get(currentNotes).map(note => {
                if (note.id === record.id) {
                    return record;
                }
                return note;
            }));
        }
        if (action === "create") {
            currentNotes.set([...get(currentNotes), record]);
        }
        if (action === "delete") {
            currentNotes.set(get(currentNotes).filter(note => note.id !== record.id));
        }
    });

}

export async function watchTaskChange() {
    const initialTasks = await pb.collection("tasks").getFullList({});
    currentTasks.set(initialTasks);
    
    // subscribe to the task data
    pb.collection("tasks").subscribe('*', async ({action,  record}) => {
        if (action === "update") {
            currentTasks.set(get(currentTasks).map(task => {
                if (task.id === record.id) {
                    return record;
                }
                return task;
            }));
        }
        if (action === "create") {
            currentTasks.set([...get(currentTasks), record]);
        }
        if (action === "delete") {
            currentTasks.set(get(currentTasks).filter(task => task.id !== record.id));
        }
    });

}

export async function watchFoodChange() {
    const initialFood = await pb.collection("food").getFullList({});
    currentFood.set(initialFood);
    
    // subscribe to the food data
    pb.collection("food").subscribe('*', async ({action,  record}) => {
        if (action === "update") {
            currentFood.set(get(currentFood).map(food => {
                if (food.id === record.id) {
                    return record;
                }
                return food;
            }));
        }
        if (action === "create") {
            currentFood.set([...get(currentFood), record]);
        }
        if (action === "delete") {
            currentFood.set(get(currentFood).filter(food => food.id !== record.id));
        }
    });

}