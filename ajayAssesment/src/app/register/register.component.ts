import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  title = 'ajayAssesment';
  email_id;
  data;
  pwd;
  fname;
  lname;
  user:{id:number,name:string}


  constructor(private http: HttpClient,private router:Router) {
    this.data=new Array<any>();
   }
  ngOnInit(){
    
    this.registerForm=new FormGroup({
      'firstname':new FormControl(null,Validators.required),
      'lastname':new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'pwd': new FormControl(null,[Validators.required,Validators.minLength(4)]),
      'phone':new FormControl(null,[Validators.required,Validators.pattern(/^[6-9]\d{9}$/)]),
      'hobby': new FormControl(null,[Validators.required]),
      'city': new FormControl(null,[Validators.required]),
      'state': new FormControl(null,[Validators.required]),
      'country': new FormControl(null,[Validators.required]),
      'githuburl': new FormControl(null,[Validators.required]),
      'upload': new FormControl(null,[Validators.required])

    });
   }
   onsubmit(){
    if(this.registerForm.valid==true){
      alert("valid");
   
    // let url="http://127.0.0.1:3000/register/"+this.email_id+"/"+this.pwd+"/"+this.fname+"/"+this.lname;
    let url="http://ajaykrishnan99.pythonanywhere.com/register/"+this.email_id+"/"+this.pwd+"/"+this.fname+"/"+this.lname;
 
    this.http.post(url,{}).toPromise().then((data:any)=>{alert("Submitted");console.log(data);

    this.router.navigate(['/success']);

  })
    

  }
  else{alert("Enter All fields");}
}}
