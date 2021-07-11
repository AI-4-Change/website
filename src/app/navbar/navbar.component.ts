import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnDestroy {
  private userSubscription: Subscription;
  public shouldShowLogoutButton = false;

  constructor(private auth: AngularFireAuth, private router: Router) {
    let user = auth.user;
    this.userSubscription = user.subscribe({
      next: (user) => {
        this.shouldShowLogoutButton = !!user;
        console.log(`Login state is ${this.shouldShowLogoutButton}`);
      },
    });
  }

  onLogout(): void {
    console.log('logging out...');
    this.auth.signOut().then(() => {
      this.router.navigate(['']);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
