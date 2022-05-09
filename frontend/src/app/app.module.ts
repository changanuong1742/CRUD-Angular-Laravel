import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';
import { HeroDetailComponent } from './screens/hero-detail/hero-detail.component';
import { HeroUnitComponent } from './components/hero-unit/hero-unit.component';
import { GenderPipe } from './pipes/gender.pipe';
import { ClientLayoutComponent } from './screens/client-layout/client-layout.component';
import { HomeComponent } from './screens/home/home.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { AdminLayoutComponent } from './screens/admin-layout/admin-layout.component';
import { DanhMucComponent } from './screens/danh-muc/danh-muc.component';
import { HttpClientModule } from '@angular/common/http';
import { QtDanhMucComponent } from './screens/admin/qt-danh-muc/qt-danh-muc.component';
import { QtTruyenTranhComponent } from './screens/admin/qt-truyen-tranh/qt-truyen-tranh.component';
import { NewQtDanhMucComponent } from './screens/admin/new-qt-danh-muc/new-qt-danh-muc.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditQtDanhMucComponent } from './screens/admin/edit-qt-danh-muc/edit-qt-danh-muc.component';
import { UploadDemoComponent } from './screens/admin/upload-demo/upload-demo.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NewQtTruyenTranhComponent } from './screens/admin/new-qt-truyen-tranh/new-qt-truyen-tranh.component';
import { EditQtTruyenTranhComponent } from './screens/admin/edit-qt-truyen-tranh/edit-qt-truyen-tranh.component';
import { QtTacGiaComponent } from './screens/admin/qt-tac-gia/qt-tac-gia.component';
import { NewQtTacGiaComponent } from './screens/admin/new-qt-tac-gia/new-qt-tac-gia.component';
import { EditQtTacGiaComponent } from './screens/admin/edit-qt-tac-gia/edit-qt-tac-gia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent,
    HeroUnitComponent,
    GenderPipe,
    ClientLayoutComponent,
    HomeComponent,
    DashboardComponent,
    AdminLayoutComponent,
    DanhMucComponent,
    QtDanhMucComponent,
    QtTruyenTranhComponent,
    NewQtDanhMucComponent,
    EditQtDanhMucComponent,
    UploadDemoComponent,
    NewQtTruyenTranhComponent,
    EditQtTruyenTranhComponent,
    QtTacGiaComponent,
    NewQtTacGiaComponent,
    EditQtTacGiaComponent
  ],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
      AngularFireStorageModule,
      AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
