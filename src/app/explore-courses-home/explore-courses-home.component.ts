import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../services/wishlist.service';
import { CartService } from '../services/cart.service';
import { FooterComponent } from "../footer/footer.component";
import { CoursesHomeComponent } from './courses-home/courses-home.component';
import { Router } from '@angular/router';
import { CourseInformationService } from '../services/course-information.service';
import { TranslocoPipe } from '@ngneat/transloco';
import { CourseApiService } from '../services/course-api.service';

@Component({
  selector: 'app-explore-courses-home',
  imports: [NavbarComponent, CoursesHomeComponent, CommonModule, FormsModule, TranslocoPipe],
  templateUrl: './explore-courses-home.component.html',
  styleUrl: './explore-courses-home.component.css'
})
export class ExploreCoursesHomeComponent implements OnInit {





  private _searchQuery: string = ''; // تخزين قيمة البحث داخليًا
  currentPage = 1;
  itemsPerPage = 12;


lectures: {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  averageRating: number;
  enrolledStudentsCount: number;
  price: number;
  currency: string;
  teacherName: string;
  category: string;
  language: string;
  level: number;
  prerequisites: string;
  targetAudience: string;
  type: number;
  isApproved: boolean;
  ratingsCount: number;
  totalDurationHours: number;
  createdAt: string;
  lastUpdatedAt: string | null;
  promoVideolUrl: string;
  isInCart: boolean;
  isInWishlist: boolean;
}[] = [];


selectedCategory: string | null = null;

onCategorySelected(categoryName: string) {
  this.selectedCategory = categoryName;
  this.currentPage = 1; // يرجع لأول صفحة لما الفلتر يتغير
}


  constructor(private cartService: CartService, private wishlistService: WishlistService,private courseInfoService: CourseInformationService, private router: Router,   private courseApiService: CourseApiService,
) {}

ngOnInit() {
  window.scrollTo(0, 0);

this.courseApiService.getAllCourses().subscribe({
  next: (response: any) => {
    this.lectures = response.data.map((course: any) => {
      const sections = course.sections?.map((section: any) => ({
        id: section.id,
        title: section.title,
        description: section.description,
        quizzes: section.quizzes ?? [],
        summaryAttachments: section.summaryAttachments ?? [],
        contentItems: section.contentItems?.map((item: any) => {
          if (item.type === 'Lecture' && item.lecture) {
            return {
              type: 'Lecture',
              id: item.id,
              title: item.title,
              lecture: {
                id: item.lecture.id,
                title: item.lecture.title,
                description: item.lecture.description,
                videoUrl: item.lecture.videoUrl,
                startUrl: item.lecture.startUrl,
                startTime: item.lecture.startTime,
                durationInMinutes: item.lecture.durationInMinutes,
                zoomMeetingId: item.lecture.zoomMeetingId,
                zoomStartUrl: item.lecture.zoomStartUrl,
                zoomJoinUrl: item.lecture.zoomJoinUrl,
                zoomPassword: item.lecture.zoomPassword,
                isInstant: item.lecture.isInstant,
                status: item.lecture.status,
                quizzes: item.lecture.quizzes ?? [],
                summaryAttachments: item.lecture.summaryAttachments ?? []
              }
            };
          } else if (item.type === 'SubSection' && item.subSection) {
            return {
              type: 'SubSection',
              id: item.id,
              title: item.title,
              subSection: {
                id: item.subSection.id,
                title: item.subSection.title,
                lectures: item.subSection.lectures ?? [],
                quizzes: item.subSection.quizzes ?? [],
                summaryAttachments: item.subSection.summaryAttachments ?? []
              }
            };
          } else {
            return null;
          }
        }).filter(Boolean) ?? [],
        lectures: section.lectures ?? [],
        subSections: section.subSections ?? []
      })) ?? [];

      return {
        id: course.id,
        title: course.title,
        description: course.description,
        thumbnailUrl: course.thumbnailUrl,
        averageRating: course.averageRating,
        enrolledStudentsCount: course.enrolledStudentsCount,
        price: course.price,
        currency: course.currency,
        teacherName: course.teacherName,
        category: course.category?.name,
        language: course.language,
        level: course.level,
        prerequisites: course.prerequisites,
        targetAudience: course.targetAudience,
        type: course.type,
        isApproved: course.isApproved,
        ratingsCount: course.ratingsCount,
        totalDurationHours: course.totalDurationHours,
        createdAt: course.createdAt,
        lastUpdatedAt: course.lastUpdatedAt,
        promoVideolUrl: course.promoVideolUrl,
        isInCart: this.cartService.isItemInCart(course.id),
        isInWishlist: this.wishlistService.isItemInList(course.id),
        sections: sections
      };
    });

    console.log("✅ mapped lectures with contentItems:", this.lectures);
  },
  error: (err) => {
    console.error('❌ Error loading courses:', err);
  }
});



}


  goToCourseDetails(course: any) {
    this.courseInfoService.setCourse(course); // تخزين بيانات الكورس عند الضغط عليه
    this.router.navigate(['course-Informations']); // الانتقال إلى صفحة التفاصيل
  }
  addToCart(course: any) {
    this.cartService.addToCart(course);
    course.isInCart = true;
  }

  removeFromCart(course: any) {
    this.cartService.removeFromCart(course.id);
    course.isInCart = false;
  }


  addToWishList(course: any) {
    this.wishlistService.addToList(course);
    course.isInWishList = true;
  }

  removeFromWishList(course: any) {
    this.wishlistService.removeFromList(course.id);
    course.isInWishList = false;
  }

  set searchQuery(value: string) {
    this._searchQuery = value;
    this.currentPage = 1; // إعادة ضبط الصفحة عند تغيير البحث
  }

  get searchQuery(): string {
    return this._searchQuery;
  }
get filteredCourses() {
  return this.lectures.filter(course =>
    (!this.searchQuery || course.title?.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
    (!this.selectedCategory || course.category?.toLowerCase() === this.selectedCategory.toLowerCase())
  );
}



  get paginatedCourses() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredCourses.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  changePage(newPage: number) {
    this.currentPage = newPage;
  }

}

