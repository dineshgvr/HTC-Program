import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import validate = WebAssembly.validate;
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public employeeForm: FormGroup;
  public showAddress2 = false;

  constructor(private fb: FormBuilder,
              private empService: EmployeeService) {
    this.employeeForm = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      salary: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      isPermanent: new FormControl(false, [Validators.required]),
      address2: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.empService.employeePosts(this.employeeForm.value).subscribe((response: any)=> {
        console.log(response);
      });
    }
  }

  onClickNo(e): void {
    if (e) {
      this.showAddress2 = true;
    } else {
      this.showAddress2 = false;
    }
  }
}
