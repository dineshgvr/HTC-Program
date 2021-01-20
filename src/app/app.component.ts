import {ChangeDetectionStrategy, Component, DoCheck} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public states: any = ['TN APpl', 'AP APpp', 'BGL ASdfas', 'KoL afasfd', 'Del asfasf'];
  public filteredStates: any[] = [];
  public userFormGroup: FormGroup;
  subject = new Subject();

  constructor(private readonly formBuilder: FormBuilder,
              private readonly httpClient: HttpClient,
              private readonly activatedRoutes: ActivatedRoute) {
    this.filteredStates = this.states;
    // this.userFormGroup = this.formBuilder.group({
    //   userName: new FormControl('', [], [])
    // });
  }

  onKey(value: any) {
    this.filteredStates = this.states.filter(item => item.toLowerCase().includes(value.toLowerCase()));
  }
}

