import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-courses-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './courses-home.component.html',
  styleUrl: './courses-home.component.css'
})
export class CoursesHomeComponent implements OnInit {
  categories: any[] = [];
  @Output() categorySelected = new EventEmitter<string>();
  selectedCategoryName: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCategories();
  }

  onSelectCategory(name: string) {
    this.selectedCategoryName = name;
    this.categorySelected.emit(name);
  }

  getCategories() {
    this.http.get<any>('https://api.makhekh.com/api/Categories').subscribe({
      next: (res) => {
        const data = Array.isArray(res?.data) ? res.data : (Array.isArray(res) ? res : []);
        this.categories = data;
        console.log('[CoursesHome] categories:', this.categories);
      },
      error: (err) => {
        console.error('[CoursesHome] Categories ERROR:', err.status, err);
      }
    });
  }
}
