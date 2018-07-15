<template>
  <div class="signup">
    <v-app>
      <v-content>
        <v-container fluid fill-height class="grey lighten-2">
          <v-layout align-center justify-center>
            <v-flex sm4>
              <v-card class="elevation-12" flat>
                <v-toolbar>
                  <v-icon>fiber_new</v-icon> <v-toolbar-title>signup</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form @submit="signup">
<!--                    <v-text-field v-model="user.username" name="username" lable="username" hint='username' type="text" required></v-text-field>
                    <v-text-field v-model="user.fullname" name="fullname" lable="fullname" hint='fullname' type="fullname" required ></v-text-field>
  -->
                      <v-text-field v-model="user.email" name="email" lable="email" hint='email' type="email" required ></v-text-field>
                  <v-text-field v-model="user.password" name="password" lable="password" hint='password' type="password" required ></v-text-field>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn type="submit" color="primary">signup</v-btn>
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
      user: {},
      row: null,
      status : ''
    };
  },
  methods: {
    signup: function(e) {
      e.preventDefault();
      this.$store
        .dispatch("signup", {
            email: this.user.email,
            password: this.user.password
            })
        .then(res => {
          var newuser = this.$store.getters.signup;
        })
        .catch(err => {
          console.log("search failed", err);
        });
    }
  },
  computed: {}
};
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
