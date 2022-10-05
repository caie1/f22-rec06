import { PaymentAccount } from "./paymentaccount";

/**
 * Refactor Exercise 2: Account
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
// TODO: Think about what can be a issue of the Student class?
class Student{

	private payment : PaymentAccount;
	private gpa: number;

	constructor(payment: PaymentAccount, gpa: number) {
		this.gpa = gpa;
		this.payment = payment;
	}

	public getGPA(): number {
		return this.gpa;
	}

	public updateGPA(newGPA: number) {
		this.gpa = newGPA;
	}

	// TODO: Do you think student should have an method of pay? (Refused Bequest)
	public pay(amount: number): boolean {
		return this.payment.pay(amount);
	}
}