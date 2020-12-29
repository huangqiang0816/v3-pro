<template>
  <div class="login-container">
    <p>系统登录</p>
    <p><span>姓名：</span>{{formData.user}}</p>
    <p><span>密码：</span>{{formData.password}}</p>
    <el-form :model="formData" status-icon label-width="100px" class="demo-ruleForm" :rules="rules" ref="formRef">
      <el-form-item label="账号" prop="user">
        <el-input type="text" v-model="formData.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formData.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm" nativeType="submit">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'

export default {
  setup () {
    const formRef = ref('form') as any
    const formData = reactive({
      user: '',
      password: ''
    })

    const rules = {
      user: [{ required: true, message: '请输入用户名', tragger: 'blur' }],
      password: [{ required: true, message: '请输入用密码', tragger: 'blur' }]
    }

    const submitForm = (): void => {
      window.location.href = 'http://localhost:8080/?token=adashdkl456&tenantId=02&sysId=132'
    }
    const resetForm = (): void => {
      formRef.value.resetFields()
    }

    return {
      formData,
      formRef: formRef,
      rules,
      submitForm,
      resetForm
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 400px;
  height: 550px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba($color: #000000, $alpha: 0.5),
    -3px -3px 20px rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  left: 50%;
  top: 50%;
  flex-direction: column;
  transform: translate3d(-50%, -60%, 0);
  display: flex;
  align-items: center;
}
</style>
