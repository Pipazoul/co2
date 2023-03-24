import {pb} from "$lib/store";


export async function createNote() {
    const data = {
        title: "New Note",
        content: "This is a new note"
    };
    const note = await pb.collection("notes").create(data);
    return note;
}

export async function getNotes() {
    const notes = await pb.collection("notes").get();
    return notes;
}

export async function getNoteById(id: string) {
    const note = await pb.collection("notes").getOne(id);
    return note;
}

export async function updateNoteById(id: string, data: any) {
    const note = await pb.collection("notes").update(id, data);
    return note;
}

export async function deleteNoteById(id: string) {
    const note = await pb.collection("notes").delete(id);
    return note;
}

