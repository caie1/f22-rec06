package account;

/**
 * Refactor Exercise 2: Account
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
public record AccountData(String accountHolder, int accountNumber) {

    public int getAccountNumber() {
        return this.accountNumber;
    }

    public String getAccountHolder() {
        return this.accountHolder;
    }
}