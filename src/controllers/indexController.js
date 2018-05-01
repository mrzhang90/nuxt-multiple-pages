// import indexModel from '../models/indexModel';
import axios from 'axios';
const indexController = {
	index() {
        return new Promise(function(resolve,reject){
            resolve({
                'left':{
                    'campsId':'20170819135330CAM660cd568',
                    'campsName':'英国全真插班英语营',
                    'detailPrice':'6580',
                    'campsImages':'http://oss.camplink.cn/camps/jpg/Aerial-shot-e1448613226737_20170819135424.jpg'
                },
                'right1':{
                    'campsId':'20170828110642CAM9168c0b6',
                    'campsName':'欧洲高端滑雪体验营',
                    'detailPrice':'11800',
                    'campsImages':'http://oss.camplink.cn/camps/jpg/4_20170828110736.jpg'
                },
                'right2':{
                    'campsId':'20170829114202CAM87b64136',
                    'campsName':'美国中小学插班寄宿营',
                    'detailPrice':'29500',
                    'campsImages':'http://oss.camplink.cn/camps/jpg/bc03b1a5a1454df98bbceac2da51874d_20170831132722.jpg'
                },
                'right3':{
                    'campsId':'20170821153308CAM73548f5a',
                    'campsName':'新家坡国立大学高端英语插班营',
                    'detailPrice':'12500',
                    'campsImages':'http://oss.camplink.cn/camps/jpg/9-national-university-of-singapore-nus-singapore-singapore_20170821153749.jpg'
                },
                'right4':{
                    'campsId':'20170901103234CAM47f063ef',
                    'campsName':'美国加州篮球训练+比赛冬令营',
                    'detailPrice':'7035',
                    'campsImages':'http://oss.camplink.cn/camps/png/fd060b31b0fd4aec93925ccec61b3d0d_20170901113055.png'
                },
                'right5':{
                    'campsId':'20170830094855CAM873eceb6',
                    'campsName':'中美机器人对抗大赛-加州赛区',
                    'detailPrice':'9045',
                    'campsImages':'http://oss.camplink.cn/camps/jpg/b44963a704cb44f9b5c76f81653e462d_20170831161439.jpg'
                },
                'right6':{
                    'campsId':'20170829114202CAM87b64136',
                    'campsName':'美国中小学插班寄宿营',
                    'detailPrice':'29500',
                    'campsImages':'http://oss.camplink.cn/camps/jpg/Aerial-shot-e1448613226737_20170819135424.jpg'
                },
                'categoryList':[
                    {
                        'categoryId':'20170627115702CA770932a5',
                        'categoryUrl':'http://oss.camplink.cn/category/jpg/b806363cb97f4209a222d0c962f713e3_20170911114828.jpg',
                        'categoryName':'名校探索',
                    },{
                        'categoryId':'20170306101232CAefc0a183',
                        'categoryUrl':'http://oss.camplink.cn/category/JPG/4bc537c9c87546c68724dadba00ea3b8_20170911115543.JPG',
                        'categoryName':'日营',
                    },{
                        'categoryId':'20170306101213CAe70c792b',
                        'categoryUrl':'http://oss.camplink.cn/category/jpg/aafdb67d15f64149af6da875f2c3b563_20170911115747.jpg',
                        'categoryName':'英国学年项目',
                    },{
                        'categoryId':'20170306101148CAf5c5cb19',
                        'categoryUrl':'http://oss.camplink.cn/category/jpg/0a8e3f133dd54f2eab6ed626cf4534dd_20170911120030.jpg',
                        'categoryName':'志愿者项目',
                    },{
                        'categoryId':'20170306095608CA2fbcebf2',
                        'categoryUrl':'http://oss.camplink.cn/category/jpg/f84d9424996646e2bd5afded5575f3a5_20170911131640.jpg',
                        'categoryName':'科技探索',
                    },{
                        'categoryId':'20170306095629CA081a46ea',
                        'categoryUrl':'http://oss.camplink.cn/category/jpg/34a97acbbd1348f3902c018b80920cce_20170911132641.jpg',
                        'categoryName':'野生保护',
                    },{
                        'categoryId':'20170306095544CAcb3d42cf',
                        'categoryUrl':'http://oss.camplink.cn/category/15.16-Art-Camp-1080x675.jpg/585be4c398f444a78465489b3940e12d_20170911133122.15.16-Art-Camp-1080x675.jpg',
                        'categoryName':'艺术形式',
                    },{
                        'categoryId':'20170107222733CAb14690a4',
                        'categoryUrl':'http://oss.camplink.cn/category/jpg/3ea49d5ec9cb473a85517a3e8005c1f6_20170911135435.jpg',
                        'categoryName':'语言学习',
                    },{
                        'categoryId':'20170108112846CA03fb5ecd',
                        'categoryUrl':'http://oss.camplink.cn/category/jpg/acb9b03189df4a069cf3c20ccbce4462_20170911135454.jpg',
                        'categoryName':'全真插班',
                    },{
                        'categoryId':'20170108112827CA0a9c5f9f',
                        'categoryUrl':'http://oss.camplink.cn/category/jpg/e9bb785c10234e0b87fe2f4ce6a73ebb_20170911141435.jpg',
                        'categoryName':'传统营地',
                    },{
                        'categoryId':'20170112102252CAc19bea4e',
                        'categoryUrl':'http://oss.camplink.cn/category/JPG/946564302d5e452c9a1b27a7f0225d2d_20170911140439.JPG',
                        'categoryName':'体育项目',
                    }
                ]
            });
        })
        // return axios.get('http://www.camplink.cn/uc/userinfo.do')
        // .then((res) => {
        //     return res.data
        // })
        // return 123
    }
    // ,
	// userinfo(){
	// 	return async(ctx,next)=>{
	// 		const indexModelIns = new indexModel();
	// 		const result = await indexModelIns.userinfo();
	// 		ctx.body = result;
	// 	}
	// },
	// getCategroyList(){
	// 	return async(ctx,next)=>{
	// 		const indexModelIns = new indexModel();
	// 		const result = await indexModelIns.getCategroyList(ctx.query.categoryType);
	// 		ctx.body = result;
	// 	}
	// }
}
export default indexController;