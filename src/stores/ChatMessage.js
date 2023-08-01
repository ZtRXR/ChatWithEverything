import { defineStore } from 'pinia'
import { ref } from 'vue'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useMessage = defineStore(
    "chatMessage",
    () => {
        let NewChatting = ref(0)
        let AllMess=[
            {
                sender:0,
                text:'欢迎来到CHat With Everything!',
            },{
                sender:1,
                text:'来了！！',
            },{
                sender:0,
                text:'好的！',
            },
        ]
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
        return {
            NewChatting,
            AllMess,
            GetName
        }
    },
    {
        persist: true,
    }
)