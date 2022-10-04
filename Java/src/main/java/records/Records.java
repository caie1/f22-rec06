package records;

import java.util.ArrayList;
import java.util.List;

/**
 * Refactor Exercise 1: Extract Parameter Object
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
public class Records {
    private List<Person> records;

    public Records() {
        this.records = new ArrayList<>();
    }

    /**
     * Adds a person's record.
     */
    public boolean addRecord(Person person) {
        for (Person row : this.records) {
            if (row.equals(person)) {
                return false;
            }
        }
        this.records.add(person);
        return true;
    }
}