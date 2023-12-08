const { createApp } = Vue;
// Vue Instance
const app = createApp({
  data() {
    return {
      password: "",
      showErrorMessage: false,
      errorMessage: "",
      successMessage: "",
    };
  },
  watch: {
    password: {
      handler(newValue, oldValue) {
        if (newValue.length < 8) {
          (this.showErrorMessage = true),
            (this.errorMessage =
              "The password must be at least 8 characters long.");
          return;
        }

        const hasOneCapital = newValue.split("").some((p) => {
          return p === p.toUpperCase();
        });
        if (hasOneCapital === false) {
          (this.showErrorMessage = true),
            (this.errorMessage =
              "The password must contain at least one uppercase letter.");
          return;
        }

        const specialChar = ["@", "#", "$", "%", "^", "&", "*"];
        const hasSpecialChar = newValue
          .split("")
          .some((s) => specialChar.includes(s));

        if (hasSpecialChar === false) {
          (this.showErrorMessage = true),
            (this.errorMessage =
              "The password must contain at least one special character. (i.e @, #, $, %, ^, &, *)");
        } else {
          this.errorMessage = "";
          this.showErrorMessage = false;
          this.successMessage = "Your password is valid!";
        }
      },

      immediate: true,
    },
  }, // Which property to watch?
});
app.mount("#app");
