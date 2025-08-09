import { CommonModule, NgFor } from '@angular/common';
import { Component, HostListener, NgModule } from '@angular/core';
import {FormsModule, NgSelectOption} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-test',
  imports: [FormsModule,NgFor,CommonModule, RouterLink,TranslocoPipe],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {


  step: number = 1; // تتبع رقم الخطوة الحالية
  selectedCourse: number | null = null; // الكورس المختار
  courseTitle: string = '';
  // selectedCategory: string = ''; // الفئة المختارة
  learningObjectives: string = '';
  requirements: string = '';
  targetAudience: string = '';

  // بيانات الكورس
 courseData = {
  courseType: '',
  category: '',
  categoryId: '', // تمت إضافته
  learningObjectives: '',
  requirements: '',
  targetAudience: '',
  courseTitle: ''
};

  // قائمة الدورات
  courses = [
    {
      image: '../../assets/fluent_record-20-regular (1).png',
      title: 'Recorded Educational Courses',
      description: 'You can upload a recorded made video on our website and increase the no of learners. Define your target audience, pick a promising topic and benefit other learners.'
    },
    {
      image: '../../assets/streamline_live-video.png',
      title: 'Live Streamed Educational Courses',
      description: 'Upload live videos and will help you to reserve your class with the capacity you need. Calendar schedule where you can adjust all your data. Submit your course link.'
    }
  ];

  // قائمة الفئات
// قائمة الفئات مع استخدام مفاتيح الترجمة
// categories = [
//   'development', 'business', 'finance', 'itSoftware',
//   'officeProductivity', 'personalDevelopment', 'design', 'marketing',
//   'lifestyle', 'music', 'photography', 'healthFitness',
//   'teachingAcademics', 'other'
// ];
categories: any[] = [];
selectedCategory: any = null;

  constructor(private router: Router, private route: ActivatedRoute,private categoriesService: CategoriesService) {}

ngOnInit() {
  this.getCategories();
}

getCategories(): void {
  this.categoriesService.getCategories().subscribe({
    next: (res) => {
      this.categories = res.data;
      console.log('✅ Categories:', this.categories);
    },
    error: (err) => {
      console.error('❌ Error fetching categories:', err);
    }
  });
}







  // اختيار نوع الكورس
  selectCourse(index: number): void {
    this.selectedCourse = index;
    this.courseData.courseType = this.courses[index].title; // حفظ نوع الكورس المختار
  }

  // الرجوع للخطوة السابقة
  previous(): void {
    if (this.step > 1) {
      this.step--;
    }
  }
// تعريف متغيرات للتحقق من الحقول الفارغة
isCourseTitleEmpty: boolean = false;
isCategoryEmpty: boolean = false;
isLearningObjectivesEmpty: boolean = false;
isRequirementsEmpty: boolean = false;
isTargetAudienceEmpty: boolean = false;

continue(): void {
  if (this.step === 1 && this.selectedCourse !== null) {
    this.step++;
  } else if (this.step === 2) {
    this.isCourseTitleEmpty = this.courseTitle.trim() === '';
    if (!this.isCourseTitleEmpty) {
      this.step++;
    }
  } else if (this.step === 3) {
  this.isCategoryEmpty = !this.selectedCategory;
  if (!this.isCategoryEmpty) {
    // حفظ الاسم والآي دي
    this.courseData.category = this.selectedCategory.name;
    this.courseData.categoryId = this.selectedCategory.id;
    this.step++;
  }
}

}


submitCourse(): void {
  this.isLearningObjectivesEmpty = this.learningObjectives.trim() === '';
  this.isRequirementsEmpty = this.requirements.trim() === '';
  this.isTargetAudienceEmpty = this.targetAudience.trim() === '';

  if (!this.isLearningObjectivesEmpty && !this.isRequirementsEmpty && !this.isTargetAudienceEmpty) {
    this.courseData.courseTitle = this.courseTitle;
    this.courseData.category = this.selectedCategory;
    this.courseData.learningObjectives = this.learningObjectives;
    this.courseData.requirements = this.requirements;
    this.courseData.targetAudience = this.targetAudience;

    console.log("🚀 Data before navigation:", this.courseData);

    this.router.navigate(['/createCoursesDetalis'], {
      queryParams: { course: encodeURIComponent(JSON.stringify(this.courseData)) }
    });
  }
}
checkInputs(): void {
  if (this.step === 2) {
    this.isCourseTitleEmpty = this.courseTitle.trim() === '';
  } else if (this.step === 3) {
    this.isCategoryEmpty = this.selectedCategory.trim() === '';
  } else if (this.step === 4) {
    this.isLearningObjectivesEmpty = this.learningObjectives.trim() === '';
    this.isRequirementsEmpty = this.requirements.trim() === '';
    this.isTargetAudienceEmpty = this.targetAudience.trim() === '';
  }
}




  }
