<template>
  <div class="login-container">
    <h1>Login</h1>
    <a href="/.auth/login/github" class="btn btn-primary" >Login with GitHub</a>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
  data: ()=>({
    user_data: "",
    userRoles: []
  }),
  methods:{
    LoginClicked: async function(){
      try{
        // ログイン情報の取得
        const ret = await fetch('/.auth/me');
        this.user_data = await ret.json();
        this.userRoles = this.user_data.clientPrincipal.userRoles

        if (this.userRoles.includes('invited_users')){
          console.log("Success.")
        }
        else{
          console.log("Not Authorized.")
        }
      }
      catch{
        this.user_data = ""
        this.userRoles = []
        console.log("Error.")
      }
    },
    CheckLogIn: async function(){
      try{
        // ログイン情報の取得
        const ret = await fetch('/.auth/me');
        this.user_data = await ret.json();
        this.userRoles = this.user_data.clientPrincipal.userRoles
        
        // invited_usersロールを持っているか確認
        if(this.userRoles.includes('invited_users')){
          this.$router.push({path: "home"})
          console.log("Login.")
        }else{
          console.log("Not LogIn.")
        }
      }
      catch{
        console.log("Not LogIn.")
      }
    }
  },
  mounted(){
    this.CheckLogIn()
  }

}
</script>

<style scoped>
.login-container {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
}

.btn {
margin-top: 20px;
padding: 10px 20px;
text-decoration: none;
color: #fff;
background-color: #007bff;
border: none;
border-radius: 4px;
cursor: pointer;
}

.btn:hover {
background-color: #0056b3;
}

h1 {
font-size: 24px;
margin-bottom: 20px;
color:  #b6b2b2;
}
</style>
