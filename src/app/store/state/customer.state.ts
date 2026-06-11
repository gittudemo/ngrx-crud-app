import { Customer } from "../../models/customer.model";


// Define the shape of the customer state
export interface CustomerState { 
  customers: Customer[];
  loading: boolean;
}

// Initial state for the customer feature
 export const initialCustomerState: CustomerState = {
  customers: [],
  loading: false,
};



