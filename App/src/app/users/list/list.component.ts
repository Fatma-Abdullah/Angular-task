import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserComponent } from '../user/user.component';
import { NotificationService } from 'src/app/services/notification.service';
import { TranslateService } from '@ngx-translate/core';

export interface User {
  id?: string;
  name?: string;
  email?: string;
  phone?: number;
  status?: string;

}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'phone', 'status', 'actions'];
   dataSource = new MatTableDataSource<User>(this.usrService.users);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private usrService: UserService,
    private dialog: MatDialog,
    public notification: NotificationService,
    public translate: TranslateService) {
      translate.addLangs(['en', 'ar']);
      translate.setDefaultLang('en');
      translate.use('en');
    }

  ngOnInit() {
    this.getAll();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAll() {
    this.usrService.getAllUsers().subscribe((data: User[]) => {
      this.dataSource = new MatTableDataSource<User>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(UserComponent, dialogConfig);
  }

  onEdit(row) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.usrService.EditUser(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(UserComponent, dialogConfig);
  }
  onDelete(id) {
    const confirmDelete = confirm('Are you sure ?');
    if (confirmDelete) {
      this.usrService.DeleteUser(id).subscribe(
        d => {
          this.getAll();
          this.notification.danger('User removed successfully');

        }
      );
    } else {
      console.log('canceled');
    }
  }
}
