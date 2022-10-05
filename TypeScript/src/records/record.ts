/**
 * Refactor Exercise 1: Extract Parameter Object
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
class Records {
    private records: Person[];

    constructor() {
        this.records = [];
    }

	/**
     * Adds a person's record.
     */
    public addRecord(Person p) {
        for (let person of this.records) {
            if (person.equals(p)) {
                return false;
            }
        }
        this.records.push(p);
        return true;
    }
}