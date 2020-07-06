import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string;
  constructor(private authService : AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  async loginuser(event:FormGroup)
  {
    const {email,password} = event.value 
    try {
      await this.authService.loginUser(email,password);
      this.router.navigate(['/'])
    } catch (error) {
      this.error = error.message;
    }
     
  }

}
