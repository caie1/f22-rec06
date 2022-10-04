import { Shape } from "./shapes/shape";
import { Writer } from "./writing/writer";
import { JPEGWriter } from "./writing/jpegwriter";
import { PNGWriter } from "./writing/pngwriter";
import { JPEGFormatter } from "./formatting/jpegformatter";
import { PNGFormatter } from "./formatting/pngformatter";
import { Formatter } from "./formatting/formatter";

class Drawing {

	// TODO: what is the problem of a having modifiable public filed?
    public shapes: Shape[];

    constructor(shapes: Shape[]) {
        this.shapes = shapes;
    }

	/**
     * Draw shapes to a file with given file format.
     * @param format file format
     * @param filename file name
     */
	 public draw(format: string, filename: string): void {
        let outName: string = filename + "." + format;
        if (format === "jpeg") {
            this.write(new JPEGWriter(outName), new JPEGFormatter());
        }
        else if (format === "png") {
            this.write(new PNGWriter(outName), new PNGFormatter());
        }
        else {
            throw new Error("Format not recognized: " + format);
        }
    }
	
	 private write(writer: Writer, formatter: Formatter): void {
        try {
            for (let shape of this.shapes) {
                // Moved the misplaced call to 'toLines' to the Shape's 'draw' method.
                // We could even just "inline" Shape.draw here and remove it from the interface. That takes away a
                // "default method" (which isn't ideal) and simplify dependencies for Shapes.
                shape.draw(writer, formatter);
            }
        } catch (e) {
            console.log(e)
        }
    }
}

