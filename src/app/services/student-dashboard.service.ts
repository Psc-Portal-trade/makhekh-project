import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface EnrolledCourse {
  courseId: string;
  courseName: string;
  teacherName: string;
  enrollmentDate: string;
  isTeacherReferral: boolean;
}

export interface StudentDashboardResponse {
  success: boolean;
  data: {
    totalEnrolledCourses: number;
    enrolledCourses: EnrolledCourse[];
  };
  message: string;
  statusCode: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentDashboardService {
  private apiUrl = 'https://api.makhekh.com/api/Dashboard/student';

  constructor(private http: HttpClient) { }

  getStudentDashboardData(): Observable<StudentDashboardResponse> {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const token = user?.token;
    if (!token) {
      return of({ success: false, data: { totalEnrolledCourses: 0, enrolledCourses: [] }, message: 'Token not found', statusCode: 401 });
    }
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.get<StudentDashboardResponse>(this.apiUrl, { headers });
  }
}

