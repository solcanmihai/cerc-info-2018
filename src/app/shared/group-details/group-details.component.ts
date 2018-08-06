import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.css']
})
export class GroupDetailsComponent implements OnInit {

  id;
  group;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.dataService.getGroup(this.id).subscribe(data => {
        this.group = data;
        console.log(data);
      });
    })
  }

}
