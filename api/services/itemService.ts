import { supabase } from '../supabase';


export async function createNewItem(name: string): Promise<void> {
    // Typisiere `data` als `ItemDTO[]`
    const { data, error } = await supabase
        .from('items')
        .insert([{ name }]);

    if (error) {
        throw new Error(error.message);
    }

}
