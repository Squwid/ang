import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  
  onServerAddition(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }

  onBlueprintAddition(bpData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: "blueprint",
      name: bpData.serverName,
      content: bpData.serverContent
    })
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed"
  }
}

