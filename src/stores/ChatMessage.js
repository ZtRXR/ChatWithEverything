import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUser } from './User'
import { ElMessageBox } from 'element-plus'
const userInfo = useUser()
// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMessage = defineStore(
    "chatMessage",
    () => {
        const NewChatting = ref(0)
        const AllMess=ref([
            {
                sender:0,
                text:'欢迎来到CHat With Everything!',
                chatId:0
            },{
                sender:0,
                text:'欢迎来到CHat With Everything!',
                chatId:0
            },
            {
                sender:0,
                text:'欢迎来到CHat With Everything!',
                chatId:0
            },
            {
                sender:0,
                text:'欢迎来到CHat With Everything!',
                chatId:0
            },
        ])
        let IdToNameDic={
            0:'Zengtudor'
        }
        const GetName = (id)=>{
            if (IdToNameDic[id]!=null) {
                return IdToNameDic[id]
            }else{
                //Todo
                //Http Get ID
            }
        }
        const AddMess = (Amess)=>{
            if (Amess.sender==null||Amess.text.length<=0||Amess.text==null) {
                ElMessage({
                    message: '输入消息错误',
                    type: 'error',
                })
                return
            }
            AllMess.value.push(Amess)
        }
        const ToButtom = ref(0)
        return {
            NewChatting,
            AllMess,
            GetName,
            AddMess,
            ToButtom
        }
    },
    {
        persist: true,
    }
)