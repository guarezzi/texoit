import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule} from '@angular/router/testing';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { IPage, Page } from 'src/app/shared/page.model';
import { IMovieList } from '../shared/movie-list.model';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  const content: IMovieList = {
    id: 1	,
    year: 1980,	
    title: `Can't Stop the Music`,
    winner: true,
    studios: [],
    producers: []
  };

  const page: IPage<IMovieList> = new Page();
  page.number = 1;
  page.content = [content];
  page.totalElements = 1;
  page.size = 15;

  const snapshot = {
    snapshot: {
      data: {
        movieList: page
      }
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [CommonModule, FormsModule, RouterTestingModule, HttpClientModule, NgbPaginationModule ],
      providers: [
        { provide: ActivatedRoute, useValue: snapshot }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title List movies', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h5#list-title') as HTMLHeadElement;
    expect(title?.textContent).toEqual('List movies');
  });

  it('should render table header', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const th = compiled.querySelectorAll('th');
    
    expect(th[0].textContent.trim()).toEqual('ID');
    expect(th[1].textContent.trim()).toContain('Year');
    expect(th[2].textContent.trim()).toEqual('Title');
    expect(th[3].textContent.trim()).toContain('Winner?');
  });

  it('should render table body', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const td = compiled.querySelectorAll('td');

    expect(td[0].textContent.trim()).toEqual(content.id.toString());
    expect(td[1].textContent.trim()).toEqual(content.year.toString());
    expect(td[2].textContent.trim()).toEqual(content.title);
    expect(td[3].textContent.trim()).toEqual('Yes');
  });

  it('should render pagination', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const pages = compiled.querySelectorAll('li.page-item.active');
    expect(pages.length).toBe(1);
    expect(pages[0].textContent).toContain('1');
  });

  it('should render Winner filter', () => {
    const fixture = TestBed.createComponent(ListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const options = compiled.querySelectorAll('th > select > option');
    expect(options).toBeDefined();
    expect(options.length).toBe(3);

    expect(options[0].textContent).toContain('Yes/No');
    expect(options[0].getAttribute('value')).toContain('undefined');

    expect(options[1].textContent).toContain('Yes');
    expect(options[1].getAttribute('value')).toBe('true');

    expect(options[2].textContent).toContain('No');
    expect(options[2].getAttribute('value')).toBe('false');
  });
  
});
