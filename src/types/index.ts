export interface ParamsInterface{
    [key: string]: string;
}

export interface AnyInterface{
    [key: string]: any;
}

export interface MeunItemInterface{
    id: string;
    keyId: string;
    title: string;
    component: string;
    path: string;
    parmas: unknown;
    query: object;
    parentId: string;
    leaf: boolean;
    hide: boolean;
    icon: string;
    children: MeunItemInterface[];
    menuCode: string;
    operationList: AnyInterface[];
}

// <template>
//   <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
//     <el-menu-item v-for="item in meuns" :key="item.id" :index="item.path">
//       <template>
//         <router-link :to="item.path">
//           <i :class="item.icon"></i>
//           <span>{{item.title}}</span>
//         </router-link>
//       </template>
//     </el-menu-item>
//   </el-menu>

// </template>
