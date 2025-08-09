import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondNavComponent } from '../navbar/second-nav/second-nav.component';
import { Router, RouterLink } from '@angular/router';
import { AttemptReport, ExamReviewService, ApiResponse } from '../services/exam-review.service';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-view-attempt',
  standalone: true,
  imports: [CommonModule, SecondNavComponent,TranslocoPipe,RouterLink],
  templateUrl: './view-attempt.component.html',
  styleUrls: ['./view-attempt.component.css'],
})
export class ViewAttemptComponent implements OnInit {
  toStr(val: any): string {
    return val !== undefined && val !== null ? String(val) : '';
  }

  isSidebarCollapsed = false;
  attempt: any;
  quizToReview: any;
  attemptReport: AttemptReport | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(private examReviewService: ExamReviewService, private router: Router,private translocoService: TranslocoService) {}

      ngOnInit(): void {
    this.attempt = this.examReviewService.getCurrentAttempt();
    this.quizToReview = this.examReviewService.getCurrentQuiz();

    if (!this.attempt?.id || !this.quizToReview) {
      this.router.navigate(['/course-exams-results']);
      return;
    }


    this.loadAttemptReport(this.attempt.id);
  }

  loadAttemptReport(attemptId: string): void {
    this.isLoading = true;
    this.error = null;
    this.examReviewService.getAttemptReport(attemptId).subscribe({
      next: (response: ApiResponse<AttemptReport>) => {
        if (response.success) {
          this.attemptReport = response.data;
          console.log('Loaded attemptReport:', this.attemptReport);
          console.log('Loaded quizToReview:', this.quizToReview);
          console.log('quizToReview.questions:', this.quizToReview?.questions);
          console.log('attemptReport.questions:', this.attemptReport?.questions);
          // The old `attempt` object is kept for compatibility with the template's initial checks.
          // We can enrich it if needed, but the helper functions will now use `attemptReport`.
          this.attempt.studentAnswers = this.attemptReport.questions.map(q => ({
            questionId: q.questionId,
            selectedOptionId: q.studentAnswer,
            isCorrect: q.isCorrect
          }));
        } else {
          this.error = response.message || 'Failed to load report.';
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'An error occurred while fetching the report.';
        this.isLoading = false;
        console.error('Error fetching attempt report:', err);
      },
    });
  }



  isCorrect(question: any, selectedOptionId: string): boolean {
    return question.correctChoiceId === selectedOptionId;
  }


  scrollToQuestion(questionNumber: number): void {
    const element = document.getElementById(`question-${questionNumber}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleSidebar(): void {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }


  getCorrectAnswersCount(attempt: any): number {
    return this.attemptReport?.correctAnswers || 0;
  }
  getTotalQuestions(): number {
    return this.attemptReport?.totalQuestions || 0;
  }
getScorePercentage(attempt: any): number {
  const total = this.getTotalQuestions();
  const correct = this.getCorrectAnswersCount(attempt);
  return total > 0 ? Math.round((correct / total) * 100) : 0;
}
  formatSubmittedDuration(start: string, submitted: string): string {
    if (!this.attemptReport) return '-';

    const minutes = this.attemptReport.timeTakenInMinutes;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = Math.floor(minutes % 60);

    const lang = this.translocoService.getActiveLang();
    const isArabic = lang === 'ar';

    const hLabel = isArabic ? 'ساعة' : 'h';
    const mLabel = isArabic ? 'دقيقة' : 'm';

    const parts = [];
    if (hours > 0) parts.push(`${hours} ${hLabel}`);
    if (remainingMinutes > 0) parts.push(`${remainingMinutes} ${mLabel}`);

    // If time is less than a minute, show 'أقل من دقيقة' or 'Less than a minute'
    if (hours === 0 && remainingMinutes === 0) {
      return isArabic ? 'أقل من دقيقة' : 'Less than a minute';
    }

    return parts.join(' ');
  }


  getStudentAnswer(questionId: string): string {
    if (!this.attemptReport) {
      console.log('[getStudentAnswer] attemptReport is null');
      return '';
    }
    console.log('[getStudentAnswer] Looking for questionId:', questionId, 'in attemptReport.questions:', this.attemptReport.questions);
    const questionReport = this.attemptReport.questions.find(q => String(q.questionId).trim() === String(questionId).trim());
    if (!questionReport) {
      console.log('[getStudentAnswer] No matching questionReport found for questionId:', questionId);
      return '';
    }
    console.log('[getStudentAnswer] Found questionReport:', questionReport);
    return questionReport.studentAnswer || '';
  }

getIsUnique(questionId: string): boolean {
  const answer = this.attempt?.studentAnswers.find((a: any) => a.questionId === questionId);
  return answer?.isUnique === true;
}

  getQuestionState(question: any): 'correct' | 'incorrect' | 'unanswered' {
    const questionReport = this.attemptReport?.questions.find(q => q.questionId === question.id);
    if (!questionReport || questionReport.studentAnswer === null || questionReport.studentAnswer === undefined) {
      return 'unanswered';
    }
    return questionReport.isCorrect ? 'correct' : 'incorrect';
  }


}

