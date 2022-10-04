package account;

/**
 * Refactor Exercise 2: Account
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
public class Student {

    private final PaymentAccount paymentAccount;
    private double gpa;

    public Student(PaymentAccount accountData, double gpa) {
        this.paymentAccount = accountData;
        this.gpa = gpa;
    }

    public void updateGPA(double gpa) {
        this.gpa = gpa;
    }

    public double getGPA() {
        return this.gpa;
    }

    public boolean pay(int amount) {
        return paymentAccount.pay(amount);
    }
}
