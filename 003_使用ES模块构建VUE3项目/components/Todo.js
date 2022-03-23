/* 这里全部是为子组件了 */
export default {
    /* 接受父级传递过来的数据 */
    props: ['父传子'],
    // data() {
    //     return {
    //         content: "我是土豆",
    //         origin: "链接",
    //     };
    // },
    // template: `<div>{{content}}</div>
    // <div>{{origin}}</div>`,

    /* 子组件去接收 */
    template: `<div style="color:red">{{父传子.id}}</div>`
};