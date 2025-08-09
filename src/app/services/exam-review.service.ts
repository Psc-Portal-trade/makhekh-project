import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CourseInformationService } from './course-information.service';
import { BehaviorSubject, Observable } from 'rxjs';

// Interfaces for the API response
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string | null;
  statusCode: number;
  errors: any;
}

export interface SourceReport {
  sourceType: string;
  sourceId: string;
  sourceTitle: string;
  totalQuestions: number;
  correctAnswers: number;
  studentAnsweredQuestions: number;
}

export interface QuestionReport {
  questionId: string;
  questionText: string;
  studentAnswer: string | null;
  isCorrect: boolean;
  sourceType: string;
  sourceId: string;
  sourceTitle: string;
}

export interface AttemptReport {
  attemptId: string;
  timeTakenInMinutes: number;
  totalScore: number;
  passingScore: number;
  isPassed: boolean;
  totalQuestions: number;
  correctAnswers: number;
  sourceReports: SourceReport[];
  questions: QuestionReport[];
}

@Injectable({
  providedIn: 'root'
})
export class ExamReviewService {
  private currentQuiz: any = null;
  private filteredQuizzes: any[] = [];
  private currentAttempt: any;
  private apiUrl = 'https://api.makhekh.com/api/student/quizzes';

  constructor(private http: HttpClient,
    private router: Router,
    private courseInfoService: CourseInformationService) {
    // Load from localStorage on init
    const storedQuiz = localStorage.getItem('reviewQuiz');
    const storedList = localStorage.getItem('filteredQuizzes');

    this.currentQuiz = storedQuiz ? JSON.parse(storedQuiz) : null;
    this.filteredQuizzes = storedList ? JSON.parse(storedList) : [];
  }

  // ✅ تخزين الكويز الحالي
  setCurrentQuiz(quiz: any) {
    this.currentQuiz = quiz;
    localStorage.setItem('reviewQuiz', JSON.stringify(quiz));
  }

  // ✅ استرجاع الكويز الحالي
  getCurrentQuiz(): any {
    return this.currentQuiz;
  }

  // ✅ تخزين القائمة المفلترة
  setFilteredQuizzes(quizzes: any[]) {
    this.filteredQuizzes = quizzes;
    localStorage.setItem('filteredQuizzes', JSON.stringify(quizzes));
  }

  // ✅ استرجاع القائمة المفلترة
  getFilteredQuizzes(): any[] {
    return this.filteredQuizzes;
  }

  // ✅ حذف البيانات (اختياري)
  clearReviewData() {
    this.currentQuiz = null;
    this.filteredQuizzes = [];
    localStorage.removeItem('reviewQuiz');
    localStorage.removeItem('filteredQuizzes');
  }

  startExam(quiz: any) {
    const quizId = quiz?.id;
    if (!quizId) {
      console.error('❌ Quiz ID not found');
      return;
    }

    const url = 'https://api.makhekh.com/api/student/quizzes/start';
    const body = { quizId };

    this.http.post(url, body).subscribe({
      next: (res: any) => {
        console.log('✅ Response from start exam API:', res);

        if (res.success && res.data?.id) {
          this.courseInfoService.setAttemptId(res.data.id);
          this.courseInfoService.setSelectedQuiz(quiz);
          this.router.navigate(['/course-exam']);
        } else {
          console.error('API failed or missing data:', res);
        }
      },
      error: (err) => {
        console.error('❌ Error starting exam:', err);
      }
    });
  }

setCurrentAttempt(attempt: any): void {
  this.currentAttempt = attempt;
}

getCurrentAttempt(): any {
  if (this.currentAttempt) return this.currentAttempt;

  // fallback from localStorage
  const saved = localStorage.getItem('currentAttempt');
  return saved ? JSON.parse(saved) : null;
}

getAttemptReport(attemptId: string): Observable<ApiResponse<AttemptReport>> {
    return this.http.get<ApiResponse<AttemptReport>>(`${this.apiUrl}/${attemptId}/report`);
  }



}






