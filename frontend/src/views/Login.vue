<template>
  <div id="body">
    <h1 class="text-title mb-3">Bienvenue sur Groupomania</h1>
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-6">
          <div class="card">
            <div class="card-header">
              <font-awesome-icon icon="user" role="img" />
            </div>
            <div class="card-body">
              <form @submit.prevent="_loginForm">
                <div class="formAuth">
                  <div class="formAuth__group">
                    <label for="email">Email</label>
                    <input
                      v-model="email"
                      name="email"
                      id="email"
                      type="email"
                      checked="true"
                      placeholder="Votre email"
                    />
                  </div>
                </div>
                <div class="formAuth">
                  <div class="formAuth__group">
                    <label for="password">Mot de passe</label>
                    <input
                      v-model="password"
                      name="password"
                      id="password"
                      type="password"
                      checked="true"
                      placeholder="Votre mot de passe"
                    />
                  </div>
                </div>
                <div class="d-grid gap-2">
                  <button
                    type="submit"
                    class="btn btn-light btn-outline-dark"
                    @click="submit"
                  >
                    <span>Se connecter</span>
                  </button>
                </div>
                <p v-if="showError" class="error">
                  <span class="error--modifier">
                    {{ error.error
                    }}<!--utilisateur non trouvé-->
                  </span>
                </p>
                <p v-else class="succes">
                  <span class="succes--modifier">
                    {{ succes.message
                    }}<!--utilisateur non trouvé-->
                  </span>
                </p>
                <div id="nav">
                  <!-- <router-link class="link" to="/forgot"
                    >Mot de passe oublié ?</router-link
                  >
                  | -->
                  <router-link class="link" to="/signup"
                    >S'inscrire</router-link
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  component: {},
  data() {
    return {
      formValues: {
        email: "",
        password: "",
      },
      showError: false,
      error: "",
      succes: "",
    };
  },
  methods: {
    _loginForm() {
      const email = this.email;
      const password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          this.showError = true;
          this.error = error.response.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#body {
  @include imageBg;
  background-size: cover;
  overflow: hidden;
  height: 100vh;
  .text-title {
    color: $title;
    font-size: 3.2rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    z-index: 2;
    padding: 3% 10px 2% 10px;
  }
  .container {
    opacity: 0.8;
    .card-body {
      form {
        .formAuth {
          &__group {
            display: flex;
            flex-direction: column;
            text-align: left;
            margin-bottom: $spacer;
            input {
              border: 1px solid $cd-txt-opacity;
              background-color: $cd-txt-opacity;
              border-radius: 3px;
              color: $cd-txt;
              font-family: "Montserrat", sans-serif;
              padding: 0.5rem 1.5rem;
              // transition: 600ms background-color;
            }
            :focus,
            :active {
              border: 1px solid $cd-txt;
            }
            :not(:focus):invalid {
              background-color: $danger;
              border: 1px solid $colorClicked;
              color: $cd-txt--invalid;
              
            }
          }
        }
        .error {
          margin-bottom: -1em;
          margin-top: 0.2rem;
          &--modifier {
            color: $danger;
          }
        }
        .succes {
          margin-bottom: -1em;
          margin-top: 0.2rem;
          &--modifier {
            color: $succes;
          }
        }
      }
    }
    button {
      margin-top: $spacer;
      background-color: $bg-btn--before;
      color: $cd-txt-btn--before;
      border-radius: 3rem;
      text-transform: uppercase;
      font-family: "Montserrat", sans-serif;
      &:hover {
        background-color: $bg-btn--after;
        color: $cd-txt-btn--after;
        transition: 350ms;
      }
    }
  }
}
#body::before {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $cd-txt-opacity;
  z-index: 0
}
#nav {
  padding: 30px;
  .link {
    text-decoration: none;
  }
  a {
    font-weight: bold;
    color: $colorNotClicked;

    &.router-link-exact-active {
      color: $colorClicked;
    }
  }
}

@keyframes headshake {
  25% {
    //vers la droite
    transform: translateX($shake-intensity);
    // vers la gauche
    transform: translateX($shake-intensity);
  }
}
</style>