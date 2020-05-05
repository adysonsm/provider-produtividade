import { Component, OnInit, Input } from "@angular/core";
import { DialogNamePromptComponent } from "../../modal-overlays/dialog/dialog-name-prompt/dialog-name-prompt.component";
import { NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-modal-confirmation",
  templateUrl: "./modal-confirmation.component.html",
  styleUrls: ["./modal-confirmation.component.scss"],
})
export class ModalConfirmationComponent implements OnInit {
  @Input() title: string;
  constructor(protected ref: NbDialogRef<DialogNamePromptComponent>) {}

  ngOnInit(): void {}

  dismiss() {
    this.ref.close();
  }
}
