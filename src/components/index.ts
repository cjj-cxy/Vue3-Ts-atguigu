import SvgIcon from '@/components/SvgIcon/index.vue';
import Pagination from '@/components/Pagination/index.vue';

// 全局对象
const allGloablComponent = {SvgIcon, Pagination};
// console.log(allGloablComponent)

Object.keys(allGloablComponent).forEach(item => {
    console.log(item);
})

// 对外暴露一个插件对象
export default {
    // 必须叫install
    install(app: any){
        console.log(app)
        
    }
}