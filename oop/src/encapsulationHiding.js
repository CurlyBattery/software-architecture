var Rectangle = /** @class */ (function () {
    function Rectangle(w, h) {
        this._width = w;
        this._height = h;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value <= 0) {
                this._width = 1;
            }
            else {
                this._width = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.calcArea = function () {
        return this._width * this._height;
    };
    Rectangle.prototype.calcPerimeter = function () {
        return (this._width + this._height) / 2;
    };
    return Rectangle;
}());
var rect = new Rectangle(5, 10);
rect.width = -2;
console.log(rect);
