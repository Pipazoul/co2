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