import { supabase } from "./supabase"

interface Customer {
    name?: string,
    email: string,
    phone?: string,
    address?: string
}