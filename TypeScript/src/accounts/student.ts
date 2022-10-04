import { PaymentAccount } from "./paymentaccount";

/**
 * Refactor Exercise 2: Account
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class Student {

	private payment : PaymentAccount;
	private gpa: number;

	constructor(payment: PaymentAccount, gpa: number) {
		this.payment = payment;
		this.gpa = gpa;
	}

	public getGPA(): number {
		return this.gpa;
	}

	public updateGPA(newGPA: number) {
		this.gpa = newGPA;
	}

	public pay(amount: number): boolean {
		return this.payment.pay(amount);
	}
}