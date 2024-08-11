import { Component } from '@angular/core';

const strongRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const easyRegex = /^([A-Za-z]{8,}|\d{8,}|[@$!%*?&]{8,})$/;
const mediumRegex =
  /^(?=.*[A-Za-z@$!%*?&])|(?=.*[A-Za-z\d])|(?=.*[\d@$!%*?&]){8,}$/;

export enum Strength {
  EMPTY = 'empty',
  SHORT = 'short',
  EASY = 'easy',
  MEDIUM = 'medium',
  STRONG = 'strong',
}

@Component({
  selector: 'app-password-strength-meter',
  templateUrl: './password-strength-meter.component.html',
  styleUrl: './password-strength-meter.component.css',
})
export class PasswordStrengthMeterComponent {
  password = '';
  calculateStrength(): Strength {
    let strength = Strength.EMPTY;
    if (this.password) {
      if (this.password.length < 8) {
        strength = Strength.SHORT;
      } else if (easyRegex.test(this.password)) {
        strength = Strength.EASY;
      } else if (strongRegex.test(this.password)) {
        strength = Strength.STRONG;
      } else if (mediumRegex.test(this.password)) {
        strength = Strength.MEDIUM;
      }
    }
    return strength;
  }
}
