
import {
  OnInit,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { TareasService } from 'src/app/services/data/tareas.service';
import { Tarea } from 'src/app/models/tarea.model';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },

  green: {
    primary: '#076800',
    secondary: '#bdf5ba',
  },
};

@Component({
  selector: 'app-relations',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.css']
})
export class RelationsComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData!: {

    event: CalendarEvent;
  };

  tareas:Tarea[] = [];
  refresh = new Subject<void>();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;





  constructor(private tareaServicio:TareasService) { }

  ngOnInit(): void {
    this.events=[]
    this.tareaServicio.getTareasCalendario(false).subscribe(
      response=>{
        this.tareas = response.tareas
        for(let i=0; i<this.tareas.length;i++){
          console.log(this.tareas[i])
          if(this.tareas[i].fecha!=null){
          let evento = {
            start: addHours(this.tareas[i].fecha, 15),
            end: addHours(this.tareas[i].fecha, 16),
            title: this.tareas[i].hacer,
            color: colors.green,
          }
          this.events.push(evento)
        }
      }
      }
    )

  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
