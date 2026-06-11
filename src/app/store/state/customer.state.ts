import { Customer } from "../../models/customer.model";


// Define the shape of the customer state
// The CustomerState interface defines the structure of the state for the customer feature.
// It includes an array of customers and a loading flag to indicate whether data is being fetched.
// The customers property is an array of Customer objects, which will hold the list of customers in the state.
// The loading property is a boolean that indicates whether the application is currently fetching customer data.
// The CustomerState interface is used to type the state in the reducer and selectors, ensuring that the state structure is consistent throughout the application.
// The CustomerState interface is essential for managing the state of the customer feature in the application.
export interface CustomerState { 
  customers: Customer[];
  loading: boolean;
}

// Initial state for the customer feature
// This state will be used when the application starts and there is no data yet.
// The customers array is initialized as empty, and loading is set to false.
// The initialCustomerState is a constant that holds the default values for the customer state.
// This initial state will be used in the reducer to set the default state for the customer feature.

 export const initialCustomerState: CustomerState = {
  customers: [],
  loading: false,
};



