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
	 public addRecord(person: Person) {
        for (let row of this.records) {
            if (row.equals(person)) {
                return false;
            }
        }
        this.records.push(person);
        return true;
    }
}