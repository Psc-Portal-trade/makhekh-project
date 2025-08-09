import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SecondHomeComponent } from './second-home/second-home.component';
import { AboutUsInstructorComponent } from './about/about-us-instructor/about-us-instructor.component';
import { DevelopmetCourseComponent } from './second-home/courses/developmet-course/developmet-course.component';
import { FinanceCourseComponent } from './second-home/courses/finance-course/finance-course.component';
import { ItCourseComponent } from './second-home/courses/it-course/it-course.component';
import { DesignCourseComponent } from './second-home/courses/design-course/design-course.component';
import { BusinessCourseComponent } from './second-home/courses/business-course/business-course.component';
import { MarketingCourseComponent } from './second-home/courses/marketing-course/marketing-course.component';
import { HealthCourseComponent } from './second-home/courses/health-course/health-course.component';
import { OfferCourseComponent } from './second-home/courses/offer-course/offer-course.component';
import { ShippingCartComponent } from './shipping-cart/shipping-cart.component';
import { CartComponent } from './cart/cart.component';
import { WishlistStartComponent } from './wishlist-start/wishlist-start.component';
import { WishlistEndComponent } from './wishlist-end/wishlist-end.component';
import { InstructorProfileComponent } from './instructor-profile/instructor-profile.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { InstructorSignupComponent } from './instructor-signup/instructor-signup.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { TestComponent } from './test/test.component';
import { CourseHeaderComponent } from './course-header/course-header.component';
import { QaComponent } from './qa/qa.component';
import { MessagesComponent } from './messages/messages.component';
import { StudentSuggestionsComponent } from './student-suggestions/student-suggestions.component';
import { OverviewComponent } from './overview/overview.component';
import { StudentsComponent } from './students/students.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CoursDetalisComponent } from './cours-detalis/cours-detalis.component';
import { ExploreCoursesHomeComponent } from './explore-courses-home/explore-courses-home.component';
import { DevelopmentCoursesComponent } from './explore-courses-home/courses-home/development-courses/development-courses.component';
import { FinanceCoursesComponent } from './explore-courses-home/courses-home/finance-courses/finance-courses.component';
import { ItCoursesComponent } from './explore-courses-home/courses-home/it-courses/it-courses.component';
import { DesignCoursesComponent } from './explore-courses-home/courses-home/design-courses/design-courses.component';
import { BusinessCoursesComponent } from './explore-courses-home/courses-home/business-courses/business-courses.component';
import { HealthCoursesComponent } from './explore-courses-home/courses-home/health-courses/health-courses.component';
import { OffergCoursesComponent } from './explore-courses-home/courses-home/offerg-courses/offerg-courses.component';
import { MarkitingCoursesComponent } from './explore-courses-home/courses-home/markiting-courses/markiting-courses.component';
import { CourseInformationComponent } from './course-information/course-information.component';
import { CourseInformationsComponent } from './course-informations/course-informations.component';
import { ViewOverviewComponent } from './view-overview/view-overview.component';
import { ExamComponent } from './exam/exam.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { EditCoursComponent } from './edit-cours/edit-cours.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { CoursePartsComponent } from './course-parts/course-parts.component';
import { CourseReportsComponent } from './course-reports/course-reports.component';
import { CourseExamsComponent } from './course-exams/course-exams.component';
import { CourseExamsResultsComponent } from './course-exams-results/course-exams-results.component';
import { CourseAttachmentsComponent } from './course-attachments/course-attachments.component';
import { CourseExamComponent } from './course-exam/course-exam.component';
import { CourseExamResultComponent } from './course-exam-result/course-exam-result.component';
import { OrdersComponent } from './orders/orders.component';
import { CourseDraftComponent } from './course-draft/course-draft.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ViewAttemptComponent } from './view-attempt/view-attempt.component';
import { StudentsOrdersComponent } from './students-orders/students-orders.component';
import { ExamReportComponent } from './exam-report/exam-report.component';

