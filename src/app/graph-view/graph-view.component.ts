import { AfterViewInit, Component, OnInit } from '@angular/core';
import { npmDepencies } from '../models/dependencies';
import { GraphService } from '../services/graph.service';
import { Node, Edge, ClusterNode } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-graph-view',
  templateUrl: './graph-view.component.html',
  styleUrls: ['./graph-view.component.scss']
})
export class GraphViewComponent implements OnInit {


  constructor(private graphService: GraphService) { }

  package: string = "react";
  version: string = "16.13.0";
  isNoDependenciesFound: boolean = false;
  isApiError: boolean = false;
  nodes: Node[];
  links: Edge[];

  ngOnInit(): void {
    this.graphService.getGrapgh(this.package, this.version).subscribe((res) => {
      this.nodes = res.packagesArr;
      this.links = res.dependenciesArr;
      })
    };
 
  onSubmit() {
    this.graphService.getGrapgh(encodeURIComponent(this.package), this.version).subscribe((res) => {
      res === undefined ? this.isNoDependenciesFound = true : this.isNoDependenciesFound = false;
      this.nodes = res?.packagesArr;
      this.links = res?.dependenciesArr;
    }, 
    (error) => {
    this.isApiError = true;
    }); 
  }
}

