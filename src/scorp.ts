// 为每一段程序形成自己的作用域
/**
 *  判断变量是否
 */

class Scorp {
    scorp: object;
    constructor(){
        this.scorp = {};
    }

    // 将变量设置进 作用域中
    $set(name: string, value: any) {
        // if( !this.scorp.hasOwnProperty(name) ) {

        // }
        this.scorp[name] = value;
    }
    $get(name) {
        if(!this.scorp[name]) {
            throw Error('这个变量不存在')
        }
        return this.scorp[name];
    }
}