export const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"register",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"studentHome",component:SecondHomeComponent},
  {path:"explore",component:AboutUsInstructorComponent},
  {path:"shippingCart",component:ShippingCartComponent},
  {path:"cart",component:CartComponent},
  {path:"wishlist",component:WishlistStartComponent},
  {path:"wishedList",component:WishlistEndComponent},
  {path:"instructor-profile",component:InstructorProfileComponent},
  {path:"student-profile",component:StudentProfileComponent},
  {path:"createCoursesDetalis",component:CourseHeaderComponent},
  {path:"my-courses",component:MyCoursesComponent},
  {path:"courseDetails",component:CoursDetalisComponent},
  {path:"explore-courses",component:ExploreCoursesHomeComponent},
  {path:"course-Information",component:CourseInformationComponent},
  {path:"course-Informations",component:CourseInformationsComponent},
  {path:"course-content",component:ViewOverviewComponent},
  {path:"exam",component:ExamComponent},
  {path:"exam-result",component:ExamResultComponent},
  {path:"edit-course",component:EditCoursComponent},
  {path:"create-quiz",component:CreateQuizComponent},
  {path:"quiz",component:QuizComponent},
  {path:"course-parts",component:CoursePartsComponent},
  {path:"course-reports",component:CourseReportsComponent},
  {path:"course-exams",component:CourseExamsComponent},
  {path:"course-exams-results",component:CourseExamsResultsComponent},
  {path:"course-attachments",component:CourseAttachmentsComponent},
  {path:"course-exam",component:CourseExamComponent},
  {path:"course-exam-result",component:CourseExamResultComponent},
{path:"course-draft",component:CourseDraftComponent},
{path:"view-attempt",component:ViewAttemptComponent},
{path:"coupons",component:CouponsComponent},
{path:"coupons/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"students-orders/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"exam-report/:quizId",component:ExamReportComponent},















// ----------------  courses  before login -------------------

{path:"development-courses",component:DevelopmentCoursesComponent},
{path:"finance-courses",component:FinanceCoursesComponent},
{path:"it-courses",component:ItCoursesComponent},
{path:"design-courses",component:DesignCoursesComponent},
{path:"business-courses",component:BusinessCoursesComponent},
{path:"health-courses",component:HealthCoursesComponent},
{path:"offer-courses",component:OffergCoursesComponent},
{path:"marketing-courses",component:MarkitingCoursesComponent},



// ----------------  courses  after login -------------------

{path:"development-course",component:DevelopmetCourseComponent},
{path:"finance-course",component:FinanceCourseComponent},
{path:"it-course",component:ItCourseComponent},
{path:"design-course",component:DesignCourseComponent},
{path:"business-course",component:BusinessCourseComponent},
{path:"marketing-course",component:MarketingCourseComponent},
{path:"health-course",component:HealthCourseComponent},
{path:"offer-course",component:OfferCourseComponent},



// ----------------  end courses -------------------



