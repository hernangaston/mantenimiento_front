import { Component } from "@angular/core";
import { UsersService } from "../../service/users.service";

@Component({
  selector: "app-register",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegisterComponent {
  email: string = "";
  password: string ="";
  passwordError: boolean = false;

  constructor(public userService: UsersService) {}

  register() {
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe((data: { token: any; }) => {
   //   this.userService.setToken(data.token);
    });
  }
}
