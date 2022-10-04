import { AccountData } from "./accountdata";

/**
 * Refactor Exercise 2: Account
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
 abstract class PaymentAccount {
	private accountData: AccountData;

	constructor(accountName: string, accountNumber: number) {
		this.accountData = new AccountData(accountName, accountNumber);
	}

	public abstract pay(amount: number): boolean;

	public getAccountData(): AccountData {
		return this.accountData;
	}
}

export { PaymentAccount }