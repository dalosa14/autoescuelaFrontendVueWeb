import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import VueCompositionApi from "@vue/composition-api";
import { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";
Vue.use(VueCompositionApi);
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(require('vue-cookies'))
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";

const httpLink = createHttpLink({
    uri: "http://localhost:1337/graphql"
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

new Vue({
    router,
    setup() {
        provide(DefaultApolloClient, apolloClient);
    },
    render: h => h(App)
}).$mount("#app");