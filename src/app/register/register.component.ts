import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private userservice : UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  register(form: NgForm) {
    console.log(form);
    console.log(form.value);
   
    this.userservice.registerUser(form.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(["/login"]);
      alert("Registration successful");
    })
  }
}
