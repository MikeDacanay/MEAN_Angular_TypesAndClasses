var myNum: Number = 5;
var myString: String = 'Hello Universe';
var myArr: number[] = [1,2,3,4];
var myObj: Object = {name:'Bill'}
var anythingVariable: any = 'Hey';
var anythingVariable: any = 25;
var arrayOne: boolean[] = [true, false, true];
var arrayTwo: any[] = [true, 6, 'true'];
var myObj: {[s: string]: number;} = {x: 5, y:10};
class MyNode {
    val: number;
    _priv: number;
    constructor(val) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this._priv = 10;
    }
}