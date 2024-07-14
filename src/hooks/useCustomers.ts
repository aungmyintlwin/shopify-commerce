
import { useQuery } from '@tanstack/react-query';
import { getAllCustomers } from '../../supabaseHelper';

const listCustomer = async() => {
    const data = await getAllCustomers();
    return data;
}

const useCustomers =  () => useQuery({ queryKey: ['fetch-customer'], queryFn: listCustomer });
export default useCustomers;