//  *********** HOME ***********
  {path:"home/about",redirectTo:"about",pathMatch:"full"},
  {path:"home/register",redirectTo:"register",pathMatch:"full"},
  {path:"home/login",redirectTo:"login",pathMatch:"full"},
  {path:"home/home",redirectTo:"home",pathMatch:"full"},
  {path:"home/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
  {path:"home/wishlist",redirectTo:"wishlist",pathMatch:"full"},
  {path:"home/explore-courses",redirectTo:"explore-courses",pathMatch:"full"},
  {path:"home/students-orders",redirectTo:"students-orders",pathMatch:"full"},
  {path:"home/coupons",redirectTo:"coupons",pathMatch:"full"},
  {path:"home/course-Informations",redirectTo:"explore-courses",pathMatch:"full"},






  {path:"home/development-courses",redirectTo:"development-courses",pathMatch:"full"},


//  *********** ABOUT ***********

  {path:"about/home",redirectTo:"home",pathMatch:"full"},
  {path:"about/register",redirectTo:"register",pathMatch:"full"},
  {path:"about/login",redirectTo:"login",pathMatch:"full"},
  {path:"about/about",redirectTo:"about",pathMatch:"full"},
  {path:"about/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
  {path:"about/wishlist",redirectTo:"wishlist",pathMatch:"full"},
  {path:"about/sign-up",component:InstructorSignupComponent},
  {path:"about/explore-courses",redirectTo:"explore-courses",pathMatch:"full"},
  {path:"about/students-orders",redirectTo:"students-orders",pathMatch:"full"},
  {path:"about/coupons",redirectTo:"coupons",pathMatch:"full"},



//  *********** REGISTER ***********
  {path:"register/home",redirectTo:"home",pathMatch:"full"},
  {path:"register/about",redirectTo:"about",pathMatch:"full"},
  {path:"register/login",redirectTo:"login",pathMatch:"full"},
  {path:"register/register",redirectTo:"register",pathMatch:"full"},
  {path:"register/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
  {path:"register/wishlist",redirectTo:"wishlist",pathMatch:"full"},
  {path:"register/explore-courses",redirectTo:"explore-courses",pathMatch:"full"},
  {path:"register/students-orders",redirectTo:"students-orders",pathMatch:"full"},
  {path:"register/coupons",redirectTo:"coupons",pathMatch:"full"},


//  *********** LOGIN ***********
  {path:"login/register",redirectTo:"register",pathMatch:"full"},
  {path:"login/home",redirectTo:"home",pathMatch:"full"},
  {path:"login/about",redirectTo:"about",pathMatch:"full"},
  {path:"login/login",redirectTo:"login",pathMatch:"full"},
  {path:"login/studentHome",redirectTo:"studentHome",pathMatch:"full"},
  {path:"login/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
  {path:"login/wishlist",redirectTo:"wishlist",pathMatch:"full"},
  {path:"login/explore-courses",redirectTo:"explore-courses",pathMatch:"full"},
  {path:"login/students-orders",redirectTo:"students-orders",pathMatch:"full"},
  {path:"login/coupons",redirectTo:"coupons",pathMatch:"full"},


//  *********** CART ***********
{path:"shippingCart/register",redirectTo:"register",pathMatch:"full"},
{path:"shippingCart/home",redirectTo:"home",pathMatch:"full"},
{path:"shippingCart/about",redirectTo:"about",pathMatch:"full"},
{path:"shippingCart/login",redirectTo:"login",pathMatch:"full"},
{path:"shippingCart/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"shippingCart/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
{path:"shippingCart/wishlist",redirectTo:"wishlist",pathMatch:"full"},
{path:"shippingCart/explore-courses",redirectTo:"explore-courses",pathMatch:"full"},
{path:"shippingCart/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"shippingCart/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"shippingCart/logOut",redirectTo:"home",pathMatch:"full"},


//  *********** wishlist ***********
{path:"wishlist/register",redirectTo:"register",pathMatch:"full"},
{path:"wishlist/home",redirectTo:"home",pathMatch:"full"},
{path:"wishlist/about",redirectTo:"about",pathMatch:"full"},
{path:"wishlist/login",redirectTo:"login",pathMatch:"full"},
{path:"wishlist/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"wishlist/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
{path:"wishlist/wishlist",redirectTo:"wishlist",pathMatch:"full"},
{path:"wishlist/explore-courses",redirectTo:"explore-courses",pathMatch:"full"},
{path:"wishlist/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"wishlist/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"wishlist/course-Information",redirectTo:"course-Information",pathMatch:"full"},
{path:"wishlist/logOut",redirectTo:"home",pathMatch:"full"},

// ************* explore-courses ***************

{path:"explore-courses/register",redirectTo:"register",pathMatch:"full"},
{path:"explore-courses/home",redirectTo:"home",pathMatch:"full"},
{path:"explore-courses/about",redirectTo:"about",pathMatch:"full"},
{path:"explore-courses/login",redirectTo:"login",pathMatch:"full"},
{path:"explore-courses/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"explore-courses/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
{path:"explore-courses/wishlist",redirectTo:"wishlist",pathMatch:"full"},
{path:"explore-courses/explore-courses",redirectTo:"explore-courses",pathMatch:"full"},
{path:"explore-courses/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"explore-courses/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"explore-courses/logOut",redirectTo:"home",pathMatch:"full"},



// ************* course-Informations ***************

{path:"course-Informations/register",redirectTo:"register",pathMatch:"full"},
{path:"course-Informations/home",redirectTo:"home",pathMatch:"full"},
{path:"course-Informations/about",redirectTo:"about",pathMatch:"full"},
{path:"course-Informations/login",redirectTo:"login",pathMatch:"full"},
{path:"course-Informations/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-Informations/shippingCart",redirectTo:"shippingCart",pathMatch:"full"},
{path:"course-Informations/wishlist",redirectTo:"wishlist",pathMatch:"full"},
{path:"course-Informations/explore-courses",redirectTo:"explore-courses",pathMatch:"full"},
{path:"course-Informations/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-Informations/my-courses",redirectTo:"my-courses",pathMatch:"full"},




// ********** courses at home ************


{path:"explore-courses/development-courses",redirectTo:"development-courses",pathMatch:"full"},
{path:"explore-courses/finance-courses",redirectTo:"finance-courses",pathMatch:"full"},
{path:"explore-courses/it-courses",redirectTo:"it-courses",pathMatch:"full"},
{path:"explore-courses/design-courses",redirectTo:"design-courses",pathMatch:"full"},
{path:"explore-courses/business-courses",redirectTo:"business-courses",pathMatch:"full"},
{path:"explore-courses/marketing-courses",redirectTo:"marketing-courses",pathMatch:"full"},
{path:"explore-courses/health-courses",redirectTo:"health-courses",pathMatch:"full"},
{path:"explore-courses/offer-courses",redirectTo:"offer-courses",pathMatch:"full"},
{path:"explore-courses/logOut",redirectTo:"home",pathMatch:"full"},
{path:"explore-courses/students-orders",redirectTo:"students-orders",pathMatch:"full"},




















//  *********** Student Home ***********
{path:"studentHome/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"studentHome/explore",redirectTo:"explore",pathMatch:"full"},
{path:"studentHome/cart",redirectTo:"cart",pathMatch:"full"},
{path:"studentHome/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"studentHome/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"studentHome/logOut",redirectTo:"home",pathMatch:"full"},
{path:"studentHome/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"studentHome/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"studentHome/course-Information",redirectTo:"course-Information",pathMatch:"full"},
{path:"studentHome/course-content",redirectTo:"course-content",pathMatch:"full"},
{path:"studentHome/students-orders",redirectTo:"students-orders",pathMatch:"full"},

{path:"studentHome/logOut",redirectTo:"home",pathMatch:"full"},



{path:"studentHome/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"studentHome/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"studentHome/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"studentHome/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"studentHome/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"studentHome/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"studentHome/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"studentHome/offer-course",redirectTo:"offer-course",pathMatch:"full"},



//  *********** instructor about ***********

{path:"explore/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"explore/explore",redirectTo:"explore",pathMatch:"full"},
{path:"explore/cart",redirectTo:"cart",pathMatch:"full"},
{path:"explore/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"explore/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"explore/logOut",redirectTo:"home",pathMatch:"full"},
{path:"explore/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"explore/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"explore/course-Information",redirectTo:"course-Information",pathMatch:"full"},
{path:"explore/logOut",redirectTo:"home",pathMatch:"full"},
{path:"explore/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"explore/coupons",redirectTo:"coupons",pathMatch:"full"},



{path:"explore/development-course",redirectTo:"development-course",pathMatch:"full"},
{path:"explore/finance-course",redirectTo:"finance-course",pathMatch:"full"},
{path:"explore/it-course",redirectTo:"it-course",pathMatch:"full"},
{path:"explore/design-course",redirectTo:"design-course",pathMatch:"full"},
{path:"explore/business-course",redirectTo:"business-course",pathMatch:"full"},
{path:"explore/marketing-course",redirectTo:"marketing-course",pathMatch:"full"},
{path:"explore/health-course",redirectTo:"health-course",pathMatch:"full"},
{path:"explore/offer-course",redirectTo:"offer-course",pathMatch:"full"},




//  *********** Cart Signed ***********

{path:"cart/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"cart/explore",redirectTo:"explore",pathMatch:"full"},
{path:"cart/cart",redirectTo:"cart",pathMatch:"full"},
{path:"cart/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"cart/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"cart/logOut",redirectTo:"home",pathMatch:"full"},
{path:"cart/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"cart/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"cart/logOut",redirectTo:"home",pathMatch:"full"},
{path:"cart/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"cart/coupons",redirectTo:"coupons",pathMatch:"full"},




//  *********** wished Signed ***********

{path:"wishedList/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"wishedList/explore",redirectTo:"explore",pathMatch:"full"},
{path:"wishedList/cart",redirectTo:"cart",pathMatch:"full"},
{path:"wishedList/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"wishedList/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"wishedList/logOut",redirectTo:"home",pathMatch:"full"},
{path:"wishedList/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"wishedList/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"wishedList/course-Information",redirectTo:"course-Information",pathMatch:"full"},
{path:"wishedList/logOut",redirectTo:"home",pathMatch:"full"},
{path:"wishedList/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"wishedList/coupons",redirectTo:"coupons",pathMatch:"full"},

//  *********** my-courses ***********

{path:"my-courses/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"my-courses/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"my-courses/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"my-courses/explore",redirectTo:"explore",pathMatch:"full"},
{path:"my-courses/cart",redirectTo:"cart",pathMatch:"full"},
{path:"my-courses/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"my-courses/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"my-courses/logOut",redirectTo:"home",pathMatch:"full"},
{path:"my-courses/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"my-courses/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"my-courses/course-content",redirectTo:"course-content",pathMatch:"full"},
{path:"my-courses/exam",redirectTo:"exam",pathMatch:"full"},
{path:"my-courses/course-parts",redirectTo:"course-parts",pathMatch:"full"},

//  *********** exam ***********

{path:"exam/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"exam/exam-result",redirectTo:"exam-result",pathMatch:"full"},
{path:"exam/logOut",redirectTo:"home",pathMatch:"full"},
{path:"exam/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"exam/coupons",redirectTo:"coupons",pathMatch:"full"},

//  *********** exam-result ***********

{path:"exam-result/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"exam-result/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"exam-result/explore",redirectTo:"explore",pathMatch:"full"},
{path:"exam-result/cart",redirectTo:"cart",pathMatch:"full"},
{path:"exam-result/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"exam-result/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"exam-result/logOut",redirectTo:"home",pathMatch:"full"},
{path:"exam-result/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"exam-result/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"exam-result/coupons",redirectTo:"coupons",pathMatch:"full"},


//  *********** course-Information ***********


{path:"course-Information/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-Information/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-Information/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-Information/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-Information/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"course-Information/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-Information/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"course-Information/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-Information/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"course-Information/coupons",redirectTo:"coupons",pathMatch:"full"},



//  *********** student profile ***********




{path:"student-profile/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"student-profile/explore",redirectTo:"explore",pathMatch:"full"},
{path:"student-profile/cart",redirectTo:"cart",pathMatch:"full"},
{path:"student-profile/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"student-profile/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"student-profile/logOut",redirectTo:"home",pathMatch:"full"},
{path:"student-profile/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"student-profile/my-courses",redirectTo:"my-courses",pathMatch:"full"},





//  *********** students-orders ***********




{path:"students-orders/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"students-orders/explore",redirectTo:"explore",pathMatch:"full"},
{path:"students-orders/cart",redirectTo:"cart",pathMatch:"full"},
{path:"students-orders/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"students-orders/logOut",redirectTo:"home",pathMatch:"full"},
{path:"students-orders/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"students-orders/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"students-orders/coupons",redirectTo:"coupons",pathMatch:"full"},





//  *********** instructor profile ***********

{path:"instructor-profile/studentHome",redirectTo:"studentHome",pathMatch:"full"},

{path:"instructor-profile/explore",redirectTo:"explore",pathMatch:"full"},
{path:"instructor-profile/cart",redirectTo:"cart",pathMatch:"full"},
{path:"instructor-profile/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"instructor-profile/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"instructor-profile/logOut",redirectTo:"home",pathMatch:"full"},
{path:"instructor-profile/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"instructor-profile/create-course",component:CreateCourseComponent},
{path:"instructor-profile/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"instructor-profile/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"instructor-profile/create-course/course/exit",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/create-course/course",component:TestComponent},
{path:"instructor-profile/create-course/course/createCoursesDetalis",redirectTo:"createCoursesDetalis",pathMatch:"full"},
{path:"instructor-profile/create-course/coupons",redirectTo:"coupons",pathMatch:"full"},




{path:"createCoursesDetalis/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"createCoursesDetalis/courseDetails",redirectTo:"courseDetails",pathMatch:"full"},
{path:"instructor-profile/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"instructor-profile/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},





{path:"courseDetails/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"courseDetails/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"courseDetails/explore",redirectTo:"explore",pathMatch:"full"},
{path:"courseDetails/cart",redirectTo:"cart",pathMatch:"full"},
{path:"courseDetails/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"courseDetails/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"courseDetails/logOut",redirectTo:"home",pathMatch:"full"},
{path:"courseDetails/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"courseDetails/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},






//  *********** course-content ***********




{path:"course-content/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-content/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-content/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-content/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-content/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-content/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"course-content/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-content/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},

{path:"course-content/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"course-content/coupons",redirectTo:"coupons",pathMatch:"full"},



//  *********** course-parts ***********




{path:"course-parts/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-parts/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-parts/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-parts/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-parts/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-parts/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"course-parts/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-parts/course-exams",redirectTo:"course-exams",pathMatch:"full"},
{path:"course-parts/course-exams-results",redirectTo:"course-exams-results",pathMatch:"full"},
{path:"course-parts/course-attachments",redirectTo:"course-attachments",pathMatch:"full"},
{path:"course-parts/course-reports",redirectTo:"course-reports",pathMatch:"full"},
{path:"course-parts/course-content",redirectTo:"course-content",pathMatch:"full"},
{path:"course-parts/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"course-parts/coupons",redirectTo:"coupons",pathMatch:"full"},



//  *********** course-exams ***********




{path:"course-exams/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-exams/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-exams/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-exams/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-exams/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-exams/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"course-exams/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-exams/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},
{path:"course-exams/course-exams-results",redirectTo:"course-exams-results",pathMatch:"full"},
{path:"course-exams/cours-exam",redirectTo:"cours-exam",pathMatch:"full"},
{path:"course-exams/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"course-exams/coupons",redirectTo:"coupons",pathMatch:"full"},

//  *********** course-exam ***********




{path:"course-exam/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-exam/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-exam/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-exam/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-exam/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-exam/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"course-exam/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-exam/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},
{path:"course-exam/course-exams-results",redirectTo:"course-exams-results",pathMatch:"full"},
{path:"course-exam/cours-exam",redirectTo:"cours-exam",pathMatch:"full"},
{path:"course-exam/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"course-exam/coupons",redirectTo:"coupons",pathMatch:"full"},








//  *********** course-exams-results ***********




{path:"course-exams-results/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-exams-results/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-exams-results/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-exams-results/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-exams-results/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-exams-results/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"course-exams-results/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-exams-results/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},
{path:"course-exams-results/course-exam-result",redirectTo:"course-exam-result",pathMatch:"full"},
{path:"course-exams-results/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"course-exams-results/coupons",redirectTo:"coupons",pathMatch:"full"},

//  *********** course-exams-result ***********

{path:"course-exam-result/instructor-profile/create-course",redirectTo:"create-course",pathMatch:"full"},
{path:"course-exam-result/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-exam-result/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-exam-result/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-exam-result/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-exam-result/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-exam-result/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"course-exam-result/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-exam-result/course-exams-results",redirectTo:"course-exams-results",pathMatch:"full"},
{path:"course-exam-result/course-exams",redirectTo:"course-exams",pathMatch:"full"},
{path:"course-exam-result/view-attempt",redirectTo:"view-attempt",pathMatch:"full"},
{path:"course-exam-result/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"course-exam-result/coupons",redirectTo:"coupons",pathMatch:"full"},

//  *********** view-attempt ***********


{path:"view-attempt/instructor-profile/create-course",redirectTo:"create-course",pathMatch:"full"},
{path:"view-attempt/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"view-attempt/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"view-attempt/explore",redirectTo:"explore",pathMatch:"full"},
{path:"view-attempt/cart",redirectTo:"cart",pathMatch:"full"},
{path:"view-attempt/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"view-attempt/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"view-attempt/logOut",redirectTo:"home",pathMatch:"full"},
{path:"view-attempt/course-exams-results",redirectTo:"course-exams-results",pathMatch:"full"},
{path:"view-attempt/course-exams",redirectTo:"course-exams",pathMatch:"full"},
{path:"view-attempt/course-exam-result",redirectTo:"course-exam-result",pathMatch:"full"},
{path:"view-attempt/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"view-attempt/coupons",redirectTo:"coupons",pathMatch:"full"},















//  *********** course-attachments ***********




{path:"course-attachments/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-attachments/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-attachments/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-attachments/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-attachments/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-attachments/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"course-attachments/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"course-attachments/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-attachments/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},


//  *********** course-reports ***********




{path:"course-reports/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-reports/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-reports/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-reports/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-reports/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-reports/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"course-reports/student-profile",redirectTo:"student-profile",pathMatch:"full"},
{path:"course-reports/logOut",redirectTo:"home",pathMatch:"full"},
{path:"course-reports/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},
{path:"course-reports/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"course-reports/coupons",redirectTo:"coupons",pathMatch:"full"},







{path:"instructor-profile/qa",redirectTo:"qa",pathMatch:"full"},
{path:"instructor-profile/messages",redirectTo:"messages",pathMatch:"full"},
{path:"instructor-profile/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"instructor-profile/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"instructor-profile/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},

{path:"instructor-profile/overview",redirectTo:"overview",pathMatch:"full"},
{path:"instructor-profile/students",redirectTo:"students",pathMatch:"full"},
{path:"instructor-profile/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"instructor-profile/orders",redirectTo:"orders",pathMatch:"full"},


{path:"qa",component:QaComponent},
{path:"messages",component:MessagesComponent},
{path:"student-suggestions",component:StudentSuggestionsComponent},

{path:"overview",component:OverviewComponent},
{path:"students",component:StudentsComponent},
{path:"reviews",component:ReviewsComponent},
{path:"orders",component:OrdersComponent},
{ path: 'students-orders', component: StudentsOrdersComponent },





//  *********** create-course***********



{path:"instructor-profile/create-course/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"instructor-profile/create-course/qa",redirectTo:"qa",pathMatch:"full"},
{path:"instructor-profile/create-course/messages",redirectTo:"messages",pathMatch:"full"},
{path:"instructor-profile/create-course/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"instructor-profile/create-course/overview",redirectTo:"overview",pathMatch:"full"},
{path:"instructor-profile/create-course/students",redirectTo:"students",pathMatch:"full"},
{path:"instructor-profile/create-course/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"instructor-profile/create-course/orders",redirectTo:"orders",pathMatch:"full"},

{path:"instructor-profile/create-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"instructor-profile/create-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"instructor-profile/create-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"instructor-profile/create-course/edit-course",redirectTo:"edit-course",pathMatch:"full"},
{path:"instructor-profile/create-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"instructor-profile/create-course/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},
{path:"instructor-profile/create-course/course-draft",redirectTo:"course-draft",pathMatch:"full"},







//  *********** coupons***********



{path:"coupons/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"coupons/qa",redirectTo:"qa",pathMatch:"full"},
{path:"coupons/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},

{path:"coupons/messages",redirectTo:"messages",pathMatch:"full"},
{path:"coupons/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"coupons/overview",redirectTo:"overview",pathMatch:"full"},
{path:"coupons/students",redirectTo:"students",pathMatch:"full"},
{path:"coupons/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"coupons/orders",redirectTo:"orders",pathMatch:"full"},
{path:"coupons/logOut",redirectTo:"home",pathMatch:"full"},
{path:"coupons/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"coupons/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"coupons/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"coupons/edit-course",redirectTo:"edit-course",pathMatch:"full"},
{path:"coupons/logOut",redirectTo:"home",pathMatch:"full"},
{path:"coupons/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},
{path:"coupons/course-draft",redirectTo:"course-draft",pathMatch:"full"},






// drafts

{path:"course-draft/instructor-profile/create-course",redirectTo:"create-course",pathMatch:"full"},
{path:"course-draft/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"course-draft/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"course-draft/explore",redirectTo:"explore",pathMatch:"full"},
{path:"course-draft/cart",redirectTo:"cart",pathMatch:"full"},
{path:"course-draft/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"course-draft/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"course-draft/logOut",redirectTo:"home",pathMatch:"full"},




// edit courses

{path:"edit-course/instructor-profile/create-course",redirectTo:"create-course",pathMatch:"full"},
{path:"edit-course/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"edit-course/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"edit-course/explore",redirectTo:"explore",pathMatch:"full"},
{path:"edit-course/cart",redirectTo:"cart",pathMatch:"full"},
{path:"edit-course/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"edit-course/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"edit-course/logOut",redirectTo:"home",pathMatch:"full"},
{path:"edit-course/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},

// {path:"edit-course/student-profile",redirectTo:"student-profile",pathMatch:"full"},





//  *********** QA ***********


{path:"qa/qa",redirectTo:"qa",pathMatch:"full"},
{path:"qa/messages",redirectTo:"messages",pathMatch:"full"},
{path:"qa/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"qa/overview",redirectTo:"overview",pathMatch:"full"},
{path:"qa/students",redirectTo:"students",pathMatch:"full"},
{path:"qa/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"qa/orders",redirectTo:"orders",pathMatch:"full"},

{path:"qa/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"qa/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"qa/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"qa/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"qa/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"qa/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"qa/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},


//  *********** messages ***********


{path:"messages/messages",redirectTo:"messages",pathMatch:"full"},
{path:"messages/qa",redirectTo:"qa",pathMatch:"full"},
{path:"messages/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"messages/overview",redirectTo:"overview",pathMatch:"full"},
{path:"messages/students",redirectTo:"students",pathMatch:"full"},
{path:"messages/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"messages/orders",redirectTo:"orders",pathMatch:"full"},

{path:"messages/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"messages/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"messages/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"messages/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"messages/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"messages/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"messages/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},


//  *********** student-suggestions ***********



{path:"student-suggestions/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"student-suggestions/messages",redirectTo:"messages",pathMatch:"full"},
{path:"student-suggestions/qa",redirectTo:"qa",pathMatch:"full"},
{path:"student-suggestions/overview",redirectTo:"overview",pathMatch:"full"},
{path:"student-suggestions/students",redirectTo:"students",pathMatch:"full"},
{path:"student-suggestions/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"student-suggestions/orders",redirectTo:"orders",pathMatch:"full"},

{path:"student-suggestions/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"student-suggestions/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"student-suggestions/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"student-suggestions/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"student-suggestions/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"student-suggestions/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"student-suggestions/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},



//  *********** overview ***********




{path:"overview/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"overview/messages",redirectTo:"messages",pathMatch:"full"},
{path:"overview/qa",redirectTo:"qa",pathMatch:"full"},
{path:"overview/overview",redirectTo:"overview",pathMatch:"full"},
{path:"overview/students",redirectTo:"students",pathMatch:"full"},
{path:"overview/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"overview/orders",redirectTo:"orders",pathMatch:"full"},

{path:"overview/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"overview/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"overview/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"overview/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"overview/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"overview/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"overview/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},



//  *********** students ***********




{path:"students/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"students/messages",redirectTo:"messages",pathMatch:"full"},
{path:"students/qa",redirectTo:"qa",pathMatch:"full"},
{path:"students/overview",redirectTo:"overview",pathMatch:"full"},
{path:"students/students",redirectTo:"students",pathMatch:"full"},
{path:"students/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"students/orders",redirectTo:"orders",pathMatch:"full"},

{path:"students/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"students/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"students/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"students/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"students/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"students/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"students/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},




//  *********** reviews ***********


{path:"reviews/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"reviews/messages",redirectTo:"messages",pathMatch:"full"},
{path:"reviews/qa",redirectTo:"qa",pathMatch:"full"},
{path:"reviews/overview",redirectTo:"overview",pathMatch:"full"},
{path:"reviews/students",redirectTo:"students",pathMatch:"full"},
{path:"reviews/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"reviews/orders",redirectTo:"orders",pathMatch:"full"},

{path:"reviews/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"reviews/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"reviews/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"reviews/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"reviews/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},
{path:"reviews/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"reviews/coupons",redirectTo:"coupons",pathMatch:"full"},



//  *********** orders ***********


{path:"orders/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"orders/messages",redirectTo:"messages",pathMatch:"full"},
{path:"orders/qa",redirectTo:"qa",pathMatch:"full"},
{path:"orders/overview",redirectTo:"overview",pathMatch:"full"},
{path:"orders/students",redirectTo:"students",pathMatch:"full"},
{path:"orders/orders",redirectTo:"orders",pathMatch:"full"},
{path:"orders/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"orders/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"orders/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"orders/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"orders/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"orders/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},
{path:"orders/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"orders/coupons",redirectTo:"coupons",pathMatch:"full"},

//  *********** create-quiz ***********


{path:"create-quiz/student-suggestions",redirectTo:"student-suggestions",pathMatch:"full"},
{path:"create-quiz/messages",redirectTo:"messages",pathMatch:"full"},
{path:"create-quiz/qa",redirectTo:"qa",pathMatch:"full"},
{path:"create-quiz/overview",redirectTo:"overview",pathMatch:"full"},
{path:"create-quiz/students",redirectTo:"students",pathMatch:"full"},
{path:"create-quiz/reviews",redirectTo:"reviews",pathMatch:"full"},
{path:"create-quiz/orders",redirectTo:"orders",pathMatch:"full"},

{path:"create-quiz/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"create-quiz/create-course",redirectTo:"instructor-profile/create-course",pathMatch:"full"},
{path:"create-quiz/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"create-quiz/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"create-quiz/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},
{path:"create-quiz/students-orders",redirectTo:"students-orders",pathMatch:"full"},
{path:"create-quiz/coupons",redirectTo:"coupons",pathMatch:"full"},
{path:"create-quiz/quiz",redirectTo:"quiz",pathMatch:"full"},

{path:"quiz/create-quiz",redirectTo:"create-quiz",pathMatch:"full"},




{path:"create-quiz/instructor-profile/create-course",redirectTo:"create-course",pathMatch:"full"},
{path:"create-quiz/my-courses",redirectTo:"my-courses",pathMatch:"full"},
{path:"create-quiz/studentHome",redirectTo:"studentHome",pathMatch:"full"},
{path:"create-quiz/explore",redirectTo:"explore",pathMatch:"full"},
{path:"create-quiz/cart",redirectTo:"cart",pathMatch:"full"},
{path:"create-quiz/wishedList",redirectTo:"wishedList",pathMatch:"full"},
{path:"create-quiz/instructor-profile",redirectTo:"instructor-profile",pathMatch:"full"},
{path:"create-quiz/logOut",redirectTo:"home",pathMatch:"full"},











{path:"instructor-profile/create-course/edit-course",redirectTo:"edit-course",pathMatch:"full"},



  {path:"**",component:NotFoundComponent},

];
