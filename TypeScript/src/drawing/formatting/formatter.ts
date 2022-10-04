import { Line } from "../shapes/line";
/**
 * Refactor Exercise 3: (Mis-)Shaped
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
interface Formatter {
	format(line: Line): number[];
}

export { Formatter }