import {pb} from "$lib/store";


export async function createFood(data ) {
    const Food = await pb.collection("food").create(data);
    return Food;
}

export async function getFoods() {
    const Foods = await pb.collection("food").get();
    return Foods;
}

export async function getFoodById(id: string) {
    const Food = await pb.collection("food").getOne(id);
    return Food;
}

export async function updateFoodById(id: string, data: any) {
    const Food = await pb.collection("Foods").update(id, data);
    return Food;
}

export async function deleteFoodById(id: string) {
    const Food = await pb.collection("Foods").delete(id);
    return Food;
}

