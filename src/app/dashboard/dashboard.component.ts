import { Component, OnInit } from '@angular/core';
import { BarModel } from '../shared/models/bar.model';
import { BarService } from '../shared/services/bar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public barData: Array<BarModel>;
    public selectedBar: BarModel;
    public error: any;

    constructor(private barService: BarService) {
    }

    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        this.barService
            .get()
            .then((response) => {
                this.barData = response;
                this.selectedBar = response[0];
                this.barData.forEach((item, key) => {
                    this.calAverage(item);
                    this.updateType(item);
                });
            })
            .catch(error => this.error = error);
    }

    onChange(id: string) {
        this.barData.forEach((bar, key) => {
            if( bar.id ===  parseInt(id)) {
                this.selectedBar = this.barData[key];
            }
        });
    }

    redraw(num: number) {
        let value = Math.floor(this.selectedBar.value+num);
        if( num > 0 ) {
            this.selectedBar.value = value;
        } else {
            this.selectedBar.value = (value >= 0) ? value : 0;
        }
        this.calAverage(this.selectedBar);
        this.updateType(this.selectedBar);
    }

    calAverage(bar: BarModel) {
        bar.percent = Math.floor((bar.value * 100) / bar.max);
    }

    updateType(bar: BarModel) {
        if( bar.value > 100 ) {
            bar.type = 'danger';
        } else {
            bar.type = 'info';
        }
    }
}
