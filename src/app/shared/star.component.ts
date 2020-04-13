import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() private rating : number;
    private starWidth : number;
    @Output() private ratingClickedEvent : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges() : void {
        this.starWidth = this.rating * 76 / 5;
    }

    private onClickNotify() : void {
        this.ratingClickedEvent.emit(`The product with rating of ${this.rating} was clicked`);
    }
}