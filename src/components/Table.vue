<template>
    <div class="xfn-table-info">
        <el-card shadow="hover">
            <div class="xfn-table" :class='{free:data.status==1,appointment:data.status==2,order:data.status==3,others:data.status==0}'>
                <span>{{data.tid}}号桌:{{data.status==1?'空闲':(data.status==2)?"预约":(data.status==3)?"占用":其他}}</span>
            </div>
            <el-button type="success" plain size="mini" @click="dialogVisible = true">详情</el-button>
            <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = true">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
            <el-button type="danger" plain size="mini">修改</el-button>
        </el-card>
    </div>
</template>

<script>
export default {
    props:['data'],
    data(){
        return{
            dialogVisible:false
        }
    },
    
}
</script>

<style lang="scss">
    .xfn-table{
        width:90%;
        height: 100px;
        margin: 0 auto 8px;
        line-height: 100px;
        text-align: center;
        border-radius: 50%;
        box-shadow: 5px -5px 5px #888;
    }
    .free{
        background-color: rgb(103, 194, 58)
    }
    .appointment{
        background-color: rgb(230, 162, 60)
    }
    .order{
        background-color:rgb(245, 108, 108)
    }
    .others{
        background-color:rgb(144, 147, 153)
    }
</style>
