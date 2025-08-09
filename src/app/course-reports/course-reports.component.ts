import { Component, OnInit } from '@angular/core';
import { SecondNavComponent } from "../navbar/second-nav/second-nav.component";
import { HttpClient } from '@angular/common/http';
import { CourseInformationService } from '../services/course-information.service';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-course-reports',
  imports: [SecondNavComponent,TranslocoPipe,CommonModule,RouterModule,RouterLink],
  templateUrl: './course-reports.component.html',
  styleUrls: ['./course-reports.component.css']
})
export class CourseReportsComponent implements OnInit{


  courseId: string | null = null;
  courseData: any;
  quizzesData: any = null; // Store the new API response
  selectedEntityType: number = 1;
  selectedEntityId: string = '';
  filteredAttachments: any[] = [];

  constructor(
    private http: HttpClient,
    private courseInfoService: CourseInformationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.courseId = this.courseInfoService.getSelectedCourseId();
    console.log('📌 Selected Course ID:', this.courseId);

    if (this.courseId) {
      this.getCourseDetails();
    } else {
      console.error('❌ Course ID not found!');
    }
  }

  getCourseDetails() {
    const url = `https://api.makhekh.com/api/Courses/${this.courseId}`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        console.log('📘 Course Details:', res);
        this.courseData = res.data;
        // After getting course details, fetch quizzes using new API
        this.getQuizzesData();
      },
      error: (err) => {
        console.error('❌ Error fetching course details:', err);
      }
    });
  }

  getQuizzesData() {
    const url = `https://api.makhekh.com/api/student/quizzes/${this.courseId}/all-quizzes`;
    this.http.get<any>(url).subscribe({
      next: (res) => {
        console.log('📝 Quizzes Data:', res);
        this.quizzesData = res.data;
        // Default to showing course quizzes
        this.selectEntity(1, this.courseData.id);
      },
      error: (err) => {
        console.error('❌ Error fetching quizzes:', err);
      }
    });
  }

  selectEntity(type: number, id: string) {
    this.selectedEntityType = type;
    this.selectedEntityId = id;
    this.filteredAttachments = [];

    if (!this.quizzesData) {
      console.warn('⚠️ Quizzes data not loaded yet');
      return;
    }

    switch (type) {
      case 1: // Course
        this.filteredAttachments = this.quizzesData.courseQuizzes || [];
        break;

      case 2: // Section
        this.filteredAttachments = this.quizzesData.sectionQuizzes?.filter((quiz: any) => 
          quiz.sectionId === id
        ) || [];
        break;

      case 3: // Lecture
        this.filteredAttachments = this.quizzesData.lectureQuizzes?.filter((quiz: any) => 
          quiz.lectureId === id
        ) || [];
        break;

      case 4: // SubSection
        this.filteredAttachments = this.quizzesData.subSectionQuizzes?.filter((quiz: any) => 
          quiz.subSectionId === id
        ) || [];
        break;
    }

    console.log(`📎 Filtered Quizzes for ${this.getEntityTypeName(type)} (${id}):`, this.filteredAttachments);
  }

  getEntityTypeName(type: number): string {
    switch (type) {
      case 1: return 'Course';
      case 2: return 'Section';
      case 3: return 'Lecture';
      case 4: return 'SubSection';
      default: return 'Unknown';
    }
  }
  viewReport(quiz: any) {
    // Find the most recent attempt to show its report.
    if (quiz.attempts && quiz.attempts.length > 0) {
      const lastAttempt = quiz.attempts[quiz.attempts.length - 1];
      this.router.navigate(['/exam-report', lastAttempt.id]);
    } else {
      console.error('No attempts found for this quiz.');
    }
  }
  
  




}
