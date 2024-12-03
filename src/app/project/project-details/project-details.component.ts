import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../project-data';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit {

  projectId!: number;
  projectDetails: any;
  projectList = projects;
  sanitizedDescription!: SafeHtml;

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer){}

  ngOnInit(): void{
    
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');
      if (id){
        this.projectId = +id;
        this.loadProjectDetails();
      }
    });
  }

  loadProjectDetails(): void{
    this.projectDetails = projects.find(project => project.id === this.projectId);

    if(this.projectDetails?.project_description){
      this.sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(this.projectDetails.project_description)
    }
  }

  pageRouter(path: string):void{
    this.router.navigate([path])
  }
}
