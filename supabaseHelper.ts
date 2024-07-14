import { supabase } from "./supabase"

interface Customer {
    name?: string,
    email: string,
    phone?: string,
    address?: string
}
export interface Product {
    id?: string,
    title: string,
    price: string,
    stock: string,
    description: string,
    category: string,
    img_url?: string,
    created_at?: string
}

export const addProduct = async(saveData: Product) => {
    const { data, error } = await supabase.from('products').insert(saveData).select();
    if(data && data.length) {
        return data;
    }
    if(error) {
        console.log(error.message)
        return [];
    }
}

export const updateProductImage = async(image: string,productId: string) => {
    const { data, error } = await supabase.from('products').update({img_url: image}).eq('id', productId).select();
    if(data && data.length) {
        return data;
    }
    if(error) {
        console.log(error.message)
        return [];
    }
}

export const getProductByUserId = async(userId: string,sort?: {
    key: string,
    ascending: boolean
}) => {
    let response;
    if(sort) {
        response = await supabase.from('products').select().eq('user_id', userId).order(sort?.key,{ascending: sort?.ascending});
    }else{
        response = await supabase.from('products').select().eq('user_id', userId);
    }
    const { data, error } = response; 
    if(data && data.length) {
        return data;
    }
    if(error) {
        console.log(error.message)
        return [];
    }
}
export const getAllCategories = async() => {
    const { data, error } = await supabase.from('categories').select();
    if(data && data.length) {
        return data;
    }
    if(error) {
        console.log(error.message)
        return [];
    }
}
