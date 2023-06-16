import { Component } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  value1:model = new model(1,'Default')
  value2:model = new model(1,'Default')



  Categories: model[] = [new model(1,'mohamed'),new model(2,'ahmed')]
  Location:model[] = [new model(3,'Kareem'),new model(4,'Mahmoud')]
  ngOnInit() {
    console.log(this.Categories)
  }

  modelChange(event: any) {
    console.log(event.target.value)
   }

   modelChange2(event: any) {
    console.log(event.target.value)
   }

  
  

}

export class model {
  constructor(
      public id:Number,
      public name:String,
      
  ){}
}
