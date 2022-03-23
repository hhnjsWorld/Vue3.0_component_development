/* 根组件里边引入某些所需数据和渲染数据 */

import db from "./data/db.js"
import Todo from "./components/Todo.js";
/* main.js方法下 */
/* 导出的是一个根组件 */
export default {
    /* 把组件压进去 利用原生仿写Vue构建 */
    components: {
        Todo,
    },
    data() {
        return {
            /* 数组 */
            db
        };
    },
}