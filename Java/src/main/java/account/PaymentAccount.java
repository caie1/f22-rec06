package account;

/**
 * Refactor Exercise 2: Account
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
public abstract class PaymentAccount {

    private final AccountData accountData;

    public PaymentAccount(String accountHolder, int accountNumber) {
        this.accountData = new AccountData(accountHolder, accountNumber);
    }

    public abstract boolean pay(int amount);

    public AccountData getAccountData() {
        return this.accountData;
    }
}
