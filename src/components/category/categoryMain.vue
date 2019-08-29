<template>
    <div id="caregory">
        <keep-alive>
            <van-tree-select :items="items" :height="height" :main-active-index="mainActiveIndex" :active-id="activeId" @click-nav="onClickNav" @click-item="onClickItem" />
        </keep-alive>
    </div>
</template>

<script>
import Vue from 'vue';
import { axioss } from '../../extends/axios'
//首页api地址请求
import { XS_Novel } from '../../api/api'

import { getStyle } from '../../extends/getStyle'
import { TreeSelect } from 'vant';
import 'vant/lib/index.css'
Vue.use(TreeSelect);
export default {
    data() {
        return {
            height: 380,
            // 获取分类失败提示
            classErr: { text: '加载分类失败...', id: 1, },
            // 导航名称顺序不能随意调整
            items: [
                {
                    text: '段子', //yes?
                    children: [{ text: '猎奇段子', id: 1, url: "/typelist", query: { type: 'gaoxiao', title: '猎奇段子' } }, { text: '文字趣事', id: 2, url: "/typelist", url: "/typelist", query: { type: 'gaoxiao', title: '猎奇段子' } }, { text: '浮夸段子', id: 3, url: "/typelist", url: "/typelist", query: { type: 'gaoxiao', title: '猎奇段子' } }]  // 该导航下所有的可选项  // 名称  // id，作为匹配选中状态的标识  // 禁用选项  disabled: true
                },
                {
                    text: '漫画', //yes
                    children: [
                        { text: '全部', id: 1, url: "/manhua", query: { title: '全部',}},
                        { text: '热血', id: 2, url: "/manhua", query: { title: '热血',cat:'rexue' }},
                        { text: '神魔', id: 3, url: "/manhua", query: { title: '神魔',cat:'shenmo' }},
                        { text: '耽美', id: 4, url: "/manhua", query: { title: '耽美',cat:'liaomei' }},
                        { text: '推理', id: 5, url: "/manhua", query: { title: '推理',cat:'tuili' }},
                        { text: '冒险', id: 6, url: "/manhua", query: { title: '冒险',cat:'maoxian' }},
                        { text: '运动', id: 7, url: "/manhua", query: { title: '运动',cat:'yundong' }},
                        { text: '恋爱', id: 8, url: "/manhua", query: { title: '恋爱',cat:'lianai' }},
                        { text: '搞笑', id: 9, url: "/manhua", query: { title: '搞笑',cat:'gaoxiao' }},
                        { text: '动作', id: 10, url: "/manhua", query: { title: '动作',cat:'dongzuo' }},
                        { text: '玄幻', id: 11, url: "/manhua", query: { title: '玄幻',cat:'xuanhuan' }},
                        { text: '机战', id: 12, url: "/manhua", query: { title: '机战',cat:'jizhan' }},
                        { text: '战争', id: 13, url: "/manhua", query: { title: '战争',cat:'zhanzhen' }},
                        { text: '悬疑', id: 14, url: "/manhua", query: { title: '悬疑',cat:'xuanyi' }},
                        { text: '社会', id: 15, url: "/manhua", query: { title: '社会',cat:'shehui' }},
                        { text: '忍者', id: 16, url: "/manhua", query: { title: '忍者',cat:'renzhe' }},
                        { text: '游戏', id: 17, url: "/manhua", query: { title: '游戏',cat:'youxi' }},
                        { text: '古风', id: 18, url: "/manhua", query: { title: '古风',cat:'gufeng' }},
                        { text: '宠物', id: 19, url: "/manhua", query: { title: '宠物',cat:'chongwu' }},
                        { text: '吸血', id: 20, url: "/manhua", query: { title: '吸血',cat:'xixue' }},
                        { text: '后宫', id: 21, url: "/manhua", query: { title: '后宫',cat:'hougong' }},
                        { text: '御姐', id: 22, url: "/manhua", query: { title: '御姐',cat:'yujie' }},
                        { text: '霸总', id: 23, url: "/manhua", query: { title: '霸总',cat:'bazong' }},
                        { text: '百合', id: 24, url: "/manhua", query: { title: '百合',cat:'baihe' }},
                        { text: '历史', id: 25, url: "/manhua", query: { title: '历史',cat:'lishi' }},
                        { text: '科幻', id: 26, url: "/manhua", query: { title: '科幻',cat:'kehuan' }},
                        { text: '穿越', id: 27, url: "/manhua", query: { title: '穿越',cat:'chuanyue' }},
                        { text: '恐怖', id: 28, url: "/manhua", query: { title: '恐怖',cat:'kongbu' }},
                        { text: '漫改', id: 29, url: "/manhua", query: { title: '漫改',cat:'mangai' }},
                        { text: '真人', id: 30, url: "/manhua", query: { title: '真人',cat:'zhenren' }},
                        { text: '都市', id: 31, url: "/manhua", query: { title: '都市',cat:'dushi' }},
                        { text: '武侠', id: 32, url: "/manhua", query: { title: '武侠',cat:'wuxia' }},
                    ]
                },
                {
                    text: '短视频',//yes?
                    children: [{ text: '全部视频', id: 1, url: "/videolist", query: { type: 'video', title: '全部视频' } }, { text: '趣味广告', id: 2, url: "/videolist", query: { type: 'video', title: '趣味广告' } }, { text: '生活', id: 3, url: "/videolist", query: { type: 'video', title: '生活' } }, { text: '剧情', id: 4, url: "/videolist", query: { type: 'video', title: '剧情' } }]
                },
                {
                    text: '小说', //yes
                    children: [{ text: '加载中...', id: 1, }]
                },
                {
                    text: '影视',
                    children: [{ text: '暂无', id: 1, },]
                },
                {
                    text: '其它',
                    children: [{ text: '其它', id: 1, }]
                },
            ],
            // 左侧高亮元素的index
            mainActiveIndex: 0,
            // 被选中元素的id
            activeId: 1,

        };
    },
    created() {
        var h = window.screen.availHeight;
        var f = Number(getStyle(document.documentElement, 'font-size').slice(0, -2))
        this.height = h - f * 15

        //小说类别
        if (!Boolean(window.localStorage.getItem('ITEM_3_XS'))) {
            this.$nextTick(async () => {
                try {
                    let dataXS_Novel = await axioss(XS_Novel.url, XS_Novel.type, XS_Novel.data);
                    let dataXS_N = dataXS_Novel.data[0].items;
                    // console.log(dataXS_N)
                    if (dataXS_N.length == 0) {
                        return this.items[3].children.push(classErr)
                    }
                    this.items[3].children.length = 0

                    dataXS_N.forEach((item, index) => {
                        let object = {}
                        object.id = index + 2;
                        object.text = item.tag_name;
                        object.url = '/read';
                        object.query = {
                            'tag_id': item.tag_id,
                            'title': item.tag_name
                        }
                        this.items[3].children.push(object)
                    })
                    // console.log(this.items[3])
                    window.localStorage.setItem('ITEM_3_XS', JSON.stringify(this.items[3]))
                    // window.cat_data = [{ 'ITEM_3_XS': object }]  存储全局
                } catch (err) {
                    this.$toast({ message: "小说分类加载失败!", className: 'fontsize' });
                    console.log(err)
                }
            })
        } else {
            this.items[3].children.length = 0
            this.items[3] = JSON.parse(window.localStorage.getItem('ITEM_3_XS'))
        }



    },
    methods: {
        onClickNav(index) {
            this.mainActiveIndex = index;
        },
        onClickItem(data) {
            this.$router.push({ path: data.url, query: data.query })
            // console.log(data)
        }
    }
}

</script>
<style lang="less" scoped>
#caregory {
    padding-top: 3.5rem;
}
</style>