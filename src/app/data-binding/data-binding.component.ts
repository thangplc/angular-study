import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title = 'Data binding';
  fullName = 'Phan Luong Cong Thang';
  age = 18;
  isFA = 'true';
  user = {
    username: 'thangplc',
    email: 'thang-plc@outlook.com',
    role: true,
  }
  imgSrc = 'https://upload.wikimedia.org/wikipedia/vi/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg';

  isDisable = true;
  email = '';

  clickMe(){
    alert('Clicked');
  }
  getEmail(event: any) {
    // event = 'thang=pcl@outlook.com';
    console.log(event.target.value);
    this.email = event.target.value;
    console.log(this.email);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
