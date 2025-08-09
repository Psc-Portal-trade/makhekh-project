import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SecondNavComponent } from '../navbar/second-nav/second-nav.component';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';



@Component({
  selector: 'app-exam-report',
  standalone: true,
  imports: [CommonModule, RouterModule, SecondNavComponent, TranslocoModule],
  templateUrl: './exam-report.component.html',
  styleUrl: './exam-report.component.css'
})
export class ExamReportComponent implements OnInit {
  reportData: any;
  isLoading = true;
  error: string | null = null;

    constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private transloco: TranslocoService
  ) {}

  ngOnInit(): void {
    const quizId = this.route.snapshot.paramMap.get('quizId');
    if (quizId) {
      this.fetchReport(quizId);
    } else {
      this.isLoading = false;
      this.error = this.transloco.translate('examReport.quizIdNotFound');
    }
  }

  fetchReport(quizId: string): void {
    const apiUrl = `https://api.makhekh.com/api/student/quizzes/${quizId}/report-for-all`;
    this.http.get<any>(apiUrl).subscribe({
      next: (response) => {
        if (response.success) {
          this.reportData = response.data;
          console.log('Report Data:', this.reportData);
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.error = this.transloco.translate('examReport.fetchError');
        this.isLoading = false;
        console.error(err);
      }
    });
  }

}
