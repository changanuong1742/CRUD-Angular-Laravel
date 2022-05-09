import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './screens/hero-detail/hero-detail.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';
import {AdminLayoutComponent} from './screens/admin-layout/admin-layout.component';
import {DashboardComponent} from './screens/admin/dashboard/dashboard.component';
import {ClientLayoutComponent} from './screens/client-layout/client-layout.component';
import {HomeComponent} from './screens/home/home.component';
import {DanhMucComponent} from './screens/danh-muc/danh-muc.component';
import {QtDanhMucComponent} from './screens/admin/qt-danh-muc/qt-danh-muc.component';
import {NewQtDanhMucComponent} from './screens/admin/new-qt-danh-muc/new-qt-danh-muc.component';
import {EditQtDanhMucComponent} from './screens/admin/edit-qt-danh-muc/edit-qt-danh-muc.component';
import {UploadDemoComponent} from './screens/admin/upload-demo/upload-demo.component';
import {QtTruyenTranhComponent} from './screens/admin/qt-truyen-tranh/qt-truyen-tranh.component';
import {NewQtTruyenTranhComponent} from './screens/admin/new-qt-truyen-tranh/new-qt-truyen-tranh.component';
import {EditQtTruyenTranhComponent} from './screens/admin/edit-qt-truyen-tranh/edit-qt-truyen-tranh.component';
import {QtTacGiaComponent} from './screens/admin/qt-tac-gia/qt-tac-gia.component';
import {NewQtTacGiaComponent} from './screens/admin/new-qt-tac-gia/new-qt-tac-gia.component';
import {EditQtTacGiaComponent} from './screens/admin/edit-qt-tac-gia/edit-qt-tac-gia.component';

const routes: Routes = [
  {
    path: "",
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: 'danh-muc/:id',
        component: DanhMucComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: 'dashboard',
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: 'danh-muc',
        component: QtDanhMucComponent
      },
      {
        path: 'danh-muc/tao-moi',
        component: NewQtDanhMucComponent
      },
      {
        path: 'danh-muc/sua/:id',
        component: EditQtDanhMucComponent
      },
      {
        path: 'upload-file',
        component: UploadDemoComponent
      },
      {
        path: 'truyen-tranh',
        component: QtTruyenTranhComponent
      },
      {
        path: 'truyen-tranh/tao-moi',
        component: NewQtTruyenTranhComponent
      },
      {
        path: 'truyen-tranh/sua/:id',
        component: EditQtTruyenTranhComponent
      },
      {
        path: 'tac-gia',
        component: QtTacGiaComponent
      },
      {
        path: 'tac-gia/tao-moi',
        component: NewQtTacGiaComponent
      },
      {
        path: 'tac-gia/sua/:id',
        component: EditQtTacGiaComponent
      },
    ]
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
