import { Component } from '@angular/core';

@Component({
    selector: "app-play-with-div",
    templateUrl: "./playWithDiv.component.html",
    styleUrls: ["./playWithDiv.component.css"]
})
export class PlayWithDivComponent {
    divColor: string = "red";
    divShown: boolean = true;

    changeColor = (color: string) => {
        this.divColor = color;
    }

    getDivColor = () => this.divColor;

    toggleDiv(): void {
        this.divShown = !this.divShown;
    }
}