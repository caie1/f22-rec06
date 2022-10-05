package drawing.shapes;

import drawing.writing.JPEGWriter;
import drawing.writing.PNGWriter;

import java.io.IOException;
import java.io.Writer;
import java.util.logging.Formatter;

/**
 * Refactor Exercise 3: (Mis-)Shaped
 *
 * @author Zishen Wen (F22), Deyuan Chen (S22)
 */
public interface Shape {

    /**
     * Converts shape into lines.
     *
     * @return lines of this shape.
     */
    Line[] toLines();

    /**
     * Draws lines to file.
     */
    default void draw(Writer writer, Formatter formatter) throws IOException{
        Line[] lines = this.toLines();
            for (Line line : lines) {
                writer.write(formatter.format(line));
            }
    }
}
