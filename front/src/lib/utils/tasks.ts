import {pb} from "$lib/store";

export async function createTask() {
    const data = {
        name: "New Task",
    };
    const task = await pb.collection("tasks").create(data);
    return task;
}

export async function getTasks() {
    const tasks = await pb.collection("tasks").get();
    return tasks;
}

export async function getTaskById(id: string) {
    const task = await pb.collection("tasks").getOne(id);
    return task;
}

export async function updateTaskById(id: string, data: any) {
    const task = await pb.collection("tasks").update(id, data);
    return task;
}

export async function deleteTaskById(id: string) {
    const task = await pb.collection("tasks").delete(id);
    return task;
}
