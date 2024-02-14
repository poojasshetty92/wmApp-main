import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-recycle-add',
  templateUrl: 'recycle-add.page.html',
  styleUrls: ['recycle-add.page.scss'],
})
export class RecycleAddPage {
  selectedItem: string = '';
  quantity: number = 0;

  constructor(private serviceService: ServiceService) {}

  save() {
    if (!this.selectedItem || !this.quantity) {
      console.error('Please select an item and enter quantity.');
      return;
    }

    // Assuming DataService has a method to save recycled items
    this.serviceService.saveRecycledItem(this.selectedItem, this.quantity)
      .then(() => {
        console.log('Recycled item saved successfully.');
        // Optionally, navigate to a different page after saving
      })
      .catch(error => {
        console.error('Failed to save recycled item:', error);
      });
  }
}