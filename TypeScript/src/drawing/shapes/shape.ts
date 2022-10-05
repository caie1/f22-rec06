import { Writer } from "../writing/writer";
import { PNGWriter } from "../writing/pngwriter";
import { JPEGWriter } from "../writing/jpegwriter";
import { Line } from "./line";
import { Formatter } from "../formatting/formatter";

/**
 * Refactor Exercise 3: (Mis-)Shaped
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
interface Shape {
	
    toLines(): Line[];

    draw(writer: Writer, formatter: Formatter): void;
}

abstract class AbstractShape implements Shape {

	/**
     * Converts shape into lines.
     *
     * @return lines of this shape.
     */
	abstract toLines(): Line[];

	/**
     * Draws lines to file.
     */
	public draw(writer: Writer, formatter: Formatter): void {
		let lines: Line[] = this.toLines();
			for (let line of lines) {
				writer.write(formatter.format(line));
			}
	}
}

export { Shape, AbstractShape }