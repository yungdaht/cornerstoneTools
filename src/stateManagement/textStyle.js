export default function() {
    var defaultFontSize = 15,
        defaultFont = defaultFontSize + 'px Arial',
        defaultBackgroundColor = 'transparent';

    function setFont(font) {
        defaultFont = font;
    }

    function getFont() {
        return defaultFont;
    }

    function setFontSize(fontSize) {
        defaultFontSize = fontSize;
    }

    function getFontSize() {
        return defaultFontSize;
    }

    function setBackgroundColor(backgroundColor) {
        defaultBackgroundColor = backgroundColor;
    }

    function getBackgroundColor() {
        return defaultBackgroundColor;
    }

    var textStyle = {
        setFont,
        getFont,
        setFontSize,
        getFontSize,
        setBackgroundColor,
        getBackgroundColor
    };

    return textStyle;
}
