import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslocoPipe } from '@ngneat/transloco';

interface Category {
  id: string;
  name: string;
}
interface Course {
  id: string;
  courseTitle: string;
  src: string;
  landingPage: { description: string };
  pricing: { price: number | null; currency?: string | null };
  watched: number;
  rate: number;
  isInCart?: boolean;
  isInWishlist?: boolean;
  categoryId: string;
  createdAt?: string | null;
}

@Component({
  selector: 'app-secondary-section-home',
  standalone: true,
  imports: [CommonModule,  TranslocoPipe, HttpClientModule],
  templateUrl: './secondary-section-home.component.html',
  styleUrl: './secondary-section-home.component.css'
})
export class SecondarySectionHomeComponent implements OnInit {
  private coursesUrl = 'https://api.makhekh.com/api/Courses';
  private catsUrl    = 'https://api.makhekh.com/api/Categories';

  categories: Category[] = [];                // كل الكاتيجوريز من الAPI
  allCourses: Course[] = [];                  // كل الكورسات
  coursesByCategory: Record<string, Course[]> = {}; // تجميع الكورسات حسب الكاتيجوري

  isLoading = false;
  error: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.loadAll();
  }

  private loadAll(): void {
    this.isLoading = true;

    // أولاً: هات الكاتيجوريز
    this.http.get<any>(this.catsUrl).subscribe({
      next: (catsRes) => {
        const rawCats: any[] = Array.isArray(catsRes?.data) ? catsRes.data : (Array.isArray(catsRes) ? catsRes : []);
        this.categories = rawCats.map(c => ({ id: String(c.id), name: String(c.name) }));

        console.log('Loaded Categories (count):', this.categories.length);
        console.table(this.categories);

        // ثانياً: هات الكورسات
        this.http.get<any>(this.coursesUrl).subscribe({
          next: (res) => {
            console.log('RAW /api/Courses response:', res);

            const raw: any[] = Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []);
            console.log('RAW courses (first 5):', raw.slice(0, 5));
            console.table(
              raw.slice(0, 10).map(c => ({
                id: c?.id,
                title: c?.title,
                thumbnailUrl: c?.thumbnailUrl,
                price: c?.price,
                currency: c?.currency,
                categoryId: c?.category?.id,
                categoryName: c?.category?.name
              }))
            );

            this.allCourses = raw.map((c: any) => ({
              id: String(c.id),
              courseTitle: c.title ?? '',
              src: c.thumbnailUrl ?? '',
              landingPage: { description: c.description ?? '' },
              pricing: { price: c.price ?? null, currency: c.currency ?? null },
              watched: Number(c.enrolledStudentsCount ?? 0),
              rate: Number(c.averageRating ?? 0),
              isInCart: false,
              isInWishlist: false,
              categoryId: String(c?.category?.id ?? ''),   // مهم
              createdAt: c.createdAt ?? null
            }));

            console.log('Mapped allCourses (length):', this.allCourses.length);
            console.table(
              this.allCourses.slice(0, 10).map(c => ({
                id: c.id, title: c.courseTitle, price: c.pricing?.price, currency: c.pricing?.currency, categoryId: c.categoryId
              }))
            );

            // تجميع حسب الكاتيجوري (وبعدها قص 6)
            const grouped: Record<string, Course[]> = {};
            for (const course of this.allCourses) {
              if (!course.categoryId) continue;
              (grouped[course.categoryId] ||= []).push(course);
            }
            for (const key of Object.keys(grouped)) {
              grouped[key].sort((a, b) => (b.createdAt ?? '').localeCompare(a.createdAt ?? ''));
              grouped[key] = grouped[key].slice(0, 6);
            }
            this.coursesByCategory = grouped;

            console.log('coursesByCategory keys:', Object.keys(this.coursesByCategory));
            Object.entries(this.coursesByCategory).forEach(([catId, list]) => {
              const catName = this.categories.find(c => c.id === catId)?.name || '(unknown)';
              console.log(`Category ${catName} (${catId}) -> ${list.length} courses`);
            });

            this.isLoading = false;
          },
          error: (err) => {
            console.error('HTTP ERROR /api/Courses:', err);
            this.error = 'Failed to load courses';
            this.isLoading = false;
          }
        });
      },
      error: (err) => {
        console.error('HTTP ERROR /api/Categories:', err);
        this.error = 'Failed to load categories';
        this.isLoading = false;
      }
    });
  }

  goToCourseDetails(course: Course) {
    this.router.navigate(['course-Informations'], { queryParams: { id: course.id } });
  }

  addToCart(course: Course)       { course.isInCart = true;  }
  removeFromCart(course: Course)  { course.isInCart = false; }
  addToWishList(course: Course)   { course.isInWishlist = true; }
  removeFromWishList(course: Course) { course.isInWishlist = false; }
}
