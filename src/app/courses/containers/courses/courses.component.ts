import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../model/course';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>;


  //coursesService: CoursesService;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router : Router,
    private route : ActivatedRoute
     ) {
    //this.courses = [];
    //this.coursesService = new CoursesService();
    this.courses$ = this.coursesService.list()

    .pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos.')
          console.log(error)
          return of([])
        })
    );
    }
    onError(errorMsg : string) {
      this.dialog.open(ErrorDialogComponent, {
        data: errorMsg
      });
    }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo : this.route})
  }

  onEdit(couse : Course){
    this.router.navigate(['edit', couse._id], {relativeTo : this.route})
  }
}
