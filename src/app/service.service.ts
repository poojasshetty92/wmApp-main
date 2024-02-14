import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  
  saveRecycledItem(item: string, quantity: number): Promise<void> {
    // Assuming you will save the recycled item to a backend or storage solution
    return new Promise<void>((resolve, reject) => {
      // Mocking the save operation
      setTimeout(() => {
        // Resolve after a delay to simulate async operation
        resolve();
      }, 1000); // Simulate 1 second delay
    });
  }
}

