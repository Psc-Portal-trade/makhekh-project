import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { SecondNavComponent } from '../navbar/second-nav/second-nav.component';
import { StudentDashboardService, EnrolledCourse } from '../services/student-dashboard.service';

@Component({
  selector: 'app-students-orders',
  standalone: true,
  imports: [CommonModule, TranslocoModule,SecondNavComponent],
  templateUrl: './students-orders.component.html',
  styleUrls: ['./students-orders.component.css']
})
export class StudentsOrdersComponent {

  enrolledCourses: EnrolledCourse[] = [];

  constructor(private studentDashboardService: StudentDashboardService) {
    this.studentDashboardService.getStudentDashboardData().subscribe((response: { success: boolean, data: { enrolledCourses: EnrolledCourse[] } }) => {
      if (response.success) {
        this.enrolledCourses = response.data.enrolledCourses;
      } else {
        this.enrolledCourses = [];
      }
    });
  }

  async exportToPDF() {
    const doc = new jsPDF();

    // Fetch the font and convert it to base64
    const fontBytes = await fetch('/assets/fonts/Amiri-Bold.ttf').then(res => res.arrayBuffer());
    const fontBase64 = this.arrayBufferToBase64(fontBytes);

    // Add the Amiri font to jsPDF
    doc.addFileToVFS('Amiri-Bold.ttf', fontBase64);
    doc.addFont('Amiri-Bold.ttf', 'Amiri', 'bold');
    doc.setFont('Amiri', 'bold');

    const head = [['#', 'Course Name', 'Teacher Name', 'Enrollment Date', 'Teacher Referral']];
    const body = this.enrolledCourses.map((course: EnrolledCourse) => [
      course.courseId,
      course.courseName,
      course.teacherName,
      course.enrollmentDate ? new Date(course.enrollmentDate).toLocaleDateString() : '',
      course.isTeacherReferral ? 'Yes' : 'No'
    ]);

    autoTable(doc, {
      head: head,
      body: body,
      styles: {
        font: 'Amiri',
        fontStyle: 'bold',
      },
      headStyles: { font: 'Amiri', fontStyle: 'bold' },
    });

    doc.save('students-orders.pdf');
  }

  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }
}
