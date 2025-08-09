import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoPipe, TranslocoService } from '@ngneat/transloco';
import { LangService } from '../services/lang.service';
import { AuthService } from '../services/auth.service';
import { TeacherService } from '../services/teacher.service';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
    selector: 'app-coupons',
    standalone: true,
    templateUrl: './coupons.component.html',
    styleUrls: ['./coupons.component.css'],
    imports: [CommonModule, TranslocoPipe, RouterLink, FormsModule, ReactiveFormsModule, SidebarComponent]
})
export class CouponsComponent implements OnInit {

  // User & Profile Properties
  fullName: string = '';
  firstLetter: string = '';
  email: string = '';
  profileImg: string = '../../assets/download.jfif';
  logoSrc: string = 'assets/Logo AR.png';

  // Coupon Management Properties
  coupons: any[] = [];
  showCreateForm = false;
  couponForm: FormGroup;
  isEditing = false;
  editingCouponId: string | null = null;

  _translocoService = inject(TranslocoService);

  constructor(
    private langService: LangService,
    private authService: AuthService,
    private router: Router,
    private teacherService: TeacherService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.couponForm = this.fb.group({
      name: ['', Validators.required],
      discount: ['', [Validators.required, Validators.min(1), Validators.max(100)]]
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.langService.lang$.subscribe((lang: string) => {
      this.logoSrc = lang === 'ar' ? 'assets/Logo AR.png' : 'assets/Logo EN.png';
    });

    const user = this.authService.getUserData();
    this.fullName = user?.fullName || '';
    this.email = user?.email || '';
    this.firstLetter = this.fullName.charAt(0).toUpperCase();

    this.teacherService.getInstructorProfile().subscribe({
      next: (res: any) => {
        const profile = res.data;
        this.profileImg = profile.profileImageUrl || this.profileImg;
      },
      error: (err: any) => {
        console.error('Error loading profile from API', err);
      }
    });

    this.loadCoupons();
  }

  // --- Coupon Management Methods ---

  loadCoupons() {
    const token = this.authService.getToken();
    if (!token) return;

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

        this.http.get('https://api.makhekh.com/api/coupons', { headers }).subscribe({
      next: (res: any) => {
        if (res.success && Array.isArray(res.data)) {
          this.coupons = res.data.map((coupon: any) => ({
            id: coupon.id,
            name: coupon.code,
            discount: coupon.value,
            active: coupon.isValid
          }));
        }
      },
      error: (err) => console.error('Error loading coupons', err)
    });
  }

  toggleCreateForm() {
    this.showCreateForm = !this.showCreateForm;
    this.isEditing = false;
    this.editingCouponId = null;
    this.couponForm.reset();
  }

  cancelForm() {
    this.showCreateForm = false;
    this.isEditing = false;
    this.editingCouponId = null;
    this.couponForm.reset();
  }

  saveCoupon() {
    if (this.couponForm.invalid) {
      return;
    }

    const token = this.authService.getToken();
    if (!token) {
      console.error('Authentication token not found.');
      return;
    }

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

    if (this.isEditing && this.editingCouponId) {
      // --- EDIT LOGIC ---
      const couponToUpdate = this.coupons.find(c => c.id === this.editingCouponId);
      if (!couponToUpdate) {
        console.error('Coupon to edit not found in local list.');
        return;
      }

      const body = {
        code: this.couponForm.value.name,
        value: this.couponForm.value.discount,
        isValid: couponToUpdate.active // Preserve the current active status
      };

      const url = `https://api.makhekh.com/api/coupons/${this.editingCouponId}`;

      this.http.put(url, body, { headers }).subscribe({
        next: (res: any) => {
          if (res.success && res.data) {
            console.log('Coupon updated successfully:', res.data);
            const index = this.coupons.findIndex(c => c.id === this.editingCouponId);
            if (index > -1) {
              // The local array uses 'name', 'discount', 'active'. Map the API response to these.
              // Update coupon in local array directly from form for immediate UI feedback
              this.coupons[index].name = this.couponForm.value.name;
              this.coupons[index].discount = this.couponForm.value.discount;
            }
            this.cancelForm();
          } else {
            console.error('Failed to update coupon:', res.message);
          }
        },
        error: (err) => console.error('API error updating coupon:', err)
      });
    } else {
      // --- CREATE LOGIC ---
      const body = {
        code: this.couponForm.value.name,
        value: this.couponForm.value.discount
      };

      this.http.post('https://api.makhekh.com/api/coupons', body, { headers }).subscribe({
        next: (res: any) => {
          if (res.success && res.data) {
            console.log('Coupon created successfully:', res.data);
            this.coupons.push({
              id: res.data.id,
              name: res.data.code,
              discount: res.data.value,
              active: res.data.isValid
            });
            this.cancelForm();
          } else {
            console.error('Failed to create coupon:', res.message);
          }
        },
        error: (err) => console.error('API error creating coupon:', err)
      });
    }
  }

  editCoupon(coupon: any) {
    this.showCreateForm = true;
    this.isEditing = true;
    this.editingCouponId = coupon.id;
    this.couponForm.setValue({
      name: coupon.name,
      discount: coupon.discount
    });
  }

  deleteCoupon(couponId: string) {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Authentication token not found.');
      return;
    }

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const url = `https://api.makhekh.com/api/coupons/${couponId}`;

    this.http.delete(url, { headers }).subscribe({
      next: () => {
        console.log('Coupon deleted successfully');
        this.coupons = this.coupons.filter(c => c.id !== couponId);
      },
      error: (err) => {
        console.error('API error deleting coupon:', err);
      }
    });
  }

  toggleCouponStatus(coupon: any) {
    const token = this.authService.getToken();
    if (!token) {
      console.error('Authentication token not found.');
      return;
    }

    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
        const url = `https://api.makhekh.com/api/coupons/${coupon.id}/toggle`;

    this.http.patch(url, {}, { headers }).subscribe({
      next: (res: any) => {
        if (res.success && res.data) {
          console.log('Coupon status toggled successfully:', res.data);
          // Update the local coupon's status to reflect the change from the API
          coupon.active = res.data.isValid;
        } else {
          console.error('Failed to toggle coupon status:', res.message);
        }
      },
      error: (err) => {
        console.error('API error toggling coupon status:', err);
      }
    });
  }

  // --- Existing Methods ---

  setLogo(): void {
    const lang = localStorage.getItem('lang');
    this.logoSrc = lang === 'ar' ? 'assets/Logo AR.png' : 'assets/Logo EN.png';
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
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/coupons/logOut']);
  }
}
