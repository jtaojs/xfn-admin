<template>
    <div class="xfn-table-info">
        <el-card shadow="hover">
            <div class="xfn-table" :style="{background:this.getTableColor(data.status)}">
                <span>{{data.tid}}号桌:{{data.status | tableFilter}}</span>
            </div>
            <el-button type="success" plain size="mini" @click="showTableDetail">详情</el-button>
            <el-button type="danger" plain size="mini">修改</el-button>
        </el-card>
        <!-- 桌台详情对话框 -->
        <el-dialog :title="data.tid+'号桌台详情'" :visible="dialogTableDetailVisible" :before-close="closeDialogTableDetail">
            <el-tabs type="border-card" @tab-click="makeQRCode" >
                <el-tab-pane label="桌台状态">桌台状态</el-tab-pane>
                <el-tab-pane label="桌台二维码">
                    <img :src="qrcodeData">
                </el-tab-pane>
            </el-tabs>
            <div slot="footer">
                <el-button @click="dialogTableDetailVisible=false">取消</el-button>
                <el-button type="primary" @click="dialogTableDetailVisible=false">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            dialogTableDetailVisible:false,
            qrcodeData:''//二维码图片数据:base64字符数据
        }
    },
    methods:{
        getTableColor(code){
            if(code==1) return "#67c23a"
            if(code==2) return "#e6a23c"
            if(code==3) return "#f56c6c"
            else return "#909399"
        },
        showTableDetail(){
            //console.log(this.data) 当前桌台数据
            this.dialogTableDetailVisible=true;
        },
        closeDialogTableDetail(){
            this.dialogTableDetailVisible=false;
        },
        makeQRCode(){//创建二维码--注意此方法不能再当前组件的mounted中调用,因为绘图必须得canvas在el-dialog中,对话框加载时不在dom书上
            var qrcode = require('qrcode')
            //每个桌子对应的url应该形如   //http://127.0.0.1:8092/#/3
            var tableUrl= this.$store.state.globalSettings.appUrl+'/#/'+this.data.tid
            qrcode.toDataURL(tableUrl,{errorCorrectionLevel:'H',width:300},(err,url)=>{
                //console.log('二维化图片绘制完成',数据如下)
                //console.log(url)
                this.qrcodeData=url
            })
        }
    }
}
</script>

<style lang="scss">
    .xfn-table-info{
        padding:3px;
        text-align: center;
        .xfn-table{
            width:90%;
            height: 100px;
            margin: 8px auto;
            line-height: 100px;
            border-radius: 50%;
            box-shadow: 5px -5px 5px #888;
        }
    }
</style>
