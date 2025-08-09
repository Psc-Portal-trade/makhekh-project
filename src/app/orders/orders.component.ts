import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Observable } from 'rxjs';
import { LangService } from '../services/lang.service';
import { AuthService } from '../services/auth.service';
import { TeacherService } from '../services/teacher.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  imports: [TranslocoPipe,CommonModule,ReactiveFormsModule,SidebarComponent],
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {

  orders: any[] = [];
  totalCourses: number = 0;
  totalStudents: number = 0;
  scheduledLectures: number = 0;
  completedLectures: number = 0;
  totalEarnings: number = 0;
  totalTeacherPercentage: number = 0;
  totalPlatformPercentage: number = 0;

    activeTab: string = 'NoOfStudent';
    selectedCourse: string = '';
    selectedCourseKey: string = ''; // المفتاح الفعلي
  fullName: string = '';
   firstLetter: string = '';
    role: string = '';
    userRole: string = '';
  email:string=''
  
    // بيانات الكورسات المختلفة

  
    // القيم الافتراضية عند تحميل الصفحة
    NoOfStudent: number = 0;
    NoOfStudentCompletedTheCourse: number = 0;
    StudentsSuggestions: number = 0;
    NoOfQuestions: number = 0;
  
    logoSrc: string = 'assets/Logo AR.png';
  
    constructor(private langService: LangService,private authService: AuthService,private router: Router,private teacherService: TeacherService) {
      this.setLogo();
   const userData = this.authService.getUserData();
      if (userData) {
        this.fullName = userData.fullName;
        this.role = userData.role;
    }
    }
  
     _translocoService = inject(TranslocoService);
     private translocoService = inject(TranslocoService);
  
     selectedCourse$: Observable<string> = this.translocoService.selectTranslate('AllCourses');
  profileImg: string = '../../assets/download.jfif';
  
  
     ngOnInit() {
  
      this.langService.lang$.subscribe((lang) => {
        this.logoSrc = lang === 'ar' ? 'assets/Logo AR.png' : 'assets/Logo EN.png';
      });
       // تعيين الدورة الافتراضية
       this.selectedCourseKey = 'AllCourses';
       this.selectedCourse$ = this.translocoService.selectTranslate('AllCourses');
  
       // حساب المجموع لجميع الدورات
  
       // تعيين البيانات الأولية
  
  
  
    const user = this.authService.getUserData(); // هنا بنجيب الداتا من السيرفيس
    this.userRole = user?.userRole || ''; // هنا بنستخرج الرول
    this.fullName = user?.fullName || '';
    this.email = user?.email || '';
  this.firstLetter = this.fullName.charAt(0).toUpperCase();
  this.teacherService.getTeacherDashboard().subscribe({
        next: (res: any) => {
      if (res.success && res.data) {
            this.orders = res.data.enrolledStudents;
      this.totalCourses = res.data.totalCourses;
      this.totalStudents = res.data.totalStudents;
      this.scheduledLectures = res.data.scheduledLectures;
      this.completedLectures = res.data.completedLectures;
      this.totalEarnings = res.data.totalEarnings;
      this.totalTeacherPercentage = res.data.totalTeacherPercentage;
      this.totalPlatformPercentage = res.data.totalPlatformPercentage;
      }
    },
    error: (err:any) => {
      console.error('Error loading dashboard data from API', err);
    }
  });

  this.teacherService.getInstructorProfile().subscribe({
    next: (res: { data: any; }) => {
      const profile = res.data;
      this.profileImg = profile.profileImageUrl || this.profileImg;
    },
    error: (err:any) => {
      console.error('Error loading profile from API', err);
    }
  });
  
     }
  
  
  
  
     changeLang(): void {
      const htmlTag = document.documentElement;
      let lang = localStorage.getItem('lang');
      if (lang === 'ar') {
        htmlTag.setAttribute('dir', 'ltr');
        htmlTag.setAttribute('lang', 'en');
        this._translocoService.setActiveLang('en');
        this.langService.setLang('en');
      } else {
        htmlTag.setAttribute('dir', 'rtl');
        htmlTag.setAttribute('lang', 'ar');
        this._translocoService.setActiveLang('ar');
        this.langService.setLang('ar');
      }
      console.log('active lang', lang);
    }
  
    setLogo(): void {
      const lang = localStorage.getItem('lang');
      this.logoSrc = lang === 'ar' ? 'assets/Logo AR.png' : 'assets/Logo EN.png';
    }
  
  
  
  
   // تغيير القيم عند اختيار كورس معين
   changeCourse(courseKey: string) {
    this.selectedCourseKey = courseKey; // الاحتفاظ بالمفتاح الفعلي
    this.selectedCourse$ = this.translocoService.selectTranslate(courseKey);
  
  }
  

  

  
  
  
    // تعيين التبويب النشط
    setActiveTab(tab: string) {
      this.activeTab = tab;
    }
  
  
    logout() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
