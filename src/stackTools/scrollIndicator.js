/*
Display scroll progress bar across bottom of image.
 */
var scrollBarHeight = 6;

var configuration = {
    backgroundColor: 'rgb(19, 63, 141)',
    fillColor: 'white',
    orientation: 'horizontal'
};

function onImageRendered(e) {
    var eventData = e.detail;
    var element = eventData.element;
    var width = eventData.enabledElement.canvas.width;
    var height = eventData.enabledElement.canvas.height;

    if (!width || !height) {
        return false;
    }

    var context = eventData.enabledElement.canvas.getContext('2d');
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.save();

    var config = scrollIndicator.getConfiguration();

    // draw indicator background
    context.fillStyle = config.backgroundColor;
    if (config.orientation === 'horizontal') {
        context.fillRect(0, height - scrollBarHeight, width, scrollBarHeight);
    } else {
        context.fillRect(0, 0, scrollBarHeight, height);
    }

    // get current image index
    var stackData = getToolState(element, 'stack');
    if (!stackData || !stackData.data || !stackData.data.length) {
        return;
    }

    var imageIds = stackData.data[0].imageIds;
    var currentImageIdIndex = stackData.data[0].currentImageIdIndex;

    // draw current image cursor
    var cursorWidth = width / imageIds.length;
    var cursorHeight = height / imageIds.length;
    var xPosition = cursorWidth * currentImageIdIndex;
    var yPosition = cursorHeight * currentImageIdIndex;

    context.fillStyle = config.fillColor;
    if (config.orientation === 'horizontal') {
        context.fillRect(xPosition, height - scrollBarHeight, cursorWidth, scrollBarHeight);
    } else {
        context.fillRect(0, yPosition, scrollBarHeight, cursorHeight);
    }

    context.restore();
}

const scrollIndicator = displayTool(onImageRendered);
scrollIndicator.setConfiguration(configuration);

export default scrollIndicator;