import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from './AppService/post.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularservice_17';
  apidata:any=[];

  constructor(private service:PostService) {}
  
    ngOnInit() {
  
     this.caller_api();
  }
  caller_api()
  {
    this.service.get_APIdata().subscribe((response) => {this.apidata = response;});
  }

}
