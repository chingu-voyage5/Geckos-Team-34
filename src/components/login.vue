<template>
  <div class="login">
    <v-app>
      <v-content>
        <v-container fluid fill-height class="grey lighten-2">
          <v-layout align-center justify-center>
            <v-flex sm4>
<!--               <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>-->
              <v-card class="elevation-12" flat>
                <v-toolbar>
                  <v-icon>lock</v-icon> <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form @submit="login">
                    <v-text-field v-model="nwuser.email" name="email" lable="email" hint='email' type="text" required></v-text-field>
                    <v-text-field v-model="nwuser.password" name="password" lable="password" hint='password' type="password" required ></v-text-field>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn type="submit" color="primary">Login</v-btn>
                      </v-card-actions>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      nwuser: {},
      row: null,
      error : ''
    };
  },
  methods: {
    login: function(e) {
      e.preventDefault();
      this.$store
        .dispatch("login", { 
            email: this.nwuser.email,
            password: this.nwuser.password
            })
    }
  },    
  watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/profile')
        }
      }
  },
  computed: {
      user () {
        return this.$store.getters.user
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
