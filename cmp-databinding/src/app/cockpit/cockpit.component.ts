import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    // properties that are events being emitted
    @Output("sCreated") serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
    @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();

    // newServerName = "";
    // newServerContent = "";
    @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    // one way data binding from local form reference
    onAddServer(nameInput: HTMLInputElement) {
        console.log(this.serverContentInput.nativeElement.value)
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value
        })
    }

    // onAddBlueprint 
    onAddBlueprint() {
        this.blueprintCreated.emit({
            // the serverName comes from a static string because it is 2 way data bound for new server content
            serverName: "bp-status-message",
            serverContent: this.serverContentInput.nativeElement.value,
        })
    }
}
