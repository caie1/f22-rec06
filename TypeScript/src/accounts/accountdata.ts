/**
 * Refactor Exercise 2: Account
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class AccountData {

	accountName: string;
	accountNumber: number;

	constructor(accountName: string, accountNumber: number) {
		this.accountName = accountName;
		this.accountNumber = accountNumber;
	}
}

export { AccountData }