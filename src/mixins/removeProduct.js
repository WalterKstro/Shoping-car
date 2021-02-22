import { mapActions } from "vuex";

const buyProduct = {
  methods : {
    ...mapActions(['buyProduct'])
  }
}

export{
  buyProduct
}