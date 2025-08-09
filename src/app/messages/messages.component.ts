import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { QaService } from '../services/qa.service';
import { LangService } from '../services/lang.service';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-messages',
  imports: [FormsModule, CommonModule,SidebarComponent,TranslocoPipe,RouterLink],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
 fullName: string = '';
 firstLetter: string = '';
  role: string = '';

  messages = [
    { sender:"ahmed mohamed", subject: "Message 1", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 1", read: false },
    { sender:"rana mohamed", subject: "Message 2", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 2", read: true },
    { sender:"roma mohamed", subject: "Message 3", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 3", read: false },
    { sender:"seif mohamed", subject: "Message 4", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 4", read: true },
    { sender:"ahmed ali", subject: "Message 5", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 5", read: true },
    { sender:"fady mohamed", subject: "Message 6", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 6", read: false },
    { sender:"ahmed mohamed", subject: "Message 7", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 7", read: true },
    { sender:"ahmed ramy", subject: "Message 8", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 8", read: false },
    { sender:"ahmed mohamed", subject: "Message 9", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 9", read: true },
    { sender:"ali mohamed", subject: "Message 10", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 10", read: false },
    { sender:"ahmed hesham", subject: "Message 11", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 11", read: true },
    { sender:"saly mohamed", subject: "Message 12", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 12", read: false },
    { sender:"reham mohamed", subject: "Message 13", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 13", read: true },
    { sender:"ahmed shady", subject: "Message 14", content: "Thank you for joining my course, I hope you will like it and most of all learn a new skill from it. If you have any question about it, don't hesitate to ask! 14", read: false }
];

  showRead: boolean = false;
  showUnread: boolean = false;
  selectedMessage: any = null;
  logoSrc: string = 'assets/Logo AR.png';
  userRole: string = '';
email:string=''

  markAsRead(index: number) {
    this.messages[index].read = true;
    this.selectedMessage = this.messages[index]; // تحديد الرسالة المختارة
    this.showNewMessage = false; // إخفاء نموذج "New Message" عند تحديد رسالة
  }

  // فلترة الرسائل حسب الاختيار
  getFilteredMessages() {
    if (this.showRead && !this.showUnread) {
      return this.messages.filter(msg => msg.read); // عرض الرسائل المقروءة فقط
    } else if (!this.showRead && this.showUnread) {
      return this.messages.filter(msg => !msg.read); // عرض الرسائل غير المقروءة فقط
    }
    return this.messages; // عرض الكل
  }

  messageContent: string = ''; // متغير لحفظ نص الرسالة
  successMessage: string = ''; // رسالة النجاح

  sendMessage() {
    if (this.messageContent.trim().length > 0) {
      this.successMessage = "Message sent successfully!";
      setTimeout(() => this.successMessage = '', 3000); // إخفاء الرسالة بعد 3 ثوانٍ
      this.messageContent = ''; // مسح محتوى الـ textarea بعد الإرسال
    } else {
      alert("Please enter a message before sending!"); // تحذير عند إرسال رسالة فارغة
    }
  }




  showNewMessage: boolean = false;
  newMessage = { recipient: '', content: '' };

  toggleNewMessage() {
    this.showNewMessage = true; // يجعل النموذج يظهر دائمًا عند الضغط على الزر
    this.selectedMessage = null; // إخفاء الرسالة المختارة
  }

  sendNewMessage() {
    if (this.newMessage.recipient.trim() ==="" || this.newMessage.content.trim()==="") {
      alert('Please fill in all fields before sending the message.');
      return;
    }
    console.log('Message Sent:', this.newMessage);
    alert('Message sent successfully!');
    this.newMessage = { recipient: '', content: '' };

  }
  private translocoService = inject(TranslocoService);
  selectedCourse$: Observable<string> = this.translocoService.selectTranslate('AllCourses');
   constructor(private qaService: QaService,private langService: LangService,private authService: AuthService,private router: Router,private teacherService: TeacherService) {
    this.setLogo();


    const userData = this.authService.getUserData();
    if (userData) {
      this.fullName = userData.fullName;
      this.role = userData.role;
  }


   }
   _translocoService = inject(TranslocoService);
profileImg: string = '../../assets/download.jfif';

   ngOnInit() {
    this.selectedCourse$ = this.translocoService.selectTranslate('AllCourses');

    this.langService.lang$.subscribe((lang) => {
      this.logoSrc = lang === 'ar' ? 'assets/Logo AR.png' : 'assets/Logo EN.png';
    });



  const user = this.authService.getUserData(); // هنا بنجيب الداتا من السيرفيس
  this.userRole = user?.userRole || ''; // هنا بنستخرج الرول
  this.fullName = user?.fullName || '';
  this.email = user?.email || '';
this.firstLetter = this.fullName.charAt(0).toUpperCase();



this.teacherService.getInstructorProfile().subscribe({
  next: (res) => {
    const profile = res.data;
    this.profileImg = profile.profileImageUrl || this.profileImg;
  },
  error: (err) => {
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





  changeCourse(courseKey: string) {
    this.selectedCourse$ = this.translocoService.selectTranslate(courseKey);
    console.log(this.selectedCourse$ );
  }
logout() {
  localStorage.removeItem('user');
  this.router.navigate(['home']);
}


